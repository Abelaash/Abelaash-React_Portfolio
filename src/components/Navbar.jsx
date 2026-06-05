import React, { useState, useEffect } from "react";

const links = [
  { label: "Work", id: "work" },
  { label: "About", id: "about" },
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
        <button className="brand brand-btn" onClick={() => go("home")}>ABELAASH G.</button>
        <ul className="navlinks">
          {links.map((l) => (
            <li key={l.id}><button className="navlink-btn" onClick={() => go(l.id)}>{l.label}</button></li>
          ))}
        </ul>
        <div className="clock">{clock}</div>
        <button className="burger" onClick={() => setOpen(!open)} aria-label="Menu">☰</button>
      </nav>

      {open && (
        <div className="mobile-menu">
          {links.map((l) => (
            <button key={l.id} className="mobile-link-btn" onClick={() => go(l.id)}>{l.label}</button>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;