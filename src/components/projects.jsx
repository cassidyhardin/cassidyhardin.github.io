import React, { Component } from "react";

export default class Projects extends Component {
  render() {
    return (
      <div className="project-card">
        <div className="project-name">TarjimlyDocs</div>

        <div className="project-content">
          Built a ruby on rails web-app connecting Aid Workers and Refugees with
          Volunteer Translators. Aid Workers are able to submit documents, which
          are claimed and completed by Translators.
        </div>

        <a
          className="project-github"
          href="https://github.com/cassidyhardin/TarjimlyDocs"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>

        <a
          className="project-github"
          href="https://docs.tarjimly.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          TarjimlyDocs
        </a>

        <div className="project-features">
          <li>Ruby on Rails AWS Docker</li>
        </div>
      </div>
    );
  }
}
