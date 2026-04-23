const CentoSpeechBubble = () => {
  return (
    <div className="flex h-80 px-8  flex-row items-end lg:gap-8 gap-2">
      {/* Cento */}
      <img
        src="/images/Cento_wave.svg"
        className="w-40 sm:w-40 md:w-70 h-auto shrink-0"
        alt="Cento mascot waving"
      />

      {/* Speech bubble wrapper */}
      <div className="relative -translate-y-30 md:-translate-y-40 lg:-translate-y-50">
        {/* Bubble */}
        <div className="shadow-[15px_15px_0px_#ABD8F6] rounded-4xl bg-white   max-w-[300px]">
          <p className="text-lg md:text-md leading-snug text-center p-3">
            Hi I'm
            <span
              className="text-[#52AEEF]"
              style={{ fontFamily: '"gooddog-new", sans-serif' }}
            >
              {" "}
              Cento!
            </span>
            <br />
            Together we can spend and save with
            <span
              className="text-[#52AEEF]"
              style={{ fontFamily: '"gooddog-new", sans-serif' }}
            >
              {" "}
              confidence.
            </span>
          </p>
        </div>

        {/* Blue polygon */}
        <img
          src="/media/Polygon-2.svg"
          className="
            absolute w-6 sm:w-8 md:w-10
            bottom-[-19%] left-[18%]
            sm:bottom-[-18%] sm:left-[20%]
            md:bottom-[-48%] md:left-[20%]
          "
        />

        {/* White polygon */}
        <img
          src="/media/Polygon-1.svg"
          className="
            absolute w-5 sm:w-7 md:w-9
            bottom-[-13%] left-[20%]
            sm:bottom-[-13%] sm:left-[22%]
            md:bottom-[-33%] md:left-[20%]
          "
        />
      </div>
    </div>
  );
};

export default CentoSpeechBubble;
