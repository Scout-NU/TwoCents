import { FadeUp } from "./layout/FadeUp";

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
        <FadeUp variant="bounce">
          <div style={{ position: 'relative' }}>

          {/* Blue offset background layer — sits 8px right + down of bubble */}
          <img
            src="/images/CentoSpeechBubble.png"
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


        </div>

        </FadeUp>
        
      </div>

      {/* Cento — lower left */}
      <img
        src="/images/CentoWaving2.png"
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
