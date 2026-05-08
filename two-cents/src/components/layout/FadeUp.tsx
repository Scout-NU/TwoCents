import { useInView } from "../../hooks/useInView";

interface FadeUpProps {
  children: React.ReactNode;
  variant?: "fade" | "bounce" | "pop";
  delay?: 0 | 1 | 2 | 3 | 4;
  threshold?: number;
  className?: string;
  style?: React.CSSProperties;   
}

export const FadeUp: React.FC<FadeUpProps> = ({
  children,
  variant = "fade",
  delay = 0,
  threshold,
  className = "",
  style,                         
}) => {
  const { ref, inView } = useInView(threshold);
  const baseClass = variant === "bounce" ? "bounce-up" : variant === "pop" ? "pop-in" : "fade-up";

  return (
    <div
      ref={ref}
      className={`${baseClass} ${inView ? "visible" : ""} ${delay ? `delay-${delay}` : ""} ${className}`}
      style={style}               
    >
      {children}
    </div>
  );
};