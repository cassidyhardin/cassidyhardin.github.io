import React, { Component } from "react";
import NavBar from "./navbar";
import Card from "react-bootstrap/Card";
// import CardDeck from "react-bootstrap/CardDeck";

class CS61B extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar></NavBar>
        <Card className="class">
          <Card.Title className="class">CS61B - Data Structures</Card.Title>
          <Card.Subtitle className="class">
            {" "}
            Section: Thursday 5-6PM (online){" "}
          </Card.Subtitle>
          <Card.Body className="class">
            Every week we will go through a weeksheet relevant to the material
            covered in lecture. Feel free to come to section with any questions
            you have!
          </Card.Body>
          <Card.Link
            href="https://inst.eecs.berkeley.edu/~cs61b/sp20/"
            className="class"
          >
            Course Website
          </Card.Link>
        </Card>
        {/* <CardDeck> */}
        <div className="teaching">
          {/* ONE */}
          <Card className="section">
            <Card.Title className="section">Week One</Card.Title>
            <Card.Subtitle className="section">
              {" "}
              Thursday <br></br> 6 Feburary
            </Card.Subtitle>
            <Card.Body className="section">
              Introduction into Java and object types. Beginning to examine
              inheritance, the golden rule of equals, and pass by value and pass
              by object.
            </Card.Body>
          </Card>
          {/* TWO */}
          <Card className="section">
            <Card.Title className="section">Week Two</Card.Title>
            <Card.Subtitle className="section">
              {" "}
              Thursday <br></br> 13 Feburary
            </Card.Subtitle>
            <Card.Body className="section">Linked lists and Arrays!</Card.Body>
          </Card>
          {/* THREE */}
          <Card className="section">
            <Card.Title className="section">Week Three</Card.Title>
            <Card.Subtitle className="section">
              {" "}
              Thursday <br></br> 20 Feburary
            </Card.Subtitle>
            <Card.Body className="section">
              Introduction into polymorphism, inheritance, casting and higher
              order functions.
            </Card.Body>
          </Card>
          {/* FOUR */}
          <Card className="section">
            <Card.Title className="section">Week Four</Card.Title>
            <Card.Subtitle className="section">
              {" "}
              Thursday <br></br> 27 Feburary
            </Card.Subtitle>
            <Card.Body className="section">Iterators & Iterables</Card.Body>
          </Card>
          {/* FIVE */}
          <Card className="section">
            <Card.Title className="section">Week Five</Card.Title>
            <Card.Subtitle className="section">
              Thursday <br></br> 5 March
            </Card.Subtitle>
            <Card.Body className="section">
              Introduction into abstract data types, and disjoint sets, and
              continuation of asymptotics.
            </Card.Body>
          </Card>
          {/* SIX */}
          <Card className="section">
            <Card.Title className="section">Week Six</Card.Title>
            <Card.Subtitle className="section">
              Thursday <br></br> 12 March
            </Card.Subtitle>
            <Card.Body className="section">
              Binary Trees, Red-Black Trees, & B-Trees!
            </Card.Body>
          </Card>
          {/* SEVEN */}
          <Card className="section">
            <Card.Title className="section">Week Seven</Card.Title>
            <Card.Subtitle className="section">
              Thursday <br></br> 19 March
            </Card.Subtitle>
            <Card.Body className="section">
              Introduction into priority queues and heap implementation, and
              hashing.
            </Card.Body>
          </Card>
          {/* EIGHT */}
          <Card className="section">
            <Card.Title className="section">Week Eight</Card.Title>
            <Card.Subtitle className="section">
              Thursday <br></br> 2 April
            </Card.Subtitle>
            <Card.Body className="section">
              Graph and Tree traversal and shortest paths algorithims.
            </Card.Body>
          </Card>
          {/* NINE */}
          <Card className="section">
            <Card.Title className="section">Week Nine</Card.Title>
            <Card.Subtitle className="section">
              Thursday <br></br> 9 April
            </Card.Subtitle>
            <Card.Body className="section">Minimum spanning trees.</Card.Body>
          </Card>
          {/* TEN */}
          <Card className="section">
            <Card.Title className="section">Week Ten</Card.Title>
            <Card.Subtitle className="section">
              Thursday <br></br> 16 April
            </Card.Subtitle>
            <Card.Body className="section">
              Introduction into sorting algorithims.
            </Card.Body>
          </Card>
          {/* ELEVEN */}
          <Card className="section">
            <Card.Title className="section">Week Eleven</Card.Title>
            <Card.Subtitle className="section">
              Thursday <br></br> 23 April
            </Card.Subtitle>
            <Card.Body className="section">
              More sorting - quick sort, merge sort and radix sort.
            </Card.Body>
          </Card>
          {/* TWELEVE */}
          <Card className="section">
            <Card.Title className="section">Week Twelve</Card.Title>
            <Card.Subtitle className="section">
              Thursday <br></br> 30 April
            </Card.Subtitle>
            <Card.Body className="section">
              Real world problems and applications of abstract data types.
            </Card.Body>
          </Card>
        </div>
        {/* </CardDeck> */}
      </React.Fragment>
    );
  }
}

export default CS61B;
