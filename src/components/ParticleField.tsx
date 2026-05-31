import { useEffect, useRef } from "react";

interface Particle {
  x: number; y: number; vx: number; vy: number;
  radius: number; opacity: number; color: string; twinkle: number;
}

const COLORS = [
  ...Array(40).fill("#D4AF37"),
  ...Array(30).fill("#F0CC5A"),
  ...Array(15).fill("#7C3AED"),
  ...Array(15).fill("#ffffff"),
];

export const ParticleField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const initParticles = () => {
      particlesRef.current = Array.from({ length: 80 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: 0.5 + Math.random() * 1.3,
        opacity: 0.1 + Math.random() * 0.4,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        twinkle: Math.random() * Math.PI * 2,
      }));
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };
    resize();
    window.addEventListener("resize", resize, { passive: true });

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const particles = particlesRef.current;
      const t = Date.now() * 0.001;

      // connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.globalAlpha = 0.03 * (1 - dist / 120);
            ctx.strokeStyle = "#D4AF37";
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      for (const p of particles) {
        if (!reduced) {
          p.x += p.vx; p.y += p.vy;
          if (p.x < 0) p.x = canvas.width;
          if (p.x > canvas.width) p.x = 0;
          if (p.y < 0) p.y = canvas.height;
          if (p.y > canvas.height) p.y = 0;
        }
        const op = Math.min(1, Math.max(0, p.opacity + Math.sin(t + p.twinkle) * 0.2));
        ctx.globalAlpha = op;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      if (!reduced) rafRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, pointerEvents: "none" }}
    />
  );
};
