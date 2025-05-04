import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div id="home" className="w-full h-screen bg-gradient-to-r from-[#0a192f] to-[#1a1f3c]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600 text-lg">Hi, my name is</p>

        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6] animate-fade-in-up">
          Abelaash Giritharan
        </h1>

        <p className="text-[#8892b0] py-4 max-w-[700px] animate-fade-in-up delay-400">
          A soon-to-be graduate in Computer Programming and Analysis from Humber College. I specialize in building responsive, user-friendly web apps and robust backend systems using React.js, Flask, Django, and AWS.
        </p>

        <p className="text-[#8892b0] py-2 max-w-[700px] animate-fade-in-up delay-600">
          I'm passionate about solving real-world problems through innovative software. I’m actively seeking full-time opportunities for 2025 and beyond — let's build something amazing!
        </p>

        <div className="mt-6">
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="group text-white border-2 px-6 py-3 my-2 flex items-center rounded-full hover:bg-pink-600 hover:border-pink-600 transition-all duration-300 ease-in-out"
          >
            View Projects
            <span className="group-hover:rotate-90 duration-300 ml-3">
              <HiArrowNarrowRight />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
