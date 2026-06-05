import React from "react";
import { Eyebrow, Reveal } from "./Reveal";
import { skills, education, awards } from "../data/portfolio";

const SkillsEducation = () => (
  <section className="block">
    <div className="wrap">
      <div className="two">
        <div>
          <Eyebrow num="(04)">Capabilities</Eyebrow>
          {skills.map((s, i) => (
            <Reveal key={s.h} delay={i * 0.05}>
              <div className="skill-cat">
                <h4>{s.h}</h4>
                <div className="skill-list">
                  {s.list.map((x, j) => (
                    <React.Fragment key={x}>
                      {x}{j < s.list.length - 1 && <span>, </span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div>
          <Eyebrow num="(05)">Education & awards</Eyebrow>
          <Reveal>
            {education.map((e) => (
              <div className="edu-item" key={e.d}>
                <div className="edu-d">{e.d}</div>
                <div className="edu-m">{e.m}</div>
              </div>
            ))}
            <div style={{ height: 32 }} />
            {awards.map((a) => (
              <div className="award-item" key={a.d}>
                <div className="award-d">{a.d}</div>
                <div className="award-gpa">{a.gpa}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);

export default SkillsEducation;