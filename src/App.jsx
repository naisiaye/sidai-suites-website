import "./App.css";

function App() {
  return (
    <div className="app">
      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">SIDAI SUITES</div>

        <nav className="navLinks">
          <a href="#suites">Suites</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="heroContent">
          <p className="eyebrow">
            Luxury salon suites for beauty professionals
          </p>

          <h1>
            Your beauty business,
            <br />
            elevated.
          </h1>

          <p className="description">
            Private, polished salon suites designed for independent beauty
            professionals ready to grow their brand in a luxury-inspired space.
          </p>

          <div className="buttonGroup">
            <a href="#contact" className="primaryButton">
              Join the Interest List
            </a>

            <a href="#suites" className="secondaryButton">
              Explore Suites
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section id="suites" className="suitesSection">
        <div className="suitesLayout">
          <div className="suitesIntro">
            <p className="sectionLabel">What we offer</p>

            <h2>Salon suites designed for your next level.</h2>

            <p className="sectionText">
              Sidai Suites will offer private, elevated spaces where beauty
              professionals can work independently, welcome clients confidently,
              and build their own brand.
            </p>
          </div>

          <div className="suiteCards">
            {/* CARD 1 */}
            <div className="suiteCard">
              <img src="/images/suite-1.png" alt="Private salon suite" />

              <div className="suiteCardContent">
                <span>01</span>

                <h3>Private Suites</h3>

                <p>
                  Your own professional space to serve clients, create your
                  atmosphere, and run your business your way.
                </p>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="suiteCard">
              <img src="/images/suite-2.png" alt="Luxury salon suite" />

              <div className="suiteCardContent">
                <span>02</span>

                <h3>Luxury Feel</h3>

                <p>
                  A warm, modern environment designed to feel calm, polished,
                  and welcoming from the moment clients walk in.
                </p>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="suiteCard">
              <img
                src="/images/suite-3.png"
                alt="Beauty entrepreneur salon suite"
              />

              <div className="suiteCardContent">
                <span>03</span>

                <h3>Business Freedom</h3>

                <p>
                  Built for entrepreneurs who want independence without losing a
                  professional elevated setting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section id="about" className="aboutSection">
        <div className="aboutContent">
          <div className="aboutTextBlock">
            <p className="sectionLabel">About Sidai Suites</p>

            <h2>Created for beauty professionals who are ready for more.</h2>

            <p>
              Sidai means beautiful, and that is the heart of the brand. Sidai
              Suites is being created as a warm, polished salon suite space for
              independent beauty professionals who want privacy, flexibility,
              and a space that reflects the quality of their work.
            </p>

            <p>
              The goal is to offer an elevated environment where beauty
              entrepreneurs can build their business with confidence.
            </p>
          </div>

          <div className="aboutImage">
            <img src="/images/about-lounge.png" alt="Sidai Suites lounge" />
          </div>
        </div>
      </section>

      {/* SECTION 4 */}
      <section className="moodboardSection">
        <div className="moodboardText">
          <p className="sectionLabel">The Feeling</p>

          <h2>Warm, calm, modern, and elevated.</h2>

          <p>
            The Sidai Suites brand is inspired by soft neutrals, rich browns,
            clean lines, and a luxury experience that still feels welcoming.
          </p>
        </div>

        <div className="moodboardGrid">
          <div
            className="mood large"
            style={{
              backgroundImage: "url('/images/mood-1.png')",
            }}
          >
            Luxury
          </div>

          <div
            className="mood"
            style={{
              backgroundImage: "url('/images/mood-2.png')",
            }}
          >
            Warm
          </div>

          <div
            className="mood dark"
            style={{
              backgroundImage: "url('/images/mood-3.png')",
            }}
          >
            Private
          </div>

          <div
            className="mood"
            style={{
              backgroundImage: "url('/images/mood-4.png')",
            }}
          >
            Modern
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contactSection">
        <div className="contactImage">
          <img src="/images/contact-lounge.png" alt="Sidai Suites interior" />
        </div>

        <div className="contactContent">
          <p className="sectionLabel">Join the Interest List</p>

          <h2>Be the first to hear about Sidai Suites.</h2>

          <p className="contactText">
            Interested in renting a suite or staying updated on future
            locations? Join the interest list and we’ll keep you informed.
          </p>

          <form className="contactForm" action="YOUR_FORM_URL" method="POST">
            <input type="text" placeholder="Your name" />
            <input type="email" placeholder="Email address" />
            <input type="text" placeholder="Beauty specialty" />

            <button type="submit">Join the List</button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>SIDAI SUITES</p>

        <span>Luxury salon suites coming soon.</span>
      </footer>
    </div>
  );
}

export default App;
