import { useId } from "react";

export const AnimatedGrid = () => {
  const patternId = useId().replace(/:/g, "");

  return (
    <div className="animated-grid" aria-hidden>
      <svg className="animated-grid__svg" width="100%" height="100%" preserveAspectRatio="none">
        <defs>
          <pattern id={patternId} width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
      <span className="animated-grid__orb animated-grid__orb--purple" />
      <span className="animated-grid__orb animated-grid__orb--gold" />
    </div>
  );
};
