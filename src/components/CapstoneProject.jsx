import React from "react";
import { Link } from "react-router-dom";

const CapstoneProject = () => (
  <div className="detail">
    <Link to="/" className="back">← Back to portfolio</Link>
    <h1>Movie Recommendation App<span className="accent">.</span></h1>
    <p className="lead">
      An AI-powered, personalized movie and TV recommendation system built as my final-year capstone. It helps users discover content, get tailored suggestions, track watch history, and explore entertainment through a modern UI and intelligent backend.
    </p>

    <h2>Features</h2>
    <ul>
      <li>Personalized recommendations based on user preferences</li>
      <li>Search across movies and shows</li>
      <li>AI chatbot to explore genres, moods and actors</li>
      <li>Watch history tracking & saved content</li>
      <li>Filter & sort by genre, rating, status</li>
      <li>Secure sign-up / login with profile management</li>
    </ul>

    <h2>Tech stack</h2>
    <ul>
      <li>Frontend — React Native (Expo)</li>
      <li>Backend — Django + Django REST Framework</li>
      <li>Database — MySQL (AWS RDS)</li>
      <li>APIs — TMDb, IMDb</li>
      <li>Cloud — AWS (EC2 + RDS)</li>
      <li>AI/ML — Random Forest & Google GenAI</li>
    </ul>

    <a href="https://github.com/Abelaash/MovieCapstoneProject" target="_blank" rel="noreferrer" className="ghost-btn">View code on GitHub ↗</a>
  </div>
);

export default CapstoneProject;