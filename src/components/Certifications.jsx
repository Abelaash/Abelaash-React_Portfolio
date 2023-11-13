import React from "react";

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
                    <p>
                        Meta Front-End Developer Professional Certification
                    </p>
                    <p>
                        Meta
                    </p>
                    <p>
                        August 2023
                    </p>

                </div>

            </div>
      </div>
    </div>
  );
};
export default Certifications