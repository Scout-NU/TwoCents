import { useInView } from "../../hooks/useInView";

interface FadeUpProps {
  children: React.ReactNode;
  variant?: "fade" | "bounce";
  delay?: 0 | 1 | 2 | 3 | 4;
  threshold?: number;
  className?: string;
}

export const FadeUp: React.FC<FadeUpProps> = ({
  children,
  variant = "fade",
  delay = 0,
  threshold,
  className = "",
}) => {
  const { ref, inView } = useInView(threshold);

  const baseClass = variant === "bounce" ? "bounce-up" : "fade-up";

  return (
    <div
      ref={ref}
      className={`${baseClass} ${inView ? "visible" : ""} ${delay ? `delay-${delay}` : ""} ${className}`}
    >
      {children}
    </div>
  );
};