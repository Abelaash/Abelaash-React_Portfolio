import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const location = useLocation();

  const handleClick = () => setNav(!nav);

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
    { label: "Home", id: "home"},
    { label: "About", id: "about" },
    { label: "Education", id: "education" },
    { label: "Skills", id: "skills" },
    { label: "Portfolio", id: "projects" },
    { label: "Work", id: "experience" },
    { label: "Achievements", id: "achievements" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-50">
      {/* LOGO */}
      <div>
        <img src={Logo} alt="my logo" style={{ width: "140px" }} />
      </div>

      {/* DESKTOP MENU */}
      <ul className="hidden md:flex">
        {menuItems.map((item) =>
          item.isRoute ? (
            <li key={item.label}>
              <Link to="/" className="cursor-pointer hover:text-pink-600">{item.label}</Link>
            </li>
          ) : (
            <li key={item.label}>
              <span onClick={() => scrollOrRedirect(item.id)} className="cursor-pointer hover:text-pink-600">
                {item.label}
              </span>
            </li>
          )
        )}
      </ul>

      {/* HAMBURGER ICON */}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* MOBILE MENU */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        {menuItems.map((item) =>
          item.isRoute ? (
            <li key={item.label} className="py-6 text-4xl">
              <Link to="/" onClick={handleClick}>
                {item.label}
              </Link>
            </li>
          ) : (
            <li key={item.label} className="py-6 text-4xl">
              <span
                onClick={() => {
                  scrollOrRedirect(item.id);
                  handleClick();
                }}
                className="cursor-pointer"
              >
                {item.label}
              </span>
            </li>
          )
        )}
      </ul>

      {/* SOCIAL ICONS */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-700">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/abelaash-giritharan-5b8943187/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/Abelaash"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-700">
  <a
    className="flex justify-between items-center w-full text-gray-300"
    href="/resume.pdf"
    target="_blank"
    rel="noreferrer"
  >
    Resume <BsFillPersonLinesFill size={30} />
  </a>
</li>


        </ul>
      </div>
    </div>
  );
};

export default Navbar;
