import { useState } from "react";
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
    placeholderSrc: "/images/Feature%20Image.png",
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
    placeholderSrc: "/images/Feature%20Image.png",
  },
];

export default function FeatureSlider() {




  const [current, setCurrent] = useState(0);
const [hoveredArrow, setHoveredArrow] = useState<"prev" | "next" | null>(null);

const goTo = (index: number) => setCurrent(index);
const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
const next = () => setCurrent((c) => (c + 1) % slides.length);
  const slide = slides[current];
  
  return (
    <section className="feature-slider-section">
      <div className="feature-slider-card">
        <div className="feature-slider-card-body">
          <div className="feature-slider-image-wrap">
            <img
              src={slide.imageSrc || slide.placeholderSrc || ""}
              alt={slide.imageAlt}
              className="feature-slider-screenshot"
            />
          </div>

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

        <div className="feature-slider-dots">
  <button
    className="feature-slider-arrow"
    onClick={prev}
    onMouseEnter={() => setHoveredArrow("prev")}
    onMouseLeave={() => setHoveredArrow(null)}
    aria-label="Previous slide"
    style={{
      background: hoveredArrow === "prev" ? "#0C5483" : "#FFF",
      border: "1px solid #D9D9D9",
    }}
  >
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M15 18l-6-6 6-6" stroke={hoveredArrow === "prev" ? "#FFF" : "#0C5483"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </button>

  {slides.map((_, i) => (
    <button
      key={i}
      className={`feature-slider-dot${i === current ? " active" : ""}`}
      onClick={() => goTo(i)}
      aria-label={`Go to slide ${i + 1}`}
    />
  ))}

  <button
    className="feature-slider-arrow"
    onClick={next}
    onMouseEnter={() => setHoveredArrow("next")}
    onMouseLeave={() => setHoveredArrow(null)}
    aria-label="Next slide"
    style={{
      background: hoveredArrow === "next" ? "#0C5483" : "#FFF",
      border: "1px solid #D9D9D9",
    }}
  >
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M9 18l6-6-6-6" stroke={hoveredArrow === "next" ? "#FFF" : "#0C5483"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </button>
</div>
      </div>
    </section>
  );
}
