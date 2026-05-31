import { useEffect, useRef, useState } from "react";

type Point = { x: number; y: number };
type LightningEffectProps = {
  variant?: "default" | "footer";
};

const randomBetween = (min: number, max: number) => min + Math.random() * (max - min);
const toRadians = (deg: number) => (deg * Math.PI) / 180;

const splitSegment = (start: Point, end: Point, depth: number, displacement: number): Point[] => {
  if (depth <= 0) return [start, end];

  const midpoint = {
    x: (start.x + end.x) / 2 + randomBetween(-displacement, displacement),
    y: (start.y + end.y) / 2,
  };
  const left = splitSegment(start, midpoint, depth - 1, displacement * 0.55);
  const right = splitSegment(midpoint, end, depth - 1, displacement * 0.55);

  return [...left.slice(0, -1), ...right];
};

const createBolt = (width: number, height: number) => {
  const startX = randomBetween(width * 0.12, width * 0.88);
  const endX = Math.min(width, Math.max(0, startX + randomBetween(-100, 100)));
  const start = { x: startX, y: randomBetween(0, height * 0.2) };
  const end = { x: endX, y: randomBetween(height * 0.6, height * 0.9) };

  return splitSegment(start, end, 5, Math.min(width * 0.12, 140));
};

const createBranches = (points: Point[], height: number) => {
  if (Math.random() > 0.3 || points.length < 8) return [];

  const branchCount = Math.random() > 0.5 ? 2 : 1;
  return Array.from({ length: branchCount }, () => {
    const index = Math.floor(randomBetween(3, points.length - 4));
    const origin = points[index];
    const next = points[index + 1];
    const baseAngle = Math.atan2(next.y - origin.y, next.x - origin.x);
    const forkAngle = baseAngle + (Math.random() > 0.5 ? 1 : -1) * toRadians(randomBetween(20, 45));
    const length = height * randomBetween(0.18, 0.32);
    const end = {
      x: origin.x + Math.cos(forkAngle) * length,
      y: origin.y + Math.sin(forkAngle) * length,
    };

    return splitSegment(origin, end, 3, 42);
  });
};

const drawPath = (
  ctx: CanvasRenderingContext2D,
  points: Point[],
  alpha: number,
  widthScale = 1
) => {
  const layers = [
    { stroke: "rgba(212,175,55,0.08)", width: 8, blur: 12 },
    { stroke: "rgba(212,175,55,0.15)", width: 3, blur: 4 },
    { stroke: "rgba(255,240,180,0.6)", width: 1, blur: 0 },
  ];

  layers.forEach((layer) => {
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.strokeStyle = layer.stroke;
    ctx.lineWidth = layer.width * widthScale;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.filter = layer.blur ? `blur(${layer.blur}px)` : "none";
    ctx.beginPath();
    points.forEach((point, index) => {
      if (index === 0) ctx.moveTo(point.x, point.y);
      else ctx.lineTo(point.x, point.y);
    });
    ctx.stroke();
    ctx.restore();
  });
};

export const LightningEffect = ({ variant = "default" }: LightningEffectProps) => {
  const [shouldRender, setShouldRender] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth >= 1024 && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const timeoutRef = useRef<number>();
  const rafRef = useRef<number>();
  const renderResizeTimeoutRef = useRef<number>();
  const canvasResizeTimeoutRef = useRef<number>();
  const isMountedRef = useRef(false);

  useEffect(() => {
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      window.clearTimeout(renderResizeTimeoutRef.current);
      renderResizeTimeoutRef.current = window.setTimeout(() => {
        setShouldRender(window.innerWidth >= 1024 && !reducedMotionQuery.matches);
      }, 200);
    };

    setShouldRender(window.innerWidth >= 1024 && !reducedMotionQuery.matches);
    window.addEventListener("resize", update, { passive: true });
    reducedMotionQuery.addEventListener("change", update);

    return () => {
      window.removeEventListener("resize", update);
      reducedMotionQuery.removeEventListener("change", update);
      window.clearTimeout(renderResizeTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (!shouldRender) return;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    isMountedRef.current = true;
    let width = 0;
    let height = 0;

    const resize = () => {
      if (!isMountedRef.current) return;
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);
    };

    const debouncedResize = () => {
      window.clearTimeout(canvasResizeTimeoutRef.current);
      canvasResizeTimeoutRef.current = window.setTimeout(resize, 200);
    };

    const schedule = () => {
      if (!isMountedRef.current) return;
      const min = variant === "footer" ? 5000 : 3000;
      const max = variant === "footer" ? 11000 : 7000;
      timeoutRef.current = window.setTimeout(trigger, randomBetween(min, max));
    };

    const trigger = () => {
      if (!isMountedRef.current) return;

      const bolt = createBolt(width, height);
      const branches = createBranches(bolt, height);
      const startedAt = performance.now();
      const duration = 320;

      const frame = (now: number) => {
        if (!isMountedRef.current) return;

        const elapsed = now - startedAt;
        ctx.clearRect(0, 0, width, height);

        const flashAlpha =
          elapsed <= 80 ? 0.03 : elapsed <= 280 ? 0.03 * (1 - (elapsed - 80) / 200) : 0;
        if (flashAlpha > 0) {
          ctx.save();
          ctx.globalAlpha = 1;
          ctx.fillStyle = `rgba(212,175,55,${flashAlpha})`;
          ctx.fillRect(0, 0, width, height);
          ctx.restore();
        }

        const boltAlpha = Math.max(0, 1 - elapsed / 220);
        if (boltAlpha > 0) {
          drawPath(ctx, bolt, boltAlpha);
          branches.forEach((branch) => drawPath(ctx, branch, boltAlpha * 0.4, 0.75));
        }

        if (elapsed < duration) {
          rafRef.current = requestAnimationFrame(frame);
        } else {
          ctx.clearRect(0, 0, width, height);
          schedule();
        }
      };

      rafRef.current = requestAnimationFrame(frame);
    };

    resize();
    window.addEventListener("resize", debouncedResize, { passive: true });
    schedule();

    return () => {
      isMountedRef.current = false;
      window.removeEventListener("resize", debouncedResize);
      window.clearTimeout(canvasResizeTimeoutRef.current);
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      ctx.clearRect(0, 0, width, height);
    };
  }, [shouldRender, variant]);

  if (!shouldRender) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={variant === "footer" ? "lightning-canvas lightning-canvas--footer" : "lightning-canvas"}
    />
  );
};
