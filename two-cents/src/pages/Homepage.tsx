import './Homepage.css';
import CentoSpeechBubble from '../components/SpeechBubble';
import WaitListJoin from '../components/WaitlistJoin';
import { Button } from '../components/buttons/PrimaryButton';
import { FeatureCardScroller } from '../components/ui/FeatureCardScroller';
import { QuoteCard } from '../components/ui/QuoteCard';
import { FadeUp } from '../components/layout/FadeUp';

function Homepage() {

  const cards = [
  {
    title: "Proactive Spending Alerts",
    bullets: ["Get notified when you spend, see what's left in real-time", "Clear guidance without judgment", "Know before you overspend, not after"],
    image: "/images/TwoCentsNotifs.png",
    imageAlt: "Scheduling feature",
  },
  {
    title: "Priorities (Not Budgets)",
    bullets: ["Get notified when you spend, see what's left in real-time", "Flexible priorities that adapt to your life", "Empowering language that reduces financial anxiety"],
    image: "/images/TwoCentsPriorites.png",
  },
  // {
  //   title: "Real-Time Bank Sync",
  //   bullets: ["Automatic transaction updates via Plaid integration", "See your current balances instantly", "No manual entry, no delayed data"],
  //   image: "/images/TwoCentsDashboard.png",
  //   imageAlt: "Scheduling feature",
  // },
  {
    title: "Savings Goals with Progress Tracking",
    bullets: ["Set custom savings goals with target amounts and dates", "Visual progress bars", "Security Fund catches unallocated savings automatically"],
    image: "/images/TwoCentsSavingsGoals.png",
    imageAlt: "Savings goals feature",
  },
  {
    title: "Smart Auto-Categorization",
    bullets: ["AI that automatically categorizes transactions to priorities", "Learns your spending patterns over time", "One-tap to recategorize if needed"],
    image: "/images/TwoCentCate.png",
    imageAlt: "Scheduling feature",
  },
  {
    title: "Flexible Cycle System",
    bullets: ["Choose weekly, bi-weekly, or monthly money cycles", "Matches your actual income schedule (paycheck timing)", "Auto-resets with intelligent carryover"],
    image: "/images/TwoCentsCycles.png",
  },
  {
    title: "Dashboard Financial Health Overview",
    bullets: ["See your complete financial picture at a glance", "Net worth tracking across all accounts", "Safe-to-Spend shows today's available money"],
    image: "/images/TwoCentsOverview.png",
    imageAlt: "Scheduling feature",
  },
  {
    title: "Overdraft Protection Indicators",
    bullets: ["Visual warnings when approaching priority limits", "See exactly how much you've overspent", "Gentle check-ins, not aggressive alerts"],
    image: "/images/TwoCentsOverdraft.png",
  },
  
];


  return (
    <>
      <main>

        <FadeUp>
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
              <Button variant="secondary" to="/waitlist">
                Join waitlist
              </Button>
            </div>
          </div>
        </section>
        </FadeUp>
        

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

        <FadeUp>

        <section id="two-cent-features">
          <div className="features-heading">
            <h2>We focus on financial health, <span className="features-line2">not restrictions.</span></h2>
            <p className="features-subline">Let's take a look at what TwoCents features.</p>
            
            <Button to="/features">
              Browse More
            </Button>
          </div>
          <div className="features-scrollingcards">
            <FeatureCardScroller cards={cards} />


          </div>
          


        </section>
        </FadeUp>

        {/* Hill zone 2: Layered Hill 2 as background for testimonials */}
        <div className="hills-zone hills-zone-reviews">
          <img src="/images/Home Screen Layerd Hill 2 (bottom).svg" alt="" aria-hidden="true" className="hill-upper" />
          <div className="hills-zone-fg">
            <FadeUp>
            <section id="testiomonials">
              <div className="testimonials-heading">
                <h2>
                  <span className="testimonials-line1">Don't just take our</span>
                  <span className="testimonials-line2">two cents!</span>
                </h2>
                <p>Hear what real users have to say!</p>
                <img src="/images/cento-pointing.png" alt="Cento pointing" className="cento-pointing-img" />
              </div>
              <div id="user-testiomonials">
                <FadeUp variant="bounce" delay={1}><QuoteCard name="@anna_budgets" quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sodales maximus nunc in ultricies." stars={5} /> </FadeUp>
                <FadeUp variant="bounce" delay={2}><QuoteCard name="@Hank" quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sodales maximus nunc in ultricies." stars={5} /> </FadeUp>
                <FadeUp variant="bounce" delay={3}><QuoteCard name="@james_budgets" quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sodales maximus nunc in ultricies." stars={5} /> </FadeUp>

              </div>
            </section>
            </FadeUp>
          </div>
        </div>

        <FadeUp>
          <WaitListJoin />
        </FadeUp>

      </main>
    </>
  );
}
export default Homepage;
