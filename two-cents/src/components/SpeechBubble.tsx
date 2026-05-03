const CentoSpeechBubble = () => {
  return (
    <div className="relative w-full">

      {/* Column: right-anchored, width capped at 638px — bubble never stretches */}
      <div className="absolute top-[5%] right-[3%] w-[50%] max-w-[638px]" style={{ overflow: 'visible' }}>

        {/* Bubble + tail in their own relative wrapper so polygons anchor to the bubble bottom */}
        <div className="relative">
          <div
            className="bg-white shadow-[8px_8px_0px_#ABD8F6] rounded-[40px] flex flex-col items-center justify-center"
            style={{ aspectRatio: '638.093 / 271.325', padding: 'clamp(12px, 2vw, 44px)' }}
          >
            <p
              className="font-bold leading-snug text-center text-black m-0"
              style={{ fontSize: 'clamp(14px, 2.5vw, 36px)' }}
            >
              Hi im{" "}
              <span style={{ fontFamily: '"gooddog-new", sans-serif', color: '#52AEEF' }}>
                cento!
              </span>
              <br />
              Together we can spend and save with{" "}
              <span style={{ fontFamily: '"gooddog-new", sans-serif', color: '#52AEEF' }}>
                confidence.
              </span>
            </p>
          </div>

          {/* Blue polygon */}
          <img
            src="/media/Polygon-2.svg"
            className="absolute top-full left-[10%]"
            style={{ width: 'clamp(28px, 4.5vw, 72px)' }}
          />
          {/* White polygon */}
          <img
            src="/media/Polygon-1.svg"
            className="absolute top-[calc(100%_-_4px)] left-[12%]"
            style={{ width: 'clamp(24px, 4vw, 64px)' }}
          />
        </div>

        {/*
         * Cento flows in normal block order — guaranteed to sit right below
         * the bubble at every screen width. Sized in vw so it's always large.
         * Negative marginLeft shifts it left so it appears beside the bubble.
         * The two values must match: marginLeft = -(width + gap).
         */}
        <img
          src="/images/cento-waving.png"
          alt="Cento mascot waving"
          style={{
            display: 'block',
            width: 'min(42vw, 520px)',
            height: 'auto',
            marginTop: '-8px',
            marginLeft: 'calc(-1 * min(42vw, 520px) + 60px)',
          }}
        />
      </div>
    </div>
  );
};

export default CentoSpeechBubble;
