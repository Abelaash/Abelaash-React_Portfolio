import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Reveal, SectionLabel } from "./Reveal";

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
import HalalStreetEatzWeb from "../assets/HalalStreetEatzWeb.png";
import HigginsAromar from "../assets/HigginsAromar.png";
import StopMarketing from "../assets/StopMarketing.png";
import UplyftedMarketingAgency from "../assets/UplyftedMarketingAgency.png";

const webflowPlaceholder =
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80";

const allProjects = [
  { category: "Webflow Project", type: "Webflow", image: webflowPlaceholder, title: "Canopy Studio", description: "Sustainable architecture studio. Toronto-based brand with eco-conscious design.", tag: "🇨🇦 Architecture", visitLink: "#" },
  { category: "Webflow Project", type: "Webflow", image: webflowPlaceholder, title: "Arktis", description: "Premium Norwegian cold-brew coffee brand. Dark, editorial and Scandinavian.", tag: "🇳🇴 Brand", visitLink: "#" },
  { category: "Webflow Project", type: "Webflow", image: webflowPlaceholder, title: "The Laurel", description: "Canadian culture and design editorial magazine. Print-inspired web layout.", tag: "🇨🇦 Editorial", visitLink: "#" },
  { category: "Webflow Project", type: "Webflow", image: webflowPlaceholder, title: "Lys Exhibition", description: "Contemporary art exhibition in Tromsø exploring light in Arctic Norway.", tag: "🇳🇴 Exhibition", visitLink: "#" },
  { category: "Webflow Project", type: "Webflow", image: webflowPlaceholder, title: "Fjordkraft Gear", description: "Norwegian outdoor gear brand. Rugged, refined Scandinavian lifestyle.", tag: "🇳🇴 Outdoor", visitLink: "#" },
  { category: "Webflow Project", type: "Webflow", image: webflowPlaceholder, title: "Clearpath", description: "Vancouver-based AI productivity SaaS. Modern landing page with pricing.", tag: "🇨🇦 SaaS", visitLink: "#" },

  { category: "Figma Project", type: "Figma", image: Egglesscakeshop, title: "EgglessCakeShop", description: "UI/UX mockup for an online bakery.", tag: "UI/UX", visitLink: "https://www.figma.com/design/5uiHlFSrxKPtWqCeh2suDE/Eggless-Cake-Shop-Mockup?node-id=0-1&p=f" },
  { category: "Figma Project", type: "Figma", image: HalalStreeteatz, title: "HalalStreetEatz", description: "Mobile app mockup for a halal street food brand.", tag: "UI/UX", visitLink: "https://www.figma.com/design/7LOnsYC3xL7m6Aotvbbb2A/HALALSTREETEATZ?node-id=0-1&p=f" },

  { category: "WordPress Project", type: "WordPress", image: UplyftedMarketingAgency, title: "Uplyfted Marketing Agency", description: "Full agency website build.", tag: "WordPress", visitLink: "https://uplyftedmarketing.agency/" },
  { category: "WordPress Project", type: "WordPress", image: StopMarketing, title: "STOP Marketing", description: "Agency website — current employer.", tag: "WordPress", visitLink: "https://stopmarketing.ag/" },
  { category: "WordPress Project", type: "WordPress", image: HalalStreetEatzWeb, title: "HalalStreetEatz Web", description: "Restaurant website with online ordering.", tag: "WordPress", visitLink: "https://halalstreeteatz.com/" },
  { category: "WordPress Project", type: "WordPress", image: Mystique, title: "Mystique Resto & Lounge", description: "Premium restaurant and lounge.", tag: "WordPress", visitLink: "https://mystiqueresto.com/" },
  { category: "Past", type: "WordPress", image: OudCafe, title: "Oud Cafe & Lounge", description: "Cafe website with events and menu.", tag: "WordPress", visitLink: "https://oudcafelounge.com" },

  { category: "Shopify Projects", type: "Shopify", image: HigginsAromar, title: "Higgins Aromar", description: "E-commerce store for fragrance products.", tag: "Shopify", visitLink: "https://higginsaromar.com/" },

  { category: "Featured", type: "Web", image: Capstone, title: "Movie Recommendation App", description: "AI-powered movie & TV recommendation system with Django and AWS.", tag: "React Native + Django", visitLink: "/movie-recommendation", codeLink: "https://github.com/Abelaash/MovieCapstoneProject" },
  { category: "Featured", type: "Web", image: FootballManager, title: "Soccer Management System", description: "Full-featured football manager app with ASP.NET MVC and live API data.", tag: "ASP.NET MVC", visitLink: "/football-manager", codeLink: "https://github.com/Abelaash/cpan369_FootballManager" },

  { category: "Past", type: "Web", image: MERN2, title: "MERN Project 2", description: "Full-stack movie store application.", tag: "MERN", codeLink: "https://github.com/Abelaash/Moviestore_Project" },
  { category: "Past", type: "Mobile", image: Recipe, title: "Recipe App", description: "React Native recipe discovery app.", tag: "React Native", codeLink: "https://github.com/Abelaash/ReactNative_FinalProject" },
  { category: "Past", type: "Web", image: ReactGame, title: "React Game", description: "Tekken-inspired browser game.", tag: "React", codeLink: "https://github.com/Abelaash/TekkenReborn" },
  { category: "Past", type: "Mobile", image: Movie, title: "Movie App", description: "React Native movie browsing app.", tag: "React Native", codeLink: "https://github.com/Abelaash/React_Native-MovieApp-2023" },
];

