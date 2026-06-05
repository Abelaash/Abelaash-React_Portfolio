import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Experience from "./components/Experience";
import SkillsEducation from "./components/SkillsEducation";
import Contact from "./components/Contact";

import CapstoneProject from "./components/CapstoneProject";
import FootballManager from "./components/FootballManager";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Work />
      <Experience />
      <SkillsEducation />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="grain" />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie-recommendation" element={<CapstoneProject />} />
        <Route path="/football-manager" element={<FootballManager />} />
      </Routes>
    </Router>
  );
}