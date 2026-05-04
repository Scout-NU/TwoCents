const CentoSpeechBubble = () => {
  return (
    <div className="cento-section relative w-full">

      {/* Speech bubble — upper right, 100px from screen edge */}
      <div
        className="speech-bubble-pos"
        style={{
          position: 'absolute',
          top: '5%',
          right: 'min(100px, 7vw)',
          width: 'clamp(280px, 50vw, 780px)',
          overflow: 'visible',
        }}
      >
        <div style={{ position: 'relative' }}>

          {/* Blue offset background layer — sits 8px right + down of bubble */}
          <img
            src="/images/SpeechBubbleBackground.png"
            aria-hidden="true"
            className="speech-bubble-bg"
            style={{
              position: 'absolute',
              top: '3px',
              left: '8px',
              width: '100%',
              height: 'auto',
              display: 'block',
            }}
          />

          {/* White bubble with text (Figma export) */}
          <img
            src="/images/SpeechBubble.png"
            alt="Hi im cento! Together we can spend and save with confidence."
            style={{
              position: 'relative',
              width: '100%',
              height: 'auto',
              display: 'block',
              zIndex: 1,
            }}
          />

          {/* Polygon blue shadow — behind everything */}
          <img
            src="/images/Polygon 2.svg"
            aria-hidden="true"
            className="polygon-shadow"
            style={{
              position: 'absolute',
              top: 'calc(100% - 7px)',
              left: 'calc(22% + 5px)',
              width: 'clamp(24px, 4vw, 64px)',
              zIndex: 0,
            }}
          />

          {/* Polygon white tail — on top of bubble */}
          <img
            src="/images/Polygon 1.svg"
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: 'calc(100% - 8px)',
              left: '22%',
              width: 'clamp(24px, 4vw, 64px)',
              zIndex: 2,
            }}
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
          height: 'auto',
          maxWidth: 'none',
        }}
      />
    </div>
  );
};

export default CentoSpeechBubble;
