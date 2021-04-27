import React from "react";
import { Link } from "react-router-dom";
import LinkedIn from "../assets/linkedin.png";
import './Nav.scss';

const Nav = () => {
  return (
    <div className="navbar">
      {" "}
      <div className="logo">
        <h1 style={{ color: "whitesmoke" }}>
          {" "}
          <Link style={{ textDecorationLine: "none", color: "white" }} to="/">
            SARA SALAZAR{" "}
          </Link>
        </h1>{" "}
      </div>
      <ul className="menu-items">
        <div className="text-list">
          <Link to="/about"> About Me</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="icons">
          <a
            href="https://github.com/saritasalazar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="github-icon"
              src="https://icon-library.com/images/github-icon-white/github-icon-white-6.jpg"
              alt="github logo"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/sara-salazar-53b5065b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="linkedin-icon" src={LinkedIn} alt="LinkedIn logo" />
          </a>
        </div>
      </ul>
    </div>
  );
};

export default Nav;
