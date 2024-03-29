import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="bg-[#0a192f] w-full h-screen">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, I'm</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Abelaash Giritharan
        </h1>
        {/* <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm second year Humber College
        </h2> */}
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm a 2nd year student at Humber College enrolling to the Computer Programming and Analysis program with the skills in software and web development and seeking a 4/8 month Co-op work term starting Winter 2024
        </p>
        <div>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600"
          >
            View Projects
            <span className="group-hover:rotate-90 duration-300" >
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
