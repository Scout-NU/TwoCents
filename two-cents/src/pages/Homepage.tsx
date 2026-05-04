import './Homepage.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import JoinWaitlistSubmissionButton from '../components/buttons/JoinWaitlistSubmissionButton';
import CentoSpeechBubble from '../components/SpeechBubble';
import WaitListJoin from '../components/WaitlistJoin';

function Homepage() {
  const navigate = useNavigate();
  const [browseHovered, setBrowseHovered] = useState(false);
  const [browsePressed, setBrowsePressed] = useState(false);

  const getBrowseBackground = () => {
    if (browsePressed) return 'linear-gradient(0deg, rgba(249, 198, 105, 0.27) 0%, rgba(249, 198, 105, 0.27) 100%), #FFF';
    if (browseHovered) return '#FFF';
    return 'linear-gradient(0deg, #1F6A9D 0%, #1F6A9D 100%), #FFF';
  };

  const getBrowseColor = () => {
    if (browseHovered) return '#1F6A9D';
    return '#FFF';
  };

  return (
    <>
      <main>

        <section id="hero">
          <div>
            <h1 className="hero-title">
              A <span className="strikethrough">
                <span className="hero-eyebrow">financial health</span>
                budgeting
                <img src="/images/Vector 4.svg" className="strikethrough-svg" aria-hidden="true" />
              </span> app<br />that gets it.
            </h1>
          </div>

          <div className="hero-subtitle-row">
            <div>
              <p className="hero-subtitle">
                Spend and save with TwoCents, your allocation<br className="hero-subtitle-break" /> assistant.
              </p>
              <JoinWaitlistSubmissionButton buttonColor="white" borderColor="#FA9E4D" textColor="#FA9E4D" onClick={() => navigate('/waitlist')} className="hero-waitlist-btn" />
            </div>
          </div>
        </section>

        {/* Hill zone 1: Base Hill fills the zone, Layered Hill 1 anchored as a lower wave */}
        <div className="hills-zone hills-zone-cento">
          <img src="/images/Home Screen Base Hill.svg" alt="" aria-hidden="true" className="hill-upper" />
          <img src="/images/Home Screen Layered Hill 1.svg" alt="" aria-hidden="true" className="hill-lower" />
          <div className="hills-zone-fg">
            <section id="cento-blurb">
              <CentoSpeechBubble />
            </section>
          </div>
        </div>

        <section id="two-cent-features">
          <h2>We focus on financial health, <span className="features-line2">not restrictions.</span></h2>
          <p className="features-subline">Let's take a look at what TwoCents features.</p>
          <Link
            to="/features"
            className="features-browse-btn"
            style={{
              background: getBrowseBackground(),
              color: getBrowseColor(),
              transition: 'background 0.2s ease, color 0.2s ease',
            }}
            onMouseEnter={() => setBrowseHovered(true)}
            onMouseLeave={() => { setBrowseHovered(false); setBrowsePressed(false); }}
            onMouseDown={() => setBrowsePressed(true)}
            onMouseUp={() => setBrowsePressed(false)}
          >Browse More</Link>

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
              <div className="testimonials-heading">
                <h2>
                  <span className="testimonials-line1">Don't just take our</span>
                  <span className="testimonials-line2">two cents!</span>
                </h2>
                <p>Hear what users have to say!</p>
                <img src="/images/cento-pointing.png" alt="Cento pointing" className="cento-pointing-img" />
              </div>
              <div id="user-testiomonials">
                <img src="/images/Testimonials.png" alt="User testimonials" />
              </div>
            </section>
          </div>
        </div>

        <WaitListJoin />

      </main>
    </>
  );
}
export default Homepage;
