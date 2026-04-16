import Waitlist from '../components/layout/Waitlist';

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
      <section className="pricing-header">
        <h1 className="pricing-main-title">Our Plan</h1>
        <h2 className="pricing-subtitle">Get started with TwoCents!</h2>
        <div className="pricing-underline"></div>
      </section>

      {/* Pricing Options Container */}
      <section className="pricing-options-section">
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
      </section>

      {/* Mascot + CTA Section */}
      <section className="cta-with-mascot">
        <img src="/images/Cento_walk.svg" alt="TwoCents Mascot" className="pricing-mascot" />
        <Waitlist />
      </section>
    </div>
  );
}

export default Pricing;