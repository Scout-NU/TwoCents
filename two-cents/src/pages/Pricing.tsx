import { FadeUp } from '../components/layout/FadeUp';
import WaitListJoin from '../components/WaitlistJoin';

function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "0",
      period: "/mo",
      number: "01",
      features: [
        "1 Checking + 1 Saving account",
        "Real-time spending alerts",
        "Core budgeting dashboard",
        "Safe-to-Spend widget",
        "Basic priorities (5 max)"
      ]
    },
    {
      name: "Basic",
      price: "5",
      period: "/mo",
      number: "02",
      features: [
        "Unlimited account connections",
        "Joint account support",
        "Custom budget categories",
        "Full Financial Report Card",
        "Unlimited priorities"
      ]
    },
    {
      name: "Premium",
      price: "9.99",
      period: "/mo",
      number: "03",
      features: [
        "All of the basic package features",
        "AI spending insights and chatbot",
        "Predictive spending forecasts",
        "Smart spending recommendations",
        "Priority support"
      ]
    }
  ];

  return (
    <div className="pricing-page">
      
      {/* Pricing Header */}
      
      <FadeUp>
        <section className="pricing-header">
        <h1 className="pricing-main-title">Our Plan</h1>
        <h2 className="pricing-subtitle">We're launching soon, don't miss out!</h2>
        <div className="pricing-underline"></div>
      </section>
      </FadeUp>
      

      {/* Pricing Options Container */}
      <section className="pricing-options-section">
        <FadeUp delay={1}>
        <div className="pricing-options-shell">
          <div className="pricing-cards-container">
            {plans.map((plan, index) => (
              <div key={index} className="pricing-card">
                <div className="pricing-card-header">
                  <span className="price-number">{plan.number}</span>
                  <h3 className="plan-name">{plan.name}</h3>
                  <div className="plan-price">
                    <span className="price-symbol">$</span>
                    <span className="price-amount">{plan.price}</span>
                    <span className="price-period">{plan.period}</span>
                  </div>
                </div>
                <ul className="plan-features">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        </FadeUp>
      </section>

      {/* Mascot + CTA Section */}
      <section className="cta-with-mascot">
        <FadeUp delay={2}>
        <img src="/images/Cento_walk.svg" alt="TwoCents Mascot" className="pricing-mascot" />
        <WaitListJoin />
        </FadeUp>
      </section>
      <img src="/images/OurPlanHill.png" alt="" aria-hidden="true" className="w-full h-full z-0 top-[310px] object-top object-cover absolute overflow-hidden" />


    </div>
  );
}

export default Pricing;