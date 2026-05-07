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
        <FadeUp
          variant="pop"
          threshold={0.5}
          style={{ position: 'relative', width: '100%', height: 'clamp(200px, 30vw, 500px)' }}
        >
          <div style={{ position: 'absolute', top: '2%', right: 'min(10px, 7vw)', width: 'clamp(280px, 50vw, 780px)' }}>
            <img
              src="/images/CentoSpeechBubble.png"
              aria-hidden="true"
              className="speech-bubble-bg"
              style={{ width: '100%', height: 'auto', display: 'block' }}
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
          width: 'clamp(80px, 25vw, 300px)',
        }}
      />
    </div>
  );
};

export default CentoSpeechBubble;
