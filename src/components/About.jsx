import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
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
              I'm a Computer Programmer graduate at Humber College. Now going to
              enroll my second year in my Advanced Diploma in Computer
              Programming & Analysis program at Humber College. I love to
              develop, create and build web and mobile applications. I am
              passionate about frontend and backend development. I like to take
              part in extracurricular activities such as working on projects
              with other developers and taking part in clubs to learn new
              techologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
