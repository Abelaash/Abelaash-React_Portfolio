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
              As a Computer Programming graduate from Humber College, I'm excited to be enrolling in my second year of the Advanced Diploma in Computer Programming & Analysis program. My passion lies in developing , creating, and building web and mobile applications, and I enjoy both frontend and backend development. I also enjoy participating in extracurricular activities such as working with other developers on projects and taking part in clubs to learn about new technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
