import React from 'react';

const CapstoneProject = () => {
  return (
    <div className="text-white bg-[#0a192f] min-h-screen p-10">
      <h1 className="text-4xl font-bold border-b-4 border-pink-600 inline-block mb-6">
        Movie Recommendation App
      </h1>

      <p className="mb-6 text-lg max-w-3xl">
        The <strong>MovieCapstoneProject</strong> is an AI-powered, personalized movie and TV show recommendation system built as a final-year capstone project.
        It helps users discover new content, get tailored suggestions, track their watch history, and explore entertainment through a modern UI and intelligent backend.
      </p>

      <h2 className="text-2xl font-semibold text-pink-400 mb-2">🚀 Features</h2>
      <ul className="list-disc list-inside mb-6 text-base leading-7">
        <li>⭐ Personalized Recommendations based on user preferences</li>
        <li>🔍 Search Functionality for movies and shows</li>
        <li>🧠 AI Chatbot to explore genres, moods, actors</li>
        <li>📅 Watch History Tracking & Saved Content</li>
        <li>🔄 Filter & Sort by genre, rating, status</li>
        <li>🔐 Secure Sign-up/Login with profile management</li>
      </ul>

      <h2 className="text-2xl font-semibold text-pink-400 mb-2">🛠️ Tech Stack</h2>
      <ul className="list-disc list-inside mb-6 text-base leading-7">
        <li>Frontend: React Native (Expo)</li>
        <li>Backend: Django + Django REST Framework</li>
        <li>Database: MySQL (AWS RDS)</li>
        <li>APIs: TMDb, IMDb</li>
        <li>Cloud Hosting: AWS (EC2 + RDS)</li>
        <li>AI/ML: Random Forest & Generative AI (Google GenAI)</li>
      </ul>

      <h2 className="text-2xl font-semibold text-pink-400 mb-2">📁 Project Structure</h2>
      <p className="mb-4 text-base">
        <strong>Frontend (React Native - Expo)</strong>: Reusable components, API calls, and UI logic live in the <code>CapstoneProject</code> folder.<br />
        <strong>Backend (Django)</strong>: Recommendation engine, models, and APIs reside under <code>moviecapstone</code>.
      </p>

      <div className="flex gap-4 mt-6">
        <a
          href="https://github.com/Abelaash/MovieCapstoneProject"
          target="_blank"
          rel="noreferrer"
        >
          <button className="bg-pink-600 hover:bg-pink-500 text-white px-6 py-2 rounded">
            View Code on GitHub
          </button>
        </a>
      </div>
    </div>
  );
};

export default CapstoneProject;
