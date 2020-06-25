import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import CardDeck from "react-bootstrap/CardDeck";

class Project extends Component {
  styles = {
    width: "18rem",
  };
  render() {
    return (
      <div>
        <CardDeck className="portfolioCard">
          <Card className="portfolioCard">
            <Card.Body>
              <Card.Title>TarjimlyDocs</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">2019</Card.Subtitle>
              <Card.Text>
                Built a ruby on rails web-app connecting Aid Workers and
                Refugees with Volunteer Translators. Aid Workers are able to
                submit documents, which are claimed and completed by
                Translators.
              </Card.Text>
              <div className="badges">
                <Badge variant="info" className="projectBadge">
                  Ruby on Rails
                </Badge>
                <Badge variant="info" className="projectBadge">
                  Docker
                </Badge>
                <Badge variant="info" className="projectBadge">
                  AWS
                </Badge>
              </div>
              <div className="links">
                <Card.Link
                  href="https://github.com/cassidyhardin/TarjimlyDocs"
                  className="cardLink"
                >
                  GitHub
                </Card.Link>
                <Card.Link
                  href="https://docs.tarjimly.org"
                  className="cardLink"
                >
                  TarjimlyDocs.org
                </Card.Link>
              </div>
            </Card.Body>
          </Card>

          <Card className="portfolioCard">
            <Card.Body>
              <Card.Title>Dumpy</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">2020</Card.Subtitle>
              <Card.Text>
                Dumpy is a Python library for matrix multiplication with a C
                backend to perform operations in an optimized time and memory
                efficent manner.
              </Card.Text>

              <div className="badges">
                <Badge variant="info" className="projectBadge">
                  C
                </Badge>
                <Badge variant="info" className="projectBadge">
                  Python
                </Badge>
                <Badge variant="info" className="projectBadge">
                  RISC-V
                </Badge>
              </div>
              <div className="links">
                <Card.Link
                  href="https://github.com/cassidyhardin/Encrypted-File-Sharing"
                  className="cardLink"
                >
                  GitHub
                </Card.Link>
              </div>
            </Card.Body>
          </Card>
          <Card className="portfolioCard">
            <Card.Body>
              <Card.Title>TarjimlyDocs</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">2019</Card.Subtitle>
              <Card.Text>
                Built a ruby on rails web-app connecting Aid Workers and
                Refugees with Volunteer Translators. Aid Workers are able to
                submit documents, which are claimed and completed by
                Translators.
              </Card.Text>
              <div className="badges">
                <Badge variant="info" className="projectBadge">
                  Ruby on Rails
                </Badge>
                <Badge variant="info" className="projectBadge">
                  Docker
                </Badge>
                <Badge variant="info" className="projectBadge">
                  AWS
                </Badge>
              </div>
              <div className="links">
                <Card.Link
                  href="https://github.com/cassidyhardin/TarjimlyDocs"
                  className="cardLink"
                >
                  GitHub
                </Card.Link>
                <Card.Link
                  href="https://docs.tarjimly.org"
                  className="cardLink"
                >
                  TarjimlyDocs.org
                </Card.Link>
              </div>
            </Card.Body>
          </Card>

          <Card className="portfolioCard">
            <Card.Body>
              <Card.Title>Encrypted File Sharing</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">2020</Card.Subtitle>
              <Card.Text>
                Built an end-to-end encrypted file sharing service allowing
                individuals to securley share and store files without revealing
                any external file information.
              </Card.Text>
              <div className="badges">
                <Badge variant="info" className="projectBadge">
                  Go
                </Badge>

                <Badge variant="info" className="projectBadge">
                  End-to-End Encryption
                </Badge>
              </div>
              <div className="links">
                <Card.Link
                  href="https://github.com/cassidyhardin/Encrypted-File-Sharing"
                  className="cardLink"
                >
                  GitHub
                </Card.Link>
              </div>
            </Card.Body>
          </Card>

          <Card className="portfolioCard">
            <Card.Body>
              <Card.Title>Dumpy</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">2020</Card.Subtitle>
              <Card.Text>
                Dumpy is a Python library for matrix multiplication with a C
                backend to perform operations in an optimized time and memory
                efficent manner.
              </Card.Text>

              <div className="badges">
                <Badge variant="info" className="projectBadge">
                  C
                </Badge>
                <Badge variant="info" className="projectBadge">
                  Python
                </Badge>
                <Badge variant="info" className="projectBadge">
                  RISC-V
                </Badge>
              </div>
              <div className="links">
                <Card.Link
                  href="https://github.com/cassidyhardin/Encrypted-File-Sharing"
                  className="cardLink"
                >
                  GitHub
                </Card.Link>
              </div>
            </Card.Body>
          </Card>
        </CardDeck>
      </div>
    );
  }
}

export default Project;
