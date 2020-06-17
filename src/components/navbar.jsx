import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark" data-spy="scroll">
      <a className="navbar-brand" href="https://github.com/cassidyhardin">
        Cassidy Hardin
      </a>
      <ul className="nav nav-pills">
        <li class="nav-item">
          <a class="nav-link" href="#fat">
            About
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#mdo">
            Portfolio
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
