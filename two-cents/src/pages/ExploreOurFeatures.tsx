import FeatureSlider from '../components/FeatureSlider';
import { FadeUp } from '../components/layout/FadeUp';
import WaitListJoin from '../components/WaitlistJoin';

const ExploreOurFeatures = () => {
  return (
    
    <section className="w-full bg-white font-['Outfit'] overflow-x-hidden">
      <FadeUp delay={1}>
  {/* ── Hero text ── */}
  <div className="px-6 md:px-8 lg:px-[100px] pt-12 md:pt-16 lg:pt-20 text-left">
    <div className="md:max-w-[70%]">
      <h1 className="text-[clamp(28px,6vw,68px)] font-bold text-black leading-normal mb-3 md:mb-4">
        Let&apos;s explore our features!
      </h1>
      <p className="text-[clamp(16px,3.5vw,42px)] font-semibold text-black leading-normal">
        Managing your finances can feel overwhelming, but Cento from TwoCents
        is here to guide you along the way!
      </p>
    </div>
  </div>
  </FadeUp>

  {/* ── Hill + Mascot + Feature Slider ── */}
  <div className="relative mt-6 md:mt-0">

    {/* Hill inside relative parent, z-0 so mascot + slider sit on top */}
    <img
      src="/images/Home Screen Base Hill.svg"
      alt=""
      aria-hidden="true"
      className="absolute top-10 left-0 z-0 w-full h-full object-cover object-top pointer-events-none select-none scale-x-[-1]"
    />

    {/* Mascot */}
    <FadeUp delay={3}>
      <div className="relative z-10 h-56 md:h-[300px] lg:h-[520px]">
        <img
          className="absolute 
                    left-1/2 -translate-x-1/2
                    md:left-[60%] md:translate-x-0
                    lg:left-[55%] lg:translate-x-0
                    h-56 md:h-[300px] lg:h-[30vw]
                    w-auto object-contain"
          src="/images/Cento_search.svg"
          alt="Cento the coin mascot"
        />
      </div>
    </FadeUp>

    {/* Feature Slider */}
    <FadeUp delay={2}>
    <div className="relative z-10">
      <FeatureSlider />
    </div>
    </FadeUp>

  </div>

  <FadeUp>
      <WaitListJoin />

  </FadeUp>


</section>
  );
};

export default ExploreOurFeatures;
