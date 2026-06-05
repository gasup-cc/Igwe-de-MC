import { useId } from "react";

const ACCENT_DOTS = [
  { cx: 80, cy: 80, fill: "rgba(212,175,55,0.45)" },
  { cx: 200, cy: 160, fill: "rgba(124,58,237,0.35)" },
  { cx: 320, cy: 80, fill: "rgba(212,175,55,0.45)" },
  { cx: 480, cy: 240, fill: "rgba(124,58,237,0.35)" },
  { cx: 640, cy: 120, fill: "rgba(212,175,55,0.45)" },
  { cx: 800, cy: 320, fill: "rgba(124,58,237,0.35)" },
  { cx: 960, cy: 200, fill: "rgba(212,175,55,0.45)" },
  { cx: 1120, cy: 360, fill: "rgba(124,58,237,0.35)" },
  { cx: 1240, cy: 120, fill: "rgba(212,175,55,0.45)" },
  { cx: 160, cy: 360, fill: "rgba(124,58,237,0.35)" },
  { cx: 360, cy: 480, fill: "rgba(212,175,55,0.45)" },
  { cx: 560, cy: 400, fill: "rgba(124,58,237,0.35)" },
  { cx: 760, cy: 560, fill: "rgba(212,175,55,0.45)" },
  { cx: 1000, cy: 480, fill: "rgba(124,58,237,0.35)" },
  { cx: 1200, cy: 600, fill: "rgba(212,175,55,0.45)" },
  { cx: 1360, cy: 280, fill: "rgba(124,58,237,0.35)" },
];

export const AnimatedGrid = () => {
  const patternId = useId().replace(/:/g, "");
  const glowFilterId = `${patternId}-glow`;

  return (
    <div className="animated-grid" aria-hidden>
      <svg className="animated-grid__svg" width="100%" height="100%" preserveAspectRatio="none">
        <defs>
          <pattern id={patternId} width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="0.8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
      <svg className="animated-grid__glow" width="100%" height="100%" preserveAspectRatio="none">
        <defs>
          <filter id={glowFilterId} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" />
          </filter>
        </defs>
        <g filter={`url(#${glowFilterId})`}>
          {ACCENT_DOTS.map((dot) => (
            <circle key={`${dot.cx}-${dot.cy}`} cx={dot.cx} cy={dot.cy} r="2" fill={dot.fill} />
          ))}
        </g>
      </svg>
      <span className="animated-grid__orb animated-grid__orb--purple" />
      <span className="animated-grid__orb animated-grid__orb--gold" />
    </div>
  );
};
