import FeatureSlider from '../components/FeatureSlider';
import WaitListJoin from '../components/WaitlistJoin';

const ExploreOurFeatures = () => {
  return (
    <section className="w-full bg-white font-['Outfit'] overflow-x-hidden">

      {/* ── Hero text ── */}
      <div className="px-6 md:px-8 lg:px-[100px] pt-12 md:pt-16 lg:pt-20 text-left">
        <div className="lg:max-w-[55%]">
          <h1 className="text-[clamp(28px,6vw,68px)] font-bold text-black leading-normal mb-3 md:mb-4">
            Let&apos;s explore our features!
          </h1>
          <p className="text-[clamp(16px,3.5vw,42px)] font-semibold text-black leading-normal">
            Managing your finances can feel overwhelming, but Cento from TwoCents
            is here to guide you along the way!
          </p>
        </div>
      </div>

      {/* ── Hill + Mascot + Feature Slider ── */}
      <div className="relative mt-6 md:mt-8">
        {/* Hill: full screen width, flipped horizontally, behind everything */}
        <img
          src="/images/Home Screen Base Hill.svg"
          alt=""
          aria-hidden="true"
          className="absolute top-0 left-0 w-full h-full object-cover object-top pointer-events-none select-none scale-x-[-1]"
        />

        {/* Mascot: centered on mobile, under text on tablet, halfway under text on desktop */}
        <div className="relative h-56 md:h-[300px] lg:h-[520px]">
          <img
            className="absolute bottom-0
                       left-1/2 -translate-x-1/2
                       md:left-[40%] md:translate-x-0
                       lg:left-[38%] lg:translate-x-0
                       h-56 md:h-[300px] lg:h-[520px]
                       w-auto object-contain z-10"
            src="/images/Cento_search.svg"
            alt="Cento the coin mascot"
          />
        </div>

        {/* Feature Slider on top of hill */}
        <div className="relative z-10">
          <FeatureSlider />
        </div>
      </div>

      {/* ── WaitList ── */}
      <WaitListJoin />

    </section>
  );
};

export default ExploreOurFeatures;
