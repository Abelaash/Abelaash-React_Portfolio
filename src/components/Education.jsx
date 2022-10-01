import React from "react";
import Humber1 from "../assets/humber.png";


const Education = () => {
    return (
        <div name="education" className='w-full h-screen bg-[#0a192f] text-gray-300'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Education</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-5 text-center py-9'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-25 mx-auto' src={Humber1} alt="HTML ICON" />
                        <p className='my-4'>Computer Programming & Analysis</p>
                        <p className="my-4">Jan 2022 - April 2025</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-25 mx-auto' src={Humber1} alt="" />
                        <p className='my-7'>Computer Programming</p>
                        <p className="my-5">Sept 2018 - April 2020</p>
                    </div>
                    
                </div>
            </div>
        </div>
      )
    }
    

export default Education;
