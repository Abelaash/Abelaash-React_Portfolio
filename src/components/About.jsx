import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi, I'm Abelaash, nice to meet you. Please take a look at my
              portfolio website.
            </p>
          </div>
          <div>
            <p>
            Aspiring web developer with two years of hands-on experience gained through internships.
Demonstrated ability to design, develop, and deploy dynamic web applications using both
frontend and backend technologies. Proficient in collaborating within agile teams, solving
problems, and quickly learning new skills to deliver impactful solutions. Eager to apply my
enthusiasm, skills, and growth mindset to a full-time or part-time role.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
