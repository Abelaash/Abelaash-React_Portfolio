import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import { Skills } from "./components/Skills";

import CapstoneProject from "./components/CapstoneProject";
import FootballManager from "./components/FootballManager";
import { HashLink } from "react-router-hash-link";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Main Portfolio (one-page style) */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Education />
              <Skills />
              <Projects />
              <Experience />
              <Achievements />
              <Contact />
            </>
          }
        />

        {/* Project Detail Pages */}
        <Route path="/movie-recommendation" element={<CapstoneProject />} />
        <Route path="/football-manager" element={<FootballManager />} />
      </Routes>
    </Router>
  );
}

export default App;
