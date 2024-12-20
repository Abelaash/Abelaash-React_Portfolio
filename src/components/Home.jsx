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
        Hi, my name is Abelaash, a soon-to-be graduate in Computer Programming and Analysis from Humber College, with a strong passion for software and web development. Over the past three years, I have honed my skills in creating responsive, user-friendly web applications and robust back-end systems.

With expertise in tools and technologies like React.js, Flask, Django, SQL Databases, and AWS, I bring ideas to life by crafting efficient and innovative solutions. Having completed my co-op work term and various hands-on projects, I am ready to contribute to impactful development teams.

Set to graduate in April 2024, I am actively seeking full-time opportunities where I can leverage my skills to solve real-world challenges and continue growing as a developer. Take a look at my portfolio and see how I can bring value to your next project!
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
