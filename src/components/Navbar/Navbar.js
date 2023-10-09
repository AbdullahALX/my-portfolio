import React from 'react';
import '../Navbar/navbar.css';
import logo from '../../assets/logo3.png';
import { Link } from 'react-scroll';
import contactIcon from '../../assets/contactMe.svg';
import resumeFile from '../../assets/ResumeLAST.pdf';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img
        src={logo}
        alt="logo"
        className="logo"
        onClick={() => {
          var moveTo = document.getElementsByClassName('homeContent');
          moveTo[0].scrollIntoView({ behavior: 'smooth', duration: '500' });
        }}
      />
      <div className="navLinks">
        <Link
          className="navLinkItem"
          activeClass="active"
          to="Home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          Home
        </Link>
        <Link
          className="navLinkItem"
          activeClass="active"
          to="Skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          Skills
        </Link>
        <Link
          className="navLinkItem"
          activeClass="active"
          to="Works"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          Works
        </Link>
        <Link
          className="navLinkItem"
          activeClass="active"
          to="contactPage"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          Contact Me
        </Link>
      </div>

      <button
        className="contactNavButton"
        onClick={() => window.open(resumeFile)}
      >
        <img
          src={contactIcon}
          alt="contact-me-icon"
          className="navContactMeImg"
        />
        Resume
      </button>
    </nav>
  );
};

export default Navbar;
