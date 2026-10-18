import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { automations } from "../data/automations";

// One template for every AI Automation case study: /automation/:slug
const AutomationCaseStudy = () => {
  const { slug } = useParams();
  const cs = automations[slug];

  // Cards link here from mid-page; start the case study at the top.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!cs) {
    return (
      <div className="detail">
        <Link to="/" className="back">← Back to portfolio</Link>
        <h1>Case study not found<span className="accent">.</span></h1>
      </div>
    );
  }

  return (
    <div className="detail case">
      <Link to="/" className="back">← Back to portfolio</Link>
      <p className="case-kicker">AI Automation · {cs.sub}</p>
      <h1>{cs.title}<span className="accent">.</span></h1>
      <p className="lead">{cs.lead}</p>

      <figure className="case-shot">
        <img src={cs.img} alt={cs.imgAlt} />
        <figcaption>The live Make.com scenario</figcaption>
      </figure>

      <div className="case-stack">
        {cs.stack.map((s) => <span key={s}>{s}</span>)}
      </div>

      <h2>The problem</h2>
      <p>{cs.problem}</p>

      <h2>Trigger</h2>
      <p>{cs.trigger}</p>

      <h2>How it works</h2>
      <ol className="case-steps">
        {cs.steps.map((s, i) => <li key={i}>{s}</li>)}
      </ol>

      {cs.table && (
        <div className="case-table">
          <table>
            <thead>
              <tr>{cs.table.head.map((h) => <th key={h}>{h}</th>)}</tr>
            </thead>
            <tbody>
              {cs.table.rows.map((r) => (
                <tr key={r[0]}>{r.map((c, i) => <td key={i}>{c}</td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <h2>Result</h2>
      <p>{cs.result}</p>

      <h2>Skills shown</h2>
      <ul>
        {cs.skills.map((s) => <li key={s}>{s}</li>)}
      </ul>

      <a href="/#work" className="ghost-btn">See all work →</a>
    </div>
  );
};

export default AutomationCaseStudy;
