import './Homepage.css';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import JoinWaitlistSubmissionButton from '../components/buttons/JoinWaitlistSubmissionButton';
import CentoSpeechBubble from '../components/SpeechBubble';
import WaitListJoin from '../components/WaitlistJoin';

function Homepage() {
  return (
    <>
      <Header />

      <main>

        <section id="hero">
          <div>
            <h1 className="hero-title">
              A <span className="strikethrough">
                <span className="hero-eyebrow">financial health</span>
                budgeting
                <svg className="strikethrough-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 525 17" fill="none" preserveAspectRatio="none">
                  <path d="M3.5 3.5C17.0883 3.52286 55.3167 11.0362 136.135 11.2004C216.953 11.3645 358.615 8.6048 434.494 11.7023C510.372 14.7998 516.371 11.0329 521.5 11.8486" style={{stroke: 'var(--Orange-Primary, #FA9E4D)', strokeWidth: '3px'}} strokeLinecap="round"/>
                </svg>
              </span> app<br />that gets it.
            </h1>
          </div>

          <div className="hero-subtitle-row">
            <div>
              <p className="hero-subtitle">
                Spend and save with TwoCents, your allocation assistant.
              </p>
              <JoinWaitlistSubmissionButton buttonColor="white" borderColor="#FA9E4D" textColor="#FA9E4D" />
            </div>
          </div>
        </section>

        {/* Hill zone 1: Base Hill fills the zone, Layered Hill 1 anchored to the bottom as a lower wave */}
        <div className="hills-zone">
          <img src="/images/Home Screen Base Hill.svg" alt="" aria-hidden="true" className="hill-upper" />
          <img src="/images/Home Screen Layered Hill 1.svg" alt="" aria-hidden="true" className="hill-lower" />
          <div className="hills-zone-fg">
            <section id="cento-blurb">
              <CentoSpeechBubble />
            </section>
          </div>
        </div>

        <section id="two-cent-features">
          <h2>We focus on financial health, not restrictions.</h2>
          <p>Let's take a look at what TwoCents features.</p>
          <button>Browse More</button>

          <div id="feature-cards">
            <img src="/images/feature 1.png" alt="Proactive spending feature" />
            <img src="/images/feature 2.png" alt="Priorities (not budgets) feature" />
            <img src="/images/feature 3.png" alt="Real-time bank sync feature" />
          </div>
        </section>

        {/* Hill zone 2: Layered Hill 2 as background for testimonials */}
        <div className="hills-zone hills-zone-reviews">
          <img src="/images/Home Screen Layerd Hill 2 (bottom).svg" alt="" aria-hidden="true" className="hill-upper" />
          <div className="hills-zone-fg">
            <section id="testiomonials">
              <h2>Don't just take our two cents!</h2>
              <p>Hear what users have to say!</p>
              <div id="user-testiomonials">
                <img src="/images/Testimonials.png" alt="User testimonials" />
                <img src="/images/cento-pointing.png" alt="Cento pointing" width="300" />
              </div>
            </section>
          </div>
        </div>

        <WaitListJoin />

      </main>

      <Footer />
    </>
  );
}

export default Homepage;
