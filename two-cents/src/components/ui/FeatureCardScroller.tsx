import React, { useRef, useState, useEffect } from "react";
import { FeatureCard, type FeatureCardProps, } from "./FeatureCard";

interface FeatureCardScrollerProps {
  cards: FeatureCardProps[];
}

export const FeatureCardScroller: React.FC<FeatureCardScrollerProps> = ({ cards }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const handleScroll = () => setScrollLeft(el.scrollLeft);
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  // Fade in from 0 → fully opaque over first 80px of scroll
  const leftFadeOpacity = Math.min(scrollLeft / 80, 1);

  return (
    <div style={{ position: "relative", width: "100%" }}>
      {/* Scrollable track */}
      <div
        ref={scrollRef}
        style={{
          display: "flex",
          gap: "20px",
          overflowX: "auto",
          overflowY: "visible",
          padding: "20px 40px 32px 40px",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <style>{`.feature-scroller::-webkit-scrollbar { display: none; }`}</style>

        {cards.map((card, i) => (
          <FeatureCard key={i} {...card} />
        ))}

        {/* Right padding spacer */}
        <div style={{ minWidth: "8px", flexShrink: 0 }} />
      </div>

      {/* Left fade overlay — fades in as user scrolls right */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "140px",
          height: "100%",
          background:
            "linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 100%)",
          pointerEvents: "none",
          opacity: leftFadeOpacity,
          transition: "opacity 0.25s ease",
          zIndex: 2,
        }}
      />
    </div>
  );
};

export default FeatureCardScroller;