import React from 'react';

const FootballManager = () => {
  return (
    <div className="text-white bg-[#0a192f] min-h-screen pt-[100px] px-8 md:px-20 pb-20">
      <h1 className="text-4xl font-bold border-b-4 border-pink-600 inline-block mb-6">
        ⚽ Football Manager
      </h1>

      <p className="mb-6 text-lg max-w-4xl">
        This is a full-featured Football Manager web application built using <strong>ASP.NET MVC</strong>, developed as the final project for CPAN 369: Web Programming at Humber College. The app simulates the management of football teams, leagues, players, stats, injuries, and more — all using real-time API data and custom user authentication.
      </p>

      <h2 className="text-2xl font-semibold text-pink-400 mb-2">📁 Project Overview</h2>
      <ul className="list-disc list-inside mb-6 leading-7">
        <li>View team and player statistics</li>
        <li>Access live league standings and upcoming fixtures</li>
        <li>Custom login system with role-based access</li>
      </ul>

      <h2 className="text-2xl font-semibold text-pink-400 mb-2">📚 Core Topics Covered</h2>
      <ul className="list-disc list-inside mb-6 leading-7">
        <li><strong>Weeks 1–2:</strong> MVC architecture, EF setup, LINQ, relational data</li>
        <li><strong>Weeks 3–4:</strong> HTML Helpers, CRUD operations, entity relationships</li>
        <li><strong>Weeks 5–6:</strong> Form validation, ViewModels, custom error messages</li>
        <li><strong>Weeks 7–8:</strong> Layouts, Partial Views, File Uploads, AJAX with jQuery</li>
        <li><strong>Weeks 9–10:</strong> Authentication, Role-based Access, Dynamic Dropdowns, Menu Rendering</li>
      </ul>

      <h2 className="text-2xl font-semibold text-pink-400 mb-2">🎯 Features Implemented</h2>
      <ul className="list-disc list-inside mb-6 leading-7">
        <li>CRUD: Teams, Players, Staff, Injuries</li>
        <li>Squad view: player cards with image, name, nationality, position</li>
        <li>Live API integration with API-Football (league stats, players, matches)</li>
        <li>Auto-import of coaches and injury data</li>
        <li>AJAX file upload/download for documents</li>
        <li>Custom user authentication with ADO.NET</li>
      </ul>

      <h2 className="text-2xl font-semibold text-pink-400 mb-2">🛠️ Tech Stack</h2>
      <ul className="list-disc list-inside mb-6 leading-7">
        <li>ASP.NET MVC (C#)</li>
        <li>Entity Framework + ADO.NET</li>
        <li>Bootstrap + jQuery</li>
        <li>SQL Server</li>
        <li>API-Football (RapidAPI)</li>
      </ul>

      <h2 className="text-2xl font-semibold text-pink-400 mb-2">👥 Collaborators</h2>
      <p className="mb-8">
        Abelaash Giritharan (N01285813) <br />
        Miguel Sevilla (N01515417)
      </p>

      <div className="flex gap-4">
        <a
          href="https://github.com/Abelaash/cpan369_FootballManager"
          target="_blank"
          rel="noreferrer"
        >
          <button className="bg-pink-600 hover:bg-pink-500 text-white px-6 py-2 rounded shadow-md">
            View Code on GitHub
          </button>
        </a>
      </div>
    </div>
  );
};

export default FootballManager;
