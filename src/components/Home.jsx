import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";


const Home = () => {
  return (
    <div name="home" className="bg-[#0a192f] w-full h-screen">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, I'm</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Abelaash Giritharan
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm second year student at Humber College
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm a student studying at Humber College, specializing in Computer
          Programming & Analysis program. I'm doing an internship at A R Luxury
          Management as a Full-Stack Developer intern. I'm more focused on building responsive
          full-stack websites.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            View Projects
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
