import React from 'react';
import '../Home/Home.css';
import hireMe from '../../assets/hireMe.svg';
import { Link } from 'react-scroll';
import myImage from '../../assets/myImage3.svg';
import { motion as m } from 'framer-motion';
const Home = () => {
  return (
    <section
      id="Home"
      className="homeContent"
      // initial={{ opacity: 0, x: 500 }}
      // whileInView={{ opacity: 1, x: 0 }}
      // transition={{ duration: 0.8 }}
    >
      <img src={myImage} alt="photo-of-me" className="leftImage" />
      <div>
        <span className="hello">
          Hello,
          <br />
        </span>
        <span className="nameContent">
          I'm <span className="myName">Abdullah</span>
          <br />
          Software Engineer
        </span>
        <p
          className="description"
          // initial={{ opacity: 0, x: -500, scale: 0 }}
          // whileInView={{ opacity: 1, x: 0, scale: 1 }}
          // transition={{ duration: 0.5 }}
        >
          {' '}
          Skilled in Java, Python, C++, C, HTML, CSS, SQL, JavaScript, React,
          <br />
          and familiar with tools like MySQL, GitHub, Firebase, and MongoDB.
        </p>
        <Link>
          <button
            className="HireMeButton"
            onClick={() => {
              var moveTo = document.getElementsByClassName('contactPage');
              moveTo[0].scrollIntoView({ behavior: 'smooth', duration: '300' });
            }}
          >
            <img src={hireMe} alt="hire-me-icon" className="hireMeImg" />
            Hire me
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Home;
