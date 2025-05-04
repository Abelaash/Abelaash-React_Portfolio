import React from "react";

const Achievements = () => {
  return (
    <div
      id="achievements"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              Achievements
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
        <div className="sm:text-right text-xl font-bold">
            <p>Dean's Honours List Fall 2024</p>
            <p className="pt-4 ">Humber College</p>
            <p className="pt-4">Feb.2025</p>
          </div>
          <div>
            <ul className="list-inside">
              Awarded for students scoring 80% and above 
              GPA: 87%
            </ul>
          </div>
        <div className="sm:text-right text-xl font-bold">
            <p>Dean's Honours List Fall 2023</p>
            <p className="pt-4 ">Humber College</p>
            <p className="pt-4">Feb.2024</p>
          </div>
          <div>
            <ul className="list-inside">
              Awarded for students scoring 80% and above 
              GPA: 81%
            </ul>
          </div>
          <div className="sm:text-right text-xl font-bold">
            <p>Dean's Honours List Winter 2023</p>
            <p className="pt-4 ">Humber College</p>
            <p className="pt-4">June.2023</p>
          </div>
          <div>
            <ul className="list-inside">
              Awarded for students scoring 80% and above 
              GPA: 91%
            </ul>
          </div>
          <div className="sm:text-right text-xl font-bold">
            <p>Dean's Honours List Winter 2022</p>
            <p className="pt-4 ">Humber College</p>
            <p className="pt-4">June 2022</p>
          </div>
          <div>
            <ul className="list-inside">
              Awarded for students scoring 80% and above
              GPA: 87%
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Achievements;
