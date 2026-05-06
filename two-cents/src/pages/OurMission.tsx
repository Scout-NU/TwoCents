import { FadeUp } from "../components/layout/FadeUp";
import WaitListJoin from "../components/WaitlistJoin";

const OurMission = () => {
    return (
<div className="relative overflow-hidden">

            {/* Main content */}
            <div className="relative z-20">
                <div className="relative flex flex-col md:flex-row justify-center items-start px-6 md:px-16 pt-16 z-10">
                    <FadeUp>
                    <div className="w-full max-w-2xl mx-auto mt-15 mb-10 relative z-10">
                        <div className="relative inline-block pr-16 sm:pr-24 lg:pr-32 xl:pr-40">
                            
                            <h1 className="text-5xl text-black md:text-5xl pb-4 md:pb-6 font-semibold leading-tight">
                                Our Mission
                            </h1>
                            {/* Desktop Centy */}
                            <img
                                src="/images/centy-bill.png"
                                className="hidden lg:block absolute -left-50 -top-24 w-120 xl:w-120 -translate-x-1/4 z-0 pointer-events-none"
                            />
                            {/* Mobile + Tablet Centy */}
                            <img
                                src="/images/centy-bill.png"
                                className="lg:hidden absolute left-80 -top-10 w-48 -translate-x-1/2 -translate-y-1/4 -scale-x-100 sm:w-60 sm:-top-16 sm:left-25 sm:translate-x-1/4 sm:-scale-x-100 z-20 pointer-events-none [@media(max-width:360px)]:w-50 [@media(max-width:360px)]:top-5 [@media(max-width:360px)]:left-55"
                            />
                        </div>
                        <p className="font-medium text-3xl md:text-4xl tracking-[2.1px] leading-normal  m-0">
                            TwoCents reimagines how Gen-Z connects with money.
                        </p>
                    </div>
                    </FadeUp>
                </div>

                {/* Hills image — in flow so it doesn't swallow the footer */}
                
                <img src="/images/OurMissionHills.png" alt="" aria-hidden="true" className="w-full h-[900px] top-[240px] object-top object-cover absolute overflow-hidden" />

                <FadeUp delay={1}>
                <div className="px-4 md:px-0 pt-4">
                    <div className="bg-white w-full max-w-2xl flex justify-center mx-auto px-6 md:w-137.5 md:px-8 py-6 md:py-8 md:mb-16 mb-8 drop-shadow-xl rounded-2xl lg:w-200">
                        <p className="text-sm md:text-xl text-center leading-snug tracking-wider m-0">
                            We believe financial anxiety doesn't come from lack of willpower - it comes from lack of clarity.
                            Our mission is to make money awareness a lifestyle—something social, empowering, and intuitive—not
                            a chore or a shame trigger. Through proactive spending alerts, psychology-informed design, and empowering language,
                            we help young adults take control of their finances without fear or judgment.
                        </p>
                    </div>
                </div>
                </FadeUp>

                <FadeUp delay={2}>
                <WaitListJoin imageSrc="/images/cento-waving.png" />
                </FadeUp>
            </div>

        </div>
    );
};

export default OurMission;