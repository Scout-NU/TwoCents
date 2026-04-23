function HomepageSkeleton() {
    return (
      <>
        <header>
          <nav>
          </nav>
        </header>
  
        <main>
  
          <section id="hero">
            {/* Eyebrow text */}
            <p className="hero-eyebrow">financial health</p>
            
            {/* Main heading */}
            <h1 className="hero-title">
              A <span className="strikethrough">budgeting</span> app that gets it.
            </h1>
            
            {/* Subheading + Mascot */}
            <div className="hero-subtitle-row">
              <p className="hero-subtitle">
                Spend and save with TwoCents, your allocation assistant.
              </p>
              <img 
                src="/images/cento-waving.png" 
                alt="Cento mascot" 
                className="hero-mascot"
              />
            </div>
            
            {/* Join waitlist button */}
            <button className="hero-cta-button">Join Waitlist</button>
          </section>
          <br />
  
          <section id="cento-blurb">
            {/* cento logo */}
            <img src="images/cento-waving.png" alt="cento"  width="400"/>
            
            {/* text blurb */}
            <div>
              <p>Hi, I'm Cento!</p>
              <p>Together we can spend and save with confidence.</p>
            </div>
  
          </section>
          <br /><br />
  
          <section id="two-cent-features">
            {/* section headings */}
            <h2>We focus on financial health, not restrictions.</h2>
            <p>Let's take a look at what TwoCents features.</p>
  
            {/* browse more button */}
            <button>Browse More</button><br /><br />
  
            <div id="feature-cards">
              <img src="images/feature 1.png" alt="proactive spending feature" width="325"/>
              <img src="images/feature 2.png" alt="priorities (not budgets) feature"  width="325"/>
              <img src="images/feature 3.png" alt="real-time bank sync feature"  width="325"/>
            </div>
          </section><br />
  
          <section id="testiomonials">
  
            <h2>Don't just take our two cents!</h2>
            <p>Hear what users have to say!</p><br />
  
            <div id="user-testiomonials">
              <img src="images/Testimonials.png" alt="testimonials" width="375"/>
              <img src="images/cento-pointing.png" alt="cento pointing" width="400"/>
            </div>
          </section><br />
  
          <section id="join-waitlist">
            <h2>Start spending and saving with confidence.</h2>
            <button>Join Waitlist</button>
          </section><br />
  
        </main>
  
        <footer>
        </footer>
      </>
    )
}

export default HomepageSkeleton;