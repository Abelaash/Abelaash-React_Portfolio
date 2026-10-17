import React, { useEffect, useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [clock, setClock] = useState("");
  const location = useLocation();

  const handleClick = () => setNav(!nav);

  // Oslo time, updates every 15 seconds
  useEffect(() => {
    const tick = () =>
      setClock(
        new Date().toLocaleTimeString("en-GB", {
          timeZone: "Europe/Oslo",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    tick();
    const i = setInterval(tick, 15000);
    return () => clearInterval(i);
  }, []);

  const scrollOrRedirect = (sectionId) => {
    if (location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  const menuItems = [
    { label: "Work", id: "work" },
    { label: "About", id: "about" },
    { label: "Experience", id: "experience" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 z-50 flex w-full items-center justify-between px-6 py-6 font-['Space_Grotesk',sans-serif] text-[#f4f1ea] mix-blend-difference md:px-10">
        {/* LOGO */}
        <button
          onClick={() => scrollOrRedirect("home")}
          className="cursor-pointer text-lg font-bold tracking-[-0.02em]"
        >
          ABELAASH G.
        </button>

        {/* DESKTOP MENU */}
        <ul className="hidden gap-7 md:flex">
          {menuItems.map((item) => (
            <li key={item.label}>
              <span
                onClick={() => scrollOrRedirect(item.id)}
                className="cursor-pointer text-[13px] uppercase tracking-[0.05em] opacity-70 transition-opacity duration-200 hover:opacity-100"
              >
                {item.label}
              </span>
            </li>
          ))}
        </ul>

        {/* CLOCK */}
        <div className="hidden text-[13px] tracking-[0.05em] tabular-nums opacity-70 md:block">
          {clock} — Oslo, NO
        </div>

        {/* HAMBURGER ICON */}
        <div onClick={handleClick} className="z-[60] cursor-pointer text-xl md:hidden">
          {!nav ? <FaBars /> : <FaTimes />}
        </div>
      </div>

      {/* MOBILE MENU — outside the blended bar so it renders solid */}
      <ul
        className={
          !nav
            ? "hidden"
            : "fixed inset-0 z-[49] flex flex-col items-center justify-center gap-6 bg-[#0d0d0c] font-['Space_Grotesk',sans-serif] text-[#f4f1ea]"
        }
      >
        {menuItems.map((item) => (
          <li key={item.label}>
            <span
              onClick={() => {
                scrollOrRedirect(item.id);
                handleClick();
              }}
              className="cursor-pointer text-4xl font-semibold uppercase tracking-[-0.02em] transition-colors hover:text-[#ff5b1f]"
            >
              {item.label}
            </span>
          </li>
        ))}
        <li className="mt-6 text-[13px] tracking-[0.05em] text-[#9a958a]">
          {clock} — Oslo, NO
        </li>
      </ul>

      {/* SOCIAL ICONS */}
      <div className="fixed left-0 top-[35%] z-40 hidden flex-col lg:flex">
        <ul>
          <li className="ml-[-100px] flex h-[56px] w-[160px] items-center justify-between border border-l-0 border-[#f4f1ea]/[.12] bg-[#121210] px-4 duration-300 hover:ml-[-10px] hover:bg-[#ff5b1f]">
            <a
              className="flex w-full items-center justify-between text-sm text-[#f4f1ea]"
              href="https://www.linkedin.com/in/abelaash-giritharan-5b8943187/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <FaLinkedin size={24} />
            </a>
          </li>
          <li className="ml-[-100px] flex h-[56px] w-[160px] items-center justify-between border border-l-0 border-t-0 border-[#f4f1ea]/[.12] bg-[#121210] px-4 duration-300 hover:ml-[-10px] hover:bg-[#ff5b1f]">
            <a
              className="flex w-full items-center justify-between text-sm text-[#f4f1ea]"
              href="https://github.com/Abelaash"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <FaGithub size={24} />
            </a>
          </li>
          <li className="ml-[-100px] flex h-[56px] w-[160px] items-center justify-between border border-l-0 border-t-0 border-[#f4f1ea]/[.12] bg-[#121210] px-4 duration-300 hover:ml-[-10px] hover:bg-[#ff5b1f]">
            <a
              className="flex w-full items-center justify-between text-sm text-[#f4f1ea]"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Resume <BsFillPersonLinesFill size={24} />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
