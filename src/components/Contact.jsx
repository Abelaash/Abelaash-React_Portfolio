import React, { useState, useEffect } from "react";
import { Eyebrow, Reveal } from "./Reveal";
import { social } from "../data/portfolio";

const Contact = () => {
  const [clock, setClock] = useState("");
  useEffect(() => {
    const tick = () => setClock(new Date().toLocaleTimeString("en-CA", { hour: "2-digit", minute: "2-digit", hour12: false }) + " EST");
    tick();
    const i = setInterval(tick, 1000);
    return () => clearInterval(i);
  }, []);

  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <Eyebrow num="(06)">Let's talk</Eyebrow>
        <Reveal as="h2" className="contact-title">
          Let's build<br />something <span className="serif-i">together.</span>
        </Reveal>
        <Reveal>
          <a href={`mailto:${social.email}`} className="email-big">
            {social.email} <span className="arr">↗</span>
          </a>
        </Reveal>
        <Reveal className="contact-foot">
          <div className="contact-links">
            <a href={social.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={social.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={`mailto:${social.email}`}>Email</a>
          </div>
          <p className="contact-note">Currently open to new opportunities in web development & digital design.</p>
        </Reveal>
        <div className="footer-bar">
          <p>© 2026 Abelaash Giritharan</p>
          <p>{clock}</p>
          <p>Built with <span>React</span> · Deployed on <span>Vercel</span></p>
        </div>
      </div>
    </section>
  );
};

export default Contact;