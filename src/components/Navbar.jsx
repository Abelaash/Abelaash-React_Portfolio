import React, { useState, useEffect } from "react";

const links = [
  { label: "About", id: "about" },
  { label: "Work", id: "work" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

const Navbar = () => {
  const [clock, setClock] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const tick = () => {
      const t = new Date().toLocaleTimeString("en-CA", { hour: "2-digit", minute: "2-digit", hour12: false });
      setClock(`${t} — Brampton, ON`);
    };
    tick();
    const i = setInterval(tick, 1000);
    return () => clearInterval(i);
  }, []);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <nav className="nav">
        <div className="brand" onClick={() => go("home")} style={{ cursor: "pointer" }}>ABELAASH G.</div>
        <ul className="navlinks">
          {links.map((l) => (
            <li key={l.id}><a onClick={() => go(l.id)}>{l.label}</a></li>
          ))}
        </ul>
        <div className="clock">{clock}</div>
        <button className="burger" onClick={() => setOpen(!open)} aria-label="Menu">☰</button>
      </nav>

      {open && (
        <div className="mobile-menu">
          {links.map((l) => (
            <span key={l.id} onClick={() => go(l.id)}>{l.label}</span>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;