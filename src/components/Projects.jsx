import React, { useState } from "react";
import ReactGame from "../assets/reactGame.png";
import MERN2 from "../assets/MERN2.png";
import Recipe from "../assets/RecipeApp.png";
import Movie from "../assets/MovieApp.png";
import Capstone from "../assets/capstone.png";
import Mystique from "../assets/mystique.jpg";
import OudCafe from "../assets/oudcafe.png";
import FootballManager from "../assets/footballmanager.png";
import Egglesscakeshop from "../assets/Egglesscakeshop.png";
import HalalStreeteatz from "../assets/HalalStreeteatz.png";
import HalalStreetEatzWeb from "../assets/HalalStreetEatzWeb.png"

const allProjects = [
  // ⭐ Figma Projects
  {
    category: "Figma Project",
    type: "Figma",
    image: Egglesscakeshop,
    title: "EgglessCakeShop (Figma)",
    visitLink:
      "https://www.figma.com/design/5uiHlFSrxKPtWqCeh2suDE/Eggless-Cake-Shop-Mockup?node-id=0-1&p=f",
  },
  {
    category: "Figma Project",
    type: "Figma",
    image: HalalStreeteatz,
    title: "HalalStreetEatz (Figma)",
    visitLink:
      "https://www.figma.com/design/7LOnsYC3xL7m6Aotvbbb2A/HALALSTREETEATZ?node-id=0-1&p=f",
  },

  // ⭐ WordPress Projects
   {
    category: "WordPress Project",
    type: "WordPress",
    image: HalalStreetEatzWeb,
    title: "HalalStreetEatz",
    visitLink:
      "https://halalstreeteatz.com/",
  },
  {
    category: "WordPress Project",
    type: "WordPress",
    image: Mystique,
    title: "Mystique Resto & Lounge",
    visitLink: "https://mystiqueresto.com/",
  },
  {
    category: "Past",
    type: "WordPress",
    image: OudCafe,
    title: "Oud Cafe & Lounge",
    visitLink: "https://oudcafelounge.com",
  },

  // ⭐ Featured Projects
  {
    category: "Featured",
    type: "Web",
    image: Capstone,
    title: "Movie Recommendation App",
    visitLink: "/movie-recommendation",
    codeLink: "https://github.com/Abelaash/MovieCapstoneProject",
  },
  {
    category: "Featured",
    type: "Web",
    image: FootballManager,
    title: "Soccer Management System",
    visitLink: "/football-manager",
    codeLink: "https://github.com/Abelaash/cpan369_FootballManager",
  },

  // ⭐ Past Projects
  {
    category: "Past",
    type: "Web",
    image: MERN2,
    title: "MERN Project 2",
    codeLink: "https://github.com/Abelaash/Moviestore_Project",
  },
  {
    category: "Past",
    type: "Mobile",
    image: Recipe,
    title: "Recipe App",
    codeLink: "https://github.com/Abelaash/ReactNative_FinalProject",
  },
  {
    category: "Past",
    type: "Web",
    image: ReactGame,
    title: "React Game",
    codeLink: "https://github.com/Abelaash/TekkenReborn",
  },
  {
    category: "Past",
    type: "Mobile",
    image: Movie,
    title: "Movie App",
    codeLink: "https://github.com/Abelaash/React_Native-MovieApp-2023",
  },
];

const ProjectGrid = ({ projects }) => (
  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
    {projects.map(({ image, title, visitLink, codeLink }, idx) => (
      <div
        key={`${title}-${idx}`}
        style={{ backgroundImage: `url(${image})` }}
        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-cover bg-center min-h-[200px]"
      >
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <span className="text-2xl font-bold text-white tracking-wider">
            {title}
          </span>

          <div className="pt-8 text-center">
            {visitLink && (
              <a href={visitLink} target="_blank" rel="noreferrer">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Visit
                </button>
              </a>
            )}

            {codeLink && (
              <a href={codeLink} target="_blank" rel="noreferrer">
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
);

const Projects = () => {
  const [filter, setFilter] = useState("All");

  // ⭐ Add Figma to tabs
  const tabs = ["All", "Web", "Mobile", "WordPress", "Figma"];

  // Category filters
  const filteredProjects =
    filter === "All" ? allProjects : allProjects.filter((p) => p.type === filter);

  const showFeatured =
    filter === "All" || filter === "Web" || filter === "WordPress" || filter === "Figma";

  const currentWpProjects = allProjects.filter(
    (p) =>
      p.category === "WordPress Project" &&
      (filter === "All" || p.type === filter)
  );

  const figmaProjects = allProjects.filter(
    (p) =>
      p.category === "Figma Project" &&
      (filter === "All" || p.type === filter)
  );

  const featuredProjects = allProjects.filter(
    (p) => p.category === "Featured" && (filter === "All" || p.type === filter)
  );

  const pastProjects = filteredProjects.filter((p) => p.category === "Past");

  return (
    <div id="projects" className="w-full text-gray-300 bg-[#0a192f] py-16">
      <div className="max-w-[1000px] mx-auto p-4">
        
        <h2 className="text-4xl font-bold border-b-4 inline border-pink-600">
          Portfolio
        </h2>
        <p className="py-4">Check out some of my recent work</p>

        {/* Tabs */}
        <div className="flex gap-2 flex-wrap py-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-4 py-2 rounded transition-colors duration-150 ${
                filter === tab
                  ? "bg-pink-600 text-white"
                  : "bg-gray-700 hover:bg-gray-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ⭐ WordPress Projects */}
        {(filter === "All" || filter === "WordPress") &&
          currentWpProjects.length > 0 && (
            <>
              <h3 className="text-2xl font-semibold text-pink-500 mt-8 mb-2">
                WordPress Projects
              </h3>
              <ProjectGrid projects={currentWpProjects} />
            </>
          )}

        {/* ⭐ Figma Projects */}
        {(filter === "All" || filter === "Figma") &&
          figmaProjects.length > 0 && (
            <>
              <h3 className="text-2xl font-semibold text-pink-500 mt-8 mb-2">
                Figma Projects
              </h3>
              <ProjectGrid projects={figmaProjects} />
            </>
          )}

        {/* ⭐ Featured */}
        {showFeatured && featuredProjects.length > 0 && (
          <>
            <h3 className="text-2xl font-semibold text-pink-500 mt-8 mb-2">
              Featured Projects
            </h3>
            <ProjectGrid projects={featuredProjects} />
          </>
        )}

        {/* ⭐ Past */}
        {pastProjects.length > 0 && (
          <>
            <h3 className="text-2xl font-semibold text-pink-500 mt-8 mb-2">
              Past Projects
            </h3>
            <ProjectGrid projects={pastProjects} />
          </>
        )}
      </div>
    </div>
  );
};

export default Projects;
