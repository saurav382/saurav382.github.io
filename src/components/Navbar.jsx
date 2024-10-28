import "../main.css";
import "./styles/Navbar.css";
import React from "react";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="left">
          <h1 className="title">Portfolio</h1>
        </div>
        <div className="right">
          <ScrollLink
            to="mainy"
            spy={true}
            smooth={true}
            offset={-140}
            duration={600}
            className="nav__link"
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="skills"
            spy={true}
            smooth={true}
            offset={-140}
            duration={600}
            className="nav__link"
          >
            Skills
          </ScrollLink>
          <ScrollLink
            to="project"
            spy={true}
            smooth={true}
            offset={-140}
            duration={600}
            className="nav__link"
          >
            Projects
          </ScrollLink>
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            offset={-140}
            duration={600}
            className="nav__link"
          >
            Contact Me
          </ScrollLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
