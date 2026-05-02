import { useState, useRef } from "react";
import "./FeatureSlider.css";

interface Slide {
  title: string;
  description: string;
  highlights: string[];
  imageAlt: string;
  imageSrc?: string;
  placeholderSrc?: string;
}

const slides: Slide[] = [
  {
    title: "Proactive Spending Alerts",
    description:
      "TwoCents sends you a push notification within minutes of every purchase, showing not just what you spent, but how much you have remaining in that priority. Instead of discovering you're over budget at month-end, you get proactive clarity before your next spending decision. This transforms budgeting from reactive shame to proactive empowerment.",
    highlights: [
      "Get notified when you spend, see what's left in real-time",
      "Know before you overspend, not after",
      "Clear guidance without judgment",
    ],
    imageAlt: "Proactive Spending Alerts app screenshot",
    placeholderSrc: "/images/Feature%20Image.png",
  },
  {
    title: "Priorities, Not Budgets",
    description:
      "TwoCents helps you align your spending with what actually matters to you. Instead of rigid budget categories that feel like restrictions, you set priorities — and TwoCents guides your money to match. It's the difference between feeling controlled by your finances and feeling in control of them.",
    highlights: [
      "Set spending priorities based on your values",
      "Flexible categories that adapt to your life",
      "See progress toward what matters most",
    ],
    imageAlt: "Priorities feature app screenshot",
  },
  {
    title: "Real-Time Bank Sync",
    description:
      "Connect your accounts and watch your finances update instantly. No more manual entry, no more guessing, no more end-of-month surprises. TwoCents pulls live data from your bank so your picture of your money is always accurate, always current, always yours.",
    highlights: [
      "Instant sync across all your accounts",
      "No manual entry required",
      "Always accurate, always up to date",
    ],
    imageAlt: "Real-time bank sync app screenshot",
  },
];

export default function FeatureSlider() {
  const [current, setCurrent] = useState(0);
  const startX = useRef<number | null>(null);
  const isDragging = useRef(false);

  const goTo = (index: number) => {
    setCurrent(Math.max(0, Math.min(index, slides.length - 1)));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (startX.current === null) return;
    const diff = startX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      goTo(diff > 0 ? current + 1 : current - 1);
    }
    startX.current = null;
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    startX.current = e.clientX;
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (startX.current !== null && Math.abs(e.clientX - startX.current) > 5) {
      isDragging.current = true;
    }
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (startX.current === null) return;
    const diff = startX.current - e.clientX;
    if (isDragging.current && Math.abs(diff) > 40) {
      goTo(diff > 0 ? current + 1 : current - 1);
    }
    startX.current = null;
    isDragging.current = false;
  };

  const slide = slides[current];

  return (
    <section className="feature-slider-section">
      <div
        className="feature-slider-card"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {/* Feature image */}
        <div className="feature-slider-image-wrap">
          <img
            src={slide.imageSrc || slide.placeholderSrc || ""}
            alt={slide.imageAlt}
            className="feature-slider-screenshot"
          />
        </div>

        {/* Text content */}
        <div className="feature-slider-content">
          <h2 className="feature-slider-title">{slide.title}</h2>
          <p className="feature-slider-description">{slide.description}</p>
          <div className="feature-slider-highlights">
            <p className="feature-slider-highlights-label">Highlights</p>
            <ul className="feature-slider-highlights-list">
              {slide.highlights.map((item, i) => (
                <li key={i} className="feature-slider-highlight-item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Dot navigation */}
      <div className="feature-slider-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`feature-slider-dot${i === current ? " active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}