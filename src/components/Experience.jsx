import React from 'react'

const Experience = () => {
    return (
        <div name="experience" className="w-full h-screen bg-[#0a192f] text-gray-300">
          <div className="flex flex-col justify-center items-center w-full h-full">
            <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
              <div className="sm:text-right pb-8 pl-4">
                <p className="text-4xl font-bold inline border-b-4 border-pink-600">
                  Work Experience
                </p>
              </div>
            </div>
            <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-xl font-bold">
                <p>
                  Junior Software Engineer Intern
                </p>
                <p className='pt-4 '>
                    Tech Mahindra
                </p>
                <p className='pt-4'>
                    May. 2023 - August. 2023
                </p>
              </div>
              <div>
                  <ul className='list-inside'>
                    <li>Followed coding standards and techniques using PEGA with the similarity of front-end and back-end languages</li>
                    <li>Integrated external systems to send and retrieve data using REST APIs</li>
                    <li>Gained proficiency in applying rulsets and using PEGA's PRPC guardrails</li>
                    <li>Created case types to configure the design</li>
                    <li>Learned how to develop an Activity and Data Page </li>
                  </ul>
                
              </div>
              <div className="sm:text-right text-xl font-bold">
                <p>
                  Full-Stack Developer Intern
                </p>
                <p className='pt-4 '>
                    A R LUXURY MANAGEMENT
                </p>
                <p className='pt-4'>
                    August. 2022 - December. 2022
                </p>
              </div>

              <div>
                  <ul className='list-inside'>
                    <li>
                        Developing a FLXPAY application using ReactJS, NextJS, and TailWindCSS to advertise the website to the public.
                    </li>
                    <li>
                        Design a concept website and conducted a UI/UX prototype and wireframe using Figma.
                    </li>
                    <li>
                        Collaborating with other developers and remotely using GitHub to share code to develop and host to promote the website.
                    </li>
                  </ul>
                
              </div>
              <div className="sm:text-right text-xl font-bold">
                <p>
                  Software Developer Intern
                </p>
                <p className='pt-4 '>
                    Central Etobicoke Youth Agency (CEYA)
                </p>
                <p className='pt-4'>
                    April. 2021 - Nov. 2021
                </p>
              </div>

              <div>
                  <ul className='list-inside'>
                    <li>
                        Created full-stacked applications using HTML, CSS, ReactJS and Flutter to promote CEYA's services, increasing clientele by 15% .
                    </li>
                    <li>
                        Designed mobile applications and conducted UX design prototyping using Adobe XD to advertise CEYA's services to the public, increasing website traffic by 10%.
                    </li>
                    <li>
                        Created websites using content management sites such as WordPress and Shopify to promote the agency.
                    </li>
                  </ul>
                
              </div>
            </div>
          </div>
        </div>
      );
    };
    

export default Experience