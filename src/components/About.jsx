import React from "react";
import { Reveal, Eyebrow } from "./Reveal";

const About = () => (
  <section className="block" id="about">
    <div className="wrap">
      <Eyebrow num="(01)">What I do</Eyebrow>
      <Reveal as="p" className="statement">
        I sit at the rare intersection of <span className="serif-i">design</span>, <span className="serif-i">development</span> and <span className="serif-i">marketing</span> — <span className="dim">so the things I build don't just look sharp, they move the numbers that matter.</span>
      </Reveal>
      <Reveal className="two" delay={0.1}>
        <div>
          <p className="body-muted">
            I'm a Humber College Computer Programming & Analysis graduate based in Brampton, Ontario. I build responsive, conversion-focused websites and pair them with the marketing strategy to make them work.
          </p>
        </div>
        <div>
          <p className="body-muted">
            Currently a Digital Marketing Associate at <span className="strong">STOP Marketing Agency</span> and co-founder of <span className="strong">Poply Inc.</span> — building, shipping and growing client sites across WordPress, Webflow and Drupal.
          </p>
        </div>
      </Reveal>
    </div>
  </section>
);

export default About;