// 3D tilt card
const ProjectCard = ({ image, title, description, tag, visitLink, codeLink, index }) => {
  const ref = useRef(null);
  const [transform, setTransform] = useState("");

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / rect.height) * -8;
    const rotateY = ((x - rect.width / 2) / rect.width) * 8;
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`);
  };

  const handleMouseLeave = () => setTransform("perspective(1000px) rotateX(0) rotateY(0) scale(1)");

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
    >
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transform, transition: "transform 0.2s ease-out" }}
        className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-pink-600/50 transition-colors duration-300 h-full"
      >
        <div className="relative overflow-hidden h-48">
          <div
            className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060912] via-transparent to-transparent opacity-60" />
          <div className="absolute top-3 left-3">
            <span className="px-2 py-1 bg-[#060912]/90 backdrop-blur border border-pink-600/30 rounded-full text-pink-400 text-xs font-medium">
              {tag}
            </span>
          </div>
        </div>
        <div className="p-5">
          <h3 className="text-white font-bold text-lg mb-1 group-hover:text-pink-400 transition-colors">{title}</h3>
          {description && <p className="text-gray-400 text-sm mb-4 leading-relaxed">{description}</p>}
          <div className="flex gap-2">
            {visitLink && visitLink !== "#" && (
              <a href={visitLink} target="_blank" rel="noreferrer">
                <button className="px-4 py-2 bg-pink-600 hover:bg-pink-500 text-white text-sm rounded-lg font-medium transition-colors">Visit ↗</button>
              </a>
            )}
            {visitLink === "#" && (
              <span className="px-4 py-2 bg-white/5 border border-white/10 text-gray-500 text-sm rounded-lg font-medium">Coming Soon</span>
            )}
            {codeLink && (
              <a href={codeLink} target="_blank" rel="noreferrer">
                <button className="px-4 py-2 bg-white/5 border border-white/10 hover:border-pink-600/50 text-gray-400 hover:text-pink-400 text-sm rounded-lg font-medium transition-all">Code</button>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const tabs = ["All", "Webflow", "Web", "Mobile", "WordPress", "Shopify", "Figma"];

  const sections = [
    { label: "Webflow Projects", key: "Webflow", category: "Webflow Project" },
    { label: "WordPress Projects", key: "WordPress", category: "WordPress Project" },
    { label: "Figma Projects", key: "Figma", category: "Figma Project" },
    { label: "Shopify Projects", key: "Shopify", category: "Shopify Projects" },
    { label: "Featured Projects", key: "Web", category: "Featured" },
    { label: "Past Projects", key: "Past", category: "Past" },
  ];

  return (
    <div id="projects" className="w-full bg-[#060912] text-gray-300 py-24">
      <div className="max-w-[1100px] mx-auto px-8">
        <SectionLabel number="05" title="Portfolio" />

        <Reveal>
          <h2 className="text-5xl sm:text-6xl font-black text-white mb-4 leading-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
            Things I've <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">built</span>
          </h2>
          <p className="text-gray-400 mb-10">A selection of my recent work across web, mobile and design</p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex gap-2 flex-wrap mb-12">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  filter === tab ? "bg-pink-600 text-white" : "bg-white/5 border border-white/10 text-gray-400 hover:border-pink-600/50 hover:text-pink-400"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </Reveal>

        {sections.map(({ label, key, category }) => {
          const projects = allProjects.filter(
            (p) => p.category === category && (filter === "All" || filter === key || filter === p.type)
          );
          if (projects.length === 0) return null;
          return (
            <div key={label} className="mb-14">
              <Reveal>
                <h3 className="text-xl font-semibold text-pink-400 mb-6 flex items-center gap-3">
                  <span className="h-px w-6 bg-pink-600" />
                  {label}
                </h3>
              </Reveal>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
                {projects.map((p, i) => (
                  <ProjectCard key={`${p.title}-${i}`} {...p} index={i} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;