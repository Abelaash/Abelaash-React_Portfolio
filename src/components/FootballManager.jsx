import React from "react";
import { Link } from "react-router-dom";

const FootballManager = () => (
  <div className="detail">
    <Link to="/" className="back">← Back to portfolio</Link>
    <h1>Soccer Management System<span className="accent">.</span></h1>
    <p className="lead">
      A full-featured football manager web application built with ASP.NET MVC for CPAN 369 at Humber College. It simulates managing teams, leagues, players, stats and injuries using real-time API data and custom authentication.
    </p>

    <h2>Overview</h2>
    <ul>
      <li>View team and player statistics</li>
      <li>Live league standings and upcoming fixtures</li>
      <li>Custom login system with role-based access</li>
    </ul>

    <h2>Features implemented</h2>
    <ul>
      <li>CRUD — teams, players, staff, injuries</li>
      <li>Squad view with player cards (image, name, nationality, position)</li>
      <li>Live API integration with API-Football</li>
      <li>Auto-import of coaches and injury data</li>
      <li>AJAX file upload/download for documents</li>
      <li>Custom user authentication with ADO.NET</li>
    </ul>

    <h2>Tech stack</h2>
    <ul>
      <li>ASP.NET MVC (C#)</li>
      <li>Entity Framework + ADO.NET</li>
      <li>Bootstrap + jQuery</li>
      <li>SQL Server</li>
      <li>API-Football (RapidAPI)</li>
    </ul>

    <a href="https://github.com/Abelaash/cpan369_FootballManager" target="_blank" rel="noreferrer" className="ghost-btn">View code on GitHub ↗</a>
  </div>
);

export default FootballManager;