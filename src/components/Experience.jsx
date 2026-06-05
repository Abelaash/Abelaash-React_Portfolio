import React from "react";
import { Eyebrow, Reveal } from "./Reveal";
import { experience } from "../data/portfolio";

const Experience = () => (
  <section className="block" id="experience">
    <div className="wrap">
      <Eyebrow num="(03)">Where I've worked</Eyebrow>
      <div>
        {experience.map((e, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <div className="exp-row">
              <div className="exp-yr">{e.y}</div>
              <div>
                <div className="exp-role">{e.role}</div>
                <div className="exp-co">{e.co}</div>
                <div className="exp-desc">{e.desc}</div>
              </div>
              <div className="exp-tag">{e.tag}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;