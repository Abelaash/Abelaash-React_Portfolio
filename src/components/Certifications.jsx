import React from "react";
import META from "../assets/META.png"; // Replace with the actual path to your image

const Certifications = () => {
  return (
    <div
      name="certifications"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              Professional Certifications
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-xl font-bold">
            <p>Meta Front-End Developer Professional Certification</p>
            <p>Meta</p>
            <p>August 2023</p>
          </div>
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
            {/* Add the image here */}
            <img src={META} alt="Certification" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
