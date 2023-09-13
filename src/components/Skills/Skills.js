import React from 'react';
import '../Skills/Skills.css';
import dataStrcure from '../../assets/dataStrcure.svg';
import frontendSkill from '../../assets/frontendSkill.svg';
import backendSkill from '../../assets/backendSkill.svg';
import AppSkill from '../../assets/AppSkiils.svg';
import { color } from 'framer-motion';
import { motion as m } from 'framer-motion';

const Skills = () => {
  return (
    <section id="Skills">
      <span className="SkillsTitle">What I do </span>
      <span className="mySkillsDes">
        With proficiency in Java, Python, C++, C, HTML, CSS, and JavaScript, I'm
        well-versed in tools like JFrame, MySQL, MongoDB, React, React Native,
        Figma, Firebase, and GitHub.
      </span>
      <div className="skillsBars">
        <div className="skillBar">
          <img src={dataStrcure} alt="" className="skillImg" />
          <div className="skillText">
            <h2>Data structures & problem-solving</h2>
            <p>
              {' '}
              Strong skills in data structures and problem-solving, particularly
              in the context of Java, C, and C++, enable efficient algorithm
              development and optimization in coding projects
            </p>
          </div>
        </div>

        <div className="skillBar">
          <img src={frontendSkill} alt="" className="skillImg" />
          <div className="skillText">
            <h2>Frontend Developing</h2>
            <p>
              I specialize in frontend development, utilizing HTML, CSS,
              JavaScript, and various libraries such as React to create engaging
              and interactive user interfaces
            </p>
          </div>
        </div>

        <div className="skillBar">
          <img src={backendSkill} alt="" className="skillImg" />
          <div className="skillText">
            <h2>Backend Developing</h2>
            <p>
              {' '}
              My proficiency in backend development extends to utilizing MySQL
              and MongoDB for efficient data storage and management, integrating
              Firebase for authentication and storage solutions, and Node.js
            </p>
          </div>
        </div>

        <div className="skillBar">
          <img src={AppSkill} alt="" className="skillImg" />
          <div className="skillText">
            <h2>Mobile App Developing</h2>
            <p>
              I have experience in mobile app development using React Native,
              enabling me to craft versatile and user-friendly applications for
              various platforms
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
