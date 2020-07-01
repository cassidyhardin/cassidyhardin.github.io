import React, { Component } from "react";
import Navbar from "./navbar";
import Image from "./bw.jpeg";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

// import ReactRotatingText from "react-rotating-text";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* // <div className="profile"> */}
        <Navbar></Navbar>
        <CardDeck className="profile">
          <Card className="profile">
            <Card.Body className="profile">
              <br />
              I'm a fourth year studying Computer Science and Data Science at
              the University of California, Berkeley graduating in May 2021. I
              am passionate about secuirty, data infustructure, and design. I
              want to work at the intersection of data and software, where I
              will be able to build universally accessible systems. <br />
              <br></br>I am a life long learner and open to any and every
              oppurtunity to grow both personally and professionally.
              <br />
              <br />
              cassidyhardin (at) berkeley.edu
              <br />
              <Card.Link href="https://www.linkedin.com/in/cassidyhardin/">
                {" "}
                LinkedIn
              </Card.Link>
              <br />
              <Card.Link href="https://github.com/cassidyhardin">
                {" "}
                GitHub
              </Card.Link>
            </Card.Body>
          </Card>
          <Card className="profileImage">
            <Card.Img className="profileImage" src={Image}></Card.Img>
          </Card>
        </CardDeck>

        {/* <div className="introduction">
          <div className="introduction-text">
            I'm a fourth year studying Computer Science and Data Science at the
            University of California, Berkeley graduating in May 2021. I am
            passionate about secuirty, data infustructure, and design. I want to
            work at the intersection of data and software, where I will be able
            to build universally accessible systems. <br />
            <br></br>I am passionate about learning and any oppurtunity to grow
            both personally and professionally.
          </div>
        </div> */}
      </div>
    );
  }
}
