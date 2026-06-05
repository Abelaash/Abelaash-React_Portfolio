import React from "react";

const marquee = "DESIGN ✦ DEVELOPMENT ✦ MARKETING ✦ BRAND ✦ ";

const Hero = () => {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="hero" id="home">
      <div className="kicker">
        <span className="dot" />
        <span>Available for work — 2026</span>
        <span className="rule" />
      </div>

      <h1 className="title">
        <span className="line line1"><span>Abelaash</span></span>
        <span className="line line2"><span>Giritharan<span className="accent">.</span></span></span>
      </h1>

      <div className="hero-meta">
        <div className="hero-role">
          <p className="big">
            Web developer <span className="serif-i">&</span> digital marketer building work that <span className="serif-i">performs.</span>
          </p>
          <p className="sub">
            React, Webflow, Drupal & WordPress development — paired with marketing strategy at STOP Marketing Agency.
          </p>
        </div>
        <div className="cta-row">
          <button className="cta cta-fill" onClick={() => go("work")}>Selected Work →</button>
          <button className="cta cta-out" onClick={() => go("contact")}>Get in touch</button>
        </div>
      </div>

      <div className="strip">
        <div className="strip-track">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i}>
              {marquee.split("✦").map((part, j, arr) => (
                <React.Fragment key={j}>
                  {part}
                  {j < arr.length - 1 && <b>✦</b>}
                </React.Fragment>
              ))}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;