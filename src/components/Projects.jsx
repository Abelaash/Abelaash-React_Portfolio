import React, { useState } from "react";
import ReactGame from "../assets/reactGame.png";
import MERN2 from "../assets/MERN2.png";
import Recipe from "../assets/RecipeApp.png";
import Movie from "../assets/MovieApp.png";
import Capstone from "../assets/capstone.png";
import FootballManager from "../assets/footballmanager.png";
import Egglesscakeshop from "../assets/egglesscakeshop.png"
const allProjects = [
  {
    category: "Current WordPress Project",
    type: "Web",
    image: Egglesscakeshop,
    title: "EgglessCakeShop",
    visitLink: "https://www.figma.com/design/5uiHlFSrxKPtWqCeh2suDE/Eggless-Cake-Shop-Mockup?t=fCY9sY1besHhNmjO-0"
  },
   {
    category: "Current WordPress Project",
    type: "Web",
    image: Egglesscakeshop,
    title: "EgglessCakeShop",
    visitLink: "https://www.figma.com/design/5uiHlFSrxKPtWqCeh2suDE/Eggless-Cake-Shop-Mockup?t=fCY9sY1besHhNmjO-0"
  },
  {
    category: "Featured",
    type: "Web",
    image: Capstone,
    title: "Movie Recommendation App",
    visitLink: "/movie-recommendation",
    codeLink: "https://github.com/Abelaash/MovieCapstoneProject"
  },
  {
    category: "Featured",
    type: "Web",
    image: FootballManager,
    title: "Soccer Management System",
    visitLink: "/football-manager",
    codeLink: "https://github.com/Abelaash/cpan369_FootballManager"
  },
  /*{
    category: "Past",
    type: "UX",
    image: CEYA,
    title: "CEYA UX Case Study",
    visitLink: "#",
    codeLink: "https://www.figma.com/file/some-link"
  },*/
  {
    category: "Past",
    type: "Web",
    image: MERN2,
    title: "MERN Project 2",
    codeLink: "https://github.com/Abelaash/Moviestore_Project"
  },
  {
    category: "Past",
    type: "Mobile",
    image: Recipe,
    title: "Recipe App",
    codeLink: "https://github.com/Abelaash/ReactNative_FinalProject"
  },
  {
    category: "Past",
    type: "Web",
    image: ReactGame,
    title: "React Game",
    codeLink: "https://github.com/Abelaash/TekkenReborn"
  },
  {
    category: "Past",
    type: "Mobile",
    image: Movie,
    title: "Movie App",
    codeLink: "https://github.com/Abelaash/React_Native-MovieApp-2023"
  }
];

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const tabs = ["All", "Web", "Mobile"];

  const filteredProjects =
    filter === "All"
      ? allProjects
      : allProjects.filter((project) => project.type === filter);

  const showFeatured =
    filter === "All" || filter === "Web" || filter === "UX";

  return (
    <div id="projects" className="w-full text-gray-300 bg-[#0a192f] py-16">
      <div className="max-w-[1000px] mx-auto p-4">
        <h2 className="text-4xl font-bold border-b-4 inline border-pink-600">
          Portfolio
        </h2>
        <p className="py-4">Check out some of my recent work</p>

        {/* Tabs */}
        <div className="flex gap-4 py-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-4 py-2 rounded ${
                filter === tab ? "bg-pink-600 text-white" : "bg-gray-700"
              }`}
            >
              {tab} Projects
            </button>
          ))}
        </div>

        {/* Featured Projects */}
        {showFeatured ? (
          <>
            <h3 className="text-2xl font-semibold text-pink-500 mt-8 mb-2">
              Featured Projects
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {allProjects
                .filter((project) => project.category === "Featured")
                .map(({ image, title, visitLink, codeLink }, idx) => (
                  <div
                    key={idx}
                    style={{ backgroundImage: `url(${image})` }}
                    className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
                  >
                    <div className="opacity-0 group-hover:opacity-100">
                      <span className="text-2xl font-bold text-white tracking-wider">
                        {title}
                      </span>
                      <div className="pt-8 text-center">
                        {visitLink && (
                          <a href={visitLink}>
                            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                              Visit
                            </button>
                          </a>
                        )}
                        {codeLink && (
                          <a href={codeLink}>
                            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                              Code
                            </button>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </>
        ) : (
          <p className="text-lg italic text-gray-400 mt-8 mb-2">
            No featured {filter.toLowerCase()} projects yet. Stay tuned!
          </p>
        )}

        {/* Past Projects */}
        <h3 className="text-2xl font-semibold text-pink-500 mt-8 mb-2">
          Past Projects
        </h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredProjects
            .filter((project) => project.category === "Past")
            .map(({ image, title, visitLink, codeLink }, idx) => (
              <div
                key={idx}
                style={{ backgroundImage: `url(${image})` }}
                className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
              >
                <div className="opacity-0 group-hover:opacity-100">
                  <span className="text-2xl font-bold text-white tracking-wider">
                    {title}
                  </span>
                  <div className="pt-8 text-center">
                    {visitLink && (
                      <a href={visitLink}>
                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                          Visit
                        </button>
                      </a>
                    )}
                    {codeLink && (
                      <a href={codeLink}>
                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                          Code
                        </button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
