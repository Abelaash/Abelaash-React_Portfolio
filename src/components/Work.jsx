import React, { useState } from "react";
import { motion } from "framer-motion";
import { Eyebrow, Reveal } from "./Reveal";
import { work, workCategories } from "../data/portfolio";

const ProjectCard = ({ p }) => {
  const inner = (
    <>
      <div className="proj-thumb">
        {p.img ? <img src={p.img} alt={p.t} /> : <span className="ph">{p.t[0]}</span>}
        <span className="proj-num">{p.n} — {p.cat}</span>
      </div>
      <div className="proj-body">
        <div className="proj-top">
          <h3>{p.t}</h3>
          <span className="yr">{p.y}</span>
        </div>
        <p>{p.desc}</p>
        <div className="proj-tags">
          {p.tags.map((t) => <span key={t}>{t}</span>)}
        </div>
      </div>
      {p.link && <div className="proj-arrow">↗</div>}
    </>
  );

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {p.link ? (
        <a href={p.link} target="_blank" rel="noreferrer" className="proj proj-link">{inner}</a>
      ) : (
        <div className="proj">{inner}</div>
      )}
    </motion.div>
  );
};

const Work = () => {
  const [filter, setFilter] = useState("All");
  const filtered = work.filter((w) => filter === "All" || w.cat === filter);

  return (
    <section className="block" id="work">
      <div className="wrap">
        <Eyebrow num="(02)">Selected work</Eyebrow>
        <Reveal className="work-head">
          <h2>Things I've built</h2>
          <span className="count">— twelve+ projects</span>
        </Reveal>
        <Reveal className="filters" delay={0.05}>
          {workCategories.map((c) => (
            <button key={c} className={`filter ${c === filter ? "active" : ""}`} onClick={() => setFilter(c)}>{c}</button>
          ))}
        </Reveal>
        <motion.div layout className="work-grid">
          {filtered.map((p) => <ProjectCard key={p.n} p={p} />)}
        </motion.div>
      </div>
    </section>
  );
};

export default Work;