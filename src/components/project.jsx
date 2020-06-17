import React, { Component } from "react";

class Project extends Component {
  styles = {
    width: "18rem",
  };
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">TarjimlyDocs</h5>
          <h6 className="card-subtitle mb-2 text-muted">2019</h6>
          <p className="card-text">
            Built a ruby on rails web-app connecting Aid Workers and Refugees
            with Volunteer Translators. Aid Workers are able to submit
            documents, which are claimed and completed by Translators.
          </p>

          <span className="badge badge-info">Ruby on Rails</span>
          <span className="badge badge-info">Docker</span>
          <span className="badge badge-info">AWS</span>

          <br></br>

          <a
            href="https://github.com/cassidyhardin/TarjimlyDocs"
            className="card-link"
          >
            GitHub
          </a>
          <a href="https://docs.tarjimly.org" className="card-link">
            TarjimlyDocs.org
          </a>
        </div>
      </div>
    );
  }
}

export default Project;
