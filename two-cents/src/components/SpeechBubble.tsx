const CentoSpeechBubble = () => {
  return (
    <div className="cento-section relative w-full">

      {/* Speech bubble — upper right, 100px from screen edge */}
      <div
        style={{
          position: 'absolute',
          top: '5%',
          right: 'min(100px, 7vw)',
          width: 'clamp(240px, 38vw, 560px)',
          overflow: 'visible',
        }}
      >
        <div className="relative">
          <div
            className="bg-white shadow-[8px_8px_0px_#ABD8F6] rounded-[55px] flex flex-col items-center justify-center"
            style={{ aspectRatio: '2 / 1', padding: 'clamp(12px, 2vw, 44px)', containerType: 'inline-size' }}
          >
            <p
              className="font-bold leading-snug text-center text-black m-0"
              style={{ fontSize: 'max(13px, 9cqw)' }}
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
          <img
            src="/media/Polygon-2.svg"
            className="absolute top-full left-[10%]"
            style={{ width: 'clamp(28px, 4.5vw, 72px)' }}
          />
          <img
            src="/media/Polygon-1.svg"
            className="absolute top-[calc(100%_-_4px)] left-[12%]"
            style={{ width: 'clamp(24px, 4vw, 64px)' }}
          />
        </div>
      </div>

      {/* Cento — lower left */}
      <img
        src="/images/cento-waving.png"
        alt="Cento mascot waving"
        className="cento-waving-img"
        style={{
          position: 'absolute',
          bottom: 0,
          left: '4%',
          width: 'clamp(340px, 82vw, 1600px)',
          height: 'auto',
          maxWidth: 'none',
        }}
      />
    </div>
  );
};

export default CentoSpeechBubble;
