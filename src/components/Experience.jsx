import React from 'react'

const Experience = () => {
    return (
        <div id="experience" className="w-full h-[160vh] bg-[#0a192f] text-gray-300">
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
                  Co-Founder / Web Developer
                </p>
                <p className='pt-4 '>
                    Poply Inc
                </p>
                <p className='pt-4'>
                    May. 2025 - Present
                </p>
              </div>
              <div>
                  <ul className='list-inside'>
                    <li>Built and maintained 5+ WordPress websites, increasing average client site speed by 35% through custom themes, plugin optimization, and clean front-end development.</li>
                    <li>Developed fully responsive UI layouts using HTML, CSS, JavaScript, and Elementor, resulting in 100% mobile compatibility and 20–40% higher user retention across client sites.</li>
                    <li>Managed hosting, backups, DNS, staging, and deployments for 5+ active client projects, reducing downtime to under 1% annually and improving deployment turnaround by 50%.</li>
                  </ul>
              </div>
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
                    <li>Integrated 3 external REST API services to automate data exchange, cutting manual data entry by 40% and improving process accuracy and response time.</li>
                    <li>Applied PEGA rulesets and PRPC guardrails effectively, helping maintain zero critical violations and lowering technical debt throughout the project lifecycle.</li>
                    <li>Designed and configured 6+ case types in PEGA Case Designer, streamlining user flows and reducing average case resolution steps by 15–20% based on test feedback.</li>
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
                        Developed the FLXPAY web application using React.js, Redux, Next.js, and Tailwind CSS to promote ARLM’s services, resulting in a 10% increase in website traffic and higher lead engagement.
                    </li>
                    <li>
                        Designed a full UI/UX prototype and interactive wireframes in Figma, creating a modern, conversion-focused website layout that improved user navigation and branding consistency.
                    </li>
                    <li>
                        Collaborated remotely with 4+ cross-functional team members using GitHub, pull requests, and weekly sprint meetings to align development with client requirements and project milestones.
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
                        Built full-stack web and mobile applications using ReactJS and React Native, enabling CEYA to expand digital outreach and increase community engagement by 20%+ across both platforms.
                    </li>
                    <li>
                        Deployed the application on AWS with 99.9% uptime, reducing hosting costs by 25% and improving page load speed for users by 30%, based on internal performance testing.
                    </li>
                    <li>
                        Designed UI/UX prototypes and mobile user flows in Adobe XD, reducing onboarding steps by 40% and improving first-time user navigation clarity during testing sessions.
                    </li>
                  </ul>
                
              </div>
            </div>
          </div>
        </div>
      );
    };
    

export default Experience