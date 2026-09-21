function Hero() {
  return (
    <section id="top" className="hero-section">
      <div className="hero-section__inner">
        <h1 className="hero-section__name">Zakaria Saidi</h1>
        <p className="hero-section__title">JavaScript &amp; Python Developer</p>
        <p className="hero-section__intro">
          I build practical web applications using Python and JavaScript using
          modern web technologies (Django / React and Next.JS).
        </p>
        <div className="hero-section__actions">
          <a className="btn btn--primary" href="#projects">
            View Projects
          </a>
          <a className="btn btn--secondary" href="#contact">
            Contact Me
          </a>
        </div>
        <div className="hero-section__social">
          <a
            href="https://github.com/your-github-username"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/your-linkedin-username"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
