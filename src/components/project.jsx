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
              <Card.Title className="portfolioCard">TarjimlyDocs</Card.Title>
              <Card.Subtitle className="portfolioCard">2019</Card.Subtitle>
              <Card.Text>
                TarjimlyDocs ia a ruby on rails web-app connecting Aid Workers
                and Refugees with Volunteer Translators. Aid Workers and
                refugees are able to submit documents, which are claimed and
                completed by Translators.
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
              <i class="fa fa-github" aria-hidden="true"></i>
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
              <Card.Title className="portfolioCard">Numc</Card.Title>
              <Card.Subtitle className="portfolioCard">2020</Card.Subtitle>
              <Card.Text>
                Numc is a Python library for matrix multiplication with a C
                backend to perform operations in an optimized time and memory
                efficent manner. This library has been optimized with SIMD
                Instructions, parallelization, and OpenMP.
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
                  href="https://github.com/61c-student/sp20-proj4-cassidyhardin"
                  className="cardLink"
                >
                  GitHub
                </Card.Link>
              </div>
            </Card.Body>
          </Card>
          <Card className="portfolioCard">
            <Card.Body>
              <Card.Title className="portfolioCard">
                Newtwork Connectivity
              </Card.Title>
              <Card.Subtitle className="portfolioCard">2020</Card.Subtitle>
              <Card.Text>
                A collection of algorithims to optimize the placement of cell
                towers, while minimizing the average pairwise distance between
                any pair of cities. The algorithims analyze the score of fiber
                networks constructed from different optimized minimum spanning
                tree algorithims.
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
              <Card.Title className="portfolioCard">
                Secure File Sharing System
              </Card.Title>
              <Card.Subtitle className="portfolioCard">2020</Card.Subtitle>
              <Card.Text>
                A secure end-to-end encrypted file sharing service allowing
                individuals to securley share and store files. Designed to
                protect the contents of individuals files and prevent any
                modification or atempt to access unauthorized files.
              </Card.Text>
              <div className="badges">
                <Badge variant="info" className="projectBadge">
                  End-to-End Encryption
                </Badge>
                <Badge variant="info" className="projectBadge">
                  Go
                </Badge>
                <Badge variant="info" className="projectBadge">
                  IND-CPA Secure
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
              <Card.Title className="portfolioCard">
                Unicorn Box Server
              </Card.Title>
              <Card.Subtitle className="portfolioCard">2020</Card.Subtitle>
              <Card.Text>
                Unicorn box server is a previously insecure digitial file
                sharing site, which has since been imporved to protect against
                SQL injections, CSRF Attacks, replay attacks, and cookie
                poisioning attacks.
              </Card.Text>

              <div className="badges">
                <Badge variant="info" className="projectBadge">
                  Go
                </Badge>
                <Badge variant="info" className="projectBadge">
                  Session Security
                </Badge>
              </div>
              <div className="links">
                <Card.Link
                  href="https://github.com/cassidyhardin/UnicornBoxServer"
                  className="cardLink"
                >
                  GitHub
                </Card.Link>
              </div>
            </Card.Body>
          </Card>

          <Card className="portfolioCard">
            <Card.Body>
              <Card.Title className="portfolioCard">
                Central Processing Unit{" "}
              </Card.Title>
              <Card.Subtitle className="portfolioCard">2020</Card.Subtitle>
              <Card.Text>
                A standard RISC-V pipelined CPU able to excute RISC-V
                instructions. This five stage CPU is able to complete memory,
                branch comparator, immediete generation, and control login
                operations.
              </Card.Text>

              <div className="badges">
                <Badge variant="info" className="projectBadge">
                  ALU
                </Badge>
                <Badge variant="info" className="projectBadge">
                  RISC-V
                </Badge>
                <Badge variant="info" className="projectBadge">
                  Pipelined
                </Badge>
              </div>
              <div className="links">
                <Card.Link
                  href="https://github.com/61c-student/sp20-proj3-cassidyhardin"
                  className="cardLink"
                >
                  GitHub
                </Card.Link>
              </div>
            </Card.Body>
          </Card>

          <Card className="portfolioCard">
            <Card.Body>
              <Card.Title className="portfolioCard">
                Randomized Pacman{" "}
              </Card.Title>
              <Card.Subtitle className="portfolioCard">2019</Card.Subtitle>
              <Card.Text>
                A randomized map game where a personalized creature is dropped
                into an unkown world and is required to find all necessary keys
                before being eaten. Creatures are able to teleport within the
                world by unlocking special teleport locations.
              </Card.Text>

              <div className="badges">
                <Badge variant="info" className="projectBadge">
                  ALU
                </Badge>
                <Badge variant="info" className="projectBadge">
                  RISC-V
                </Badge>
                <Badge variant="info" className="projectBadge">
                  Pipelined
                </Badge>
              </div>
              <div className="links">
                <Card.Link
                  href="https://github.com/Berkeley-CS61B-Student/sp19-proj3-s416-s1263"
                  className="cardLink"
                >
                  GitHub
                </Card.Link>
              </div>
            </Card.Body>
          </Card>

          <Card className="portfolioCard">
            <Card.Body>
              <Card.Title className="portfolioCard">
                IT Payroll Retention and Equity Analysis{" "}
              </Card.Title>
              <Card.Subtitle className="portfolioCard">2019</Card.Subtitle>
              <Card.Text>
                Analysis of annonymized information technology employee payroll
                data. Developing a model to assess future retention rates and
                equity across race and gender identities.
              </Card.Text>

              <div className="badges">
                <Badge variant="info" className="projectBadge">
                  Big Data
                </Badge>
                <Badge variant="info" className="projectBadge">
                  Python
                </Badge>
              </div>
              <div className="links">
                <Card.Link
                  href="https://github.com/cassidyhardin/UCITPayroll"
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
