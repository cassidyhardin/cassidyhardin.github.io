import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";

import NavDropdown from "react-bootstrap/NavDropdown";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="light" variant="light" fixed="top">
      <div className="navTitle">
        <Link to="/">Cassidy Hardin </Link>
      </div>
      <Nav className="mr-auto"></Nav>
      <Form inline>
        <div className="navLink">
          <Link className="navLink" to="/about">
            ABOUT{" "}
          </Link>
          <Link className="navLink" to="/portfolio">
            PORTFOLIO{" "}
          </Link>
          <Link className="navLink" to="/resume">
            RESUME{" "}
          </Link>

          <NavDropdown title="TEACHING" className="navLink">
            <Link className="navLink" to="/cs61B">
              Data Structures (CS61B){" "}
            </Link>
            <Link className="navLink" to="/cs169">
              Software Engineering (CS169){" "}
            </Link>
          </NavDropdown>
        </div>
      </Form>
    </Navbar>
  );
};

export default NavBar;
