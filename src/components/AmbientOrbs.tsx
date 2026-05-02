import { cn } from "@/lib/utils";

interface AmbientOrbsProps {
  variant?: "default" | "gold" | "violet" | "hero";
  className?: string;
}

export const AmbientOrbs = ({ variant = "default", className }: AmbientOrbsProps) => {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden z-0", className)} aria-hidden>
      {variant === "hero" && (
        <>
          <div className="absolute -top-32 -left-32 w-[700px] h-[500px] rounded-full opacity-90"
               style={{ background: "radial-gradient(ellipse 600px 400px at 30% 30%, rgba(212,175,55,0.18) 0%, transparent 70%)" }} />
          <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] rounded-full"
               style={{ background: "radial-gradient(ellipse 500px 500px at 70% 50%, rgba(124,58,237,0.12) 0%, transparent 70%)" }} />
          <div className="absolute -bottom-20 left-1/3 w-[800px] h-[400px]"
               style={{ background: "radial-gradient(ellipse 700px 300px at 50% 100%, rgba(30,58,138,0.16) 0%, transparent 70%)" }} />
        </>
      )}
      {variant === "default" && (
        <>
          <div className="absolute top-0 left-1/4 w-[600px] h-[400px]"
               style={{ background: "radial-gradient(ellipse 600px 400px at 20% 30%, rgba(212,175,55,0.08) 0%, transparent 70%)" }} />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px]"
               style={{ background: "radial-gradient(ellipse 500px 500px at 80% 70%, rgba(124,58,237,0.06) 0%, transparent 70%)" }} />
        </>
      )}
      {variant === "gold" && (
        <div className="absolute inset-0"
             style={{ background: "radial-gradient(ellipse 800px 500px at 50% 50%, rgba(212,175,55,0.10) 0%, transparent 70%)" }} />
      )}
      {variant === "violet" && (
        <div className="absolute inset-0"
             style={{ background: "radial-gradient(ellipse 700px 500px at 50% 50%, rgba(124,58,237,0.08) 0%, transparent 70%)" }} />
      )}
    </div>
  );
};
