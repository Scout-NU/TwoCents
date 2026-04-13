import { useState, useEffect, useRef } from 'react';

// ── Types ─────────────────────────────────────────────────────────────
interface Slide {
  title: string;
  body: string;
  highlights: string[];
  imgSrc: string;
  imgAlt: string;
}

// ── Slide data ────────────────────────────────────────────────────────
// Slides 2 & 3 are intentionally empty placeholders for future content.
const SLIDES: Slide[] = [
  {
    title: 'Proactive Spending Alerts',
    body: "TwoCents sends you a push notification within minutes of every purchase, showing not just what you spent, but how much you have remaining in that priority. Instead of discovering you're over budget at month-end, you get proactive clarity before your next spending decision. This transforms budgeting from reactive shame to proactive empowerment.",
    highlights: [
      "Get notified when you spend, see what's left in real-time",
      'Know before you overspend, not after',
      'Clear guidance without judgment',
    ],
    imgSrc: '/images/phone-alerts.png',
    imgAlt: 'Phone showing spending alert notifications',
  },
  { title: '', body: '', highlights: [], imgSrc: '', imgAlt: '' },
  { title: '', body: '', highlights: [], imgSrc: '', imgAlt: '' },
];

const TOTAL = SLIDES.length;
const AUTO_INTERVAL = 4500;

// ── Dot navigation ────────────────────────────────────────────────────
interface DotsProps {
  active: number;
  total: number;
  onDotClick: (index: number) => void;
}

const SlideDots = ({ active, total, onDotClick }: DotsProps) => {
  const positions = [5, 23, 41];
  return (
    <svg
      width="46"
      height="10"
      viewBox="0 0 46 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="features-dots"
      aria-label="Slide navigation"
    >
      {positions.slice(0, total).map((cx, i) => (
        <circle
          key={i}
          cx={cx}
          cy={5}
          r={5}
          fill={i === active ? 'black' : '#C4C4C4'}
          fillOpacity={i === active ? 0.5 : 1}
          onClick={() => onDotClick(i)}
          role="button"
          tabIndex={0}
          aria-label={`Go to slide ${i + 1}`}
          style={{ cursor: 'pointer' }}
        />
      ))}
    </svg>
  );
};

// ── Main component ────────────────────────────────────────────────────
const ExploreOurFeatures = () => {
  const [current, setCurrent] = useState<number>(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef<number>(0);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TOTAL);
    }, AUTO_INTERVAL);
  };

  const goTo = (index: number) => {
    setCurrent(index);
    startTimer();
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) {
      goTo(dx < 0 ? (current + 1) % TOTAL : (current - 1 + TOTAL) % TOTAL);
    }
  };

  return (
    <section className="features-section">

      {/* ── Hero text ── */}
      <div className="features-hero-text">
        <h1 className="features-heading">Let&apos;s explore our features!</h1>
        <p className="features-subheading">
          Managing your finances can feel overwhelming, but Cento from TwoCents
          is here to guide you along the way!
        </p>
      </div>

      {/* ── Hill + Mascot ── */}
      <div className="features-hill-wrap">
        <svg
          className="features-hill-svg"
          viewBox="0 0 1474 928"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMaxYMax meet"
          aria-hidden="true"
        >
          <path
            d="M0 927.743V660.815C514.589 172.747 859.858 6.316 1474 0V603.645C849.678 651.243 498.302 721.371 0 927.743Z"
            fill="url(#hillGradient)"
          />
          <defs>
            <linearGradient
              id="hillGradient"
              x1="696.5"
              y1="-0.183106"
              x2="882.862"
              y2="629.212"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#ABD8F6" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
          </defs>
        </svg>

        <img
          className="features-mascot"
          src="/images/cento-search.svg"
          alt="Cento the coin mascot"
        />
      </div>

      {/* ── Sliding feature card ── */}
      <div className="features-card-wrap">
        <div className="features-card">
          <div className="features-slides-viewport">
            <div
              className="features-slides-track"
              style={{ transform: `translateX(-${current * 100}%)` }}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {SLIDES.map((slide, idx) => (
                <div className="features-slide" key={idx}>
                  {slide.title ? (
                    <div className="features-slide-inner">
                      <div className="features-slide-phone">
                        <img src={slide.imgSrc} alt={slide.imgAlt} />
                      </div>
                      <div className="features-slide-text">
                        <h2 className="features-slide-title">{slide.title}</h2>
                        <p className="features-slide-body">{slide.body}</p>
                        {slide.highlights.length > 0 && (
                          <>
                            <p className="features-slide-hl-label">Highlights</p>
                            <ul className="features-slide-hl-list">
                              {slide.highlights.map((item, hi) => (
                                <li key={hi}>{item}</li>
                              ))}
                            </ul>
                          </>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="features-slide-empty" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="features-dots-row">
            <SlideDots active={current} total={TOTAL} onDotClick={goTo} />
          </div>
        </div>
      </div>

      {/* ── CTA placeholder ── */}
      <div className="features-cta-wrap">
        <div className="features-cta-placeholder">
          {/* Join Waitlist component goes here */}
        </div>
      </div>

    </section>
  );
};

export default ExploreOurFeatures;