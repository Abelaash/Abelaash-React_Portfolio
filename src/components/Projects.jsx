import React from 'react';
import WorkImg from '../assets/workImg.PNG';
import ReactGame from "../assets/reactGame.png";
import CEYA from "../assets/ceya.PNG";
import MERN1 from "../assets/MERN1.png";
import MERN2 from "../assets/MERN2.png";
import Recipe from "../assets/RecipeApp.png";
import Movie from "../assets/MovieApp.png";
import Capstone from "../assets/capstone.png"; // ✅ Correct capstone (Movie Recommendation)
import FootballManager from "../assets/footballmanager.png"; // ✅ Correct Football Manager

const Projects = () => {
  return (
    <div id="projects" className="w-full md:h-full text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Portfolio
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          
        <ProjectCard
          image={Capstone}
          title="Movie Recommendation App"
          visitLink="/movie-recommendation"
          codeLink="https://github.com/Abelaash/MovieCapstoneProject"
        />

        <ProjectCard
          image={FootballManager}
          title="Soccer Management System"
          visitLink="/football-manager"
          codeLink="https://github.com/Abelaash/cpan369_FootballManager"
        />


          {/* FLXPAY */}
          <ProjectCard
            image={WorkImg}
            title="FLXPAY"
            visitLink="/"
            codeLink="/"
          />

          {/* React Game */}
          <ProjectCard
            image={ReactGame}
            title="React Game"
           
            codeLink="https://github.com/Abelaash/TekkenReborm"
          />

          {/* MERN Project 2 */}
          <ProjectCard
            image={MERN2}
            title="MERN Project 2"
           
            codeLink="https://github.com/Abelaash/Moviestore_Project"
          />

          {/* Recipe App */}
          <ProjectCard
            image={Recipe}
            title="Recipe App"
          
            codeLink="https://github.com/Abelaash/ReactNative_FinalProject"
          />

          {/* Movie App (old) */}
          <ProjectCard
            image={Movie}
            title="Simple Movie App"
            codeLink="https://github.com/Abelaash/React_Native-MovieApp-2023"
          />

        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ image, title, visitLink, codeLink }) => (
  <div
    style={{ backgroundImage: `url(${image})` }}
    className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
  >
    <div className="opacity-0 group-hover:opacity-100">
      <span className="text-2xl font-bold text-white tracking-wider">
        {title}
      </span>
      <div className="pt-8 text-center">
        <a href={visitLink} target="_blank" rel="noopener noreferrer">
          <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600">
            Visit
          </button>
        </a>
        <a href={codeLink} target="_blank" rel="noopener noreferrer">
          <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600">
            Code
          </button>
        </a>
      </div>
    </div>
  </div>
);

export default Projects;
