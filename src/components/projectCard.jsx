import React, { Component } from "react";
import Card from "react-bootstrap/Card";

class ProjectCard extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Card className="projectCard">
          <Card.Body>
            <Card.Title>TarjimlyDocs</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">2019</Card.Subtitle>
            <Card.Text>
              Built a ruby on rails web-app connecting Aid Workers and Refugees
              with Volunteer Translators. Aid Workers are able to submit
              documents, which are claimed and completed by Translators.
            </Card.Text>
            <Card.Link href="https://github.com/cassidyhardin/TarjimlyDocs">
              GitHub
            </Card.Link>
            <Card.Link href="https://docs.tarjimly.org">
              TarjimlyDocs.org
            </Card.Link>
          </Card.Body>
        </Card>
      </React.Fragment>
    );
  }
}

export default ProjectCard;
