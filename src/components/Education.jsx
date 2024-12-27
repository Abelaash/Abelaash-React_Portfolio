import React from "react";
import Humber1 from "../assets/humber.png";


const Education = () => {
    return (
       
            <div name="education" className="w-full h-[90vh] bg-[#0a192f] text-gray-300">
              <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                  <div className="sm:text-right pb-8 pl-4">
                    <p className="text-4xl font-bold inline border-b-4 border-pink-600">
                      Education
                    </p>
                  </div>
                </div>
                <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                  <div className="sm:text-right text-xl font-bold">
                    <p>
                      Computer Programming & Analysis
                    </p>
                    <p className='pt-4 '>
                        Humber College - <i>Etobicoke, ON</i>
                    </p>
                    <p className='pt-4'>
                        Jan. 2022 - Apr. 2025
                    </p>
                  </div>
    
                  <div>
                      <ul className='list-inside'>
                        <li className="">
                            Dean Honour's List Fall 2023, Winter 2023 & Winter 2022
                        </li>
                        
                      </ul>
                    
                  </div>
                  <div className="sm:text-right text-xl font-bold">
                  <p>
                      Computer Programming
                    </p>
                    <p className='pt-4 '>
                        Humber College - <i>Etobicoke, ON</i>
                    </p>
                    <p className='pt-4'>
                        Sept. 2018 - Apr. 2020
                        </p>
                  </div>
    
                  <div>
                      <ul className='list-inside'>
                        <li>
                            Favourite Courses: XML, Open-Source Programming, ASP.NET
                        </li>
        
                       
                      </ul>
                    
                  </div>
                </div>
              </div>
            </div>
          );
        };
    

export default Education;
