import React from "react";
import Logo from "../assets/logo.jpg";
import {FaJava} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiMysql,
  SiGit,
  SiBootstrap,
  SiSpring,
  SiApachemaven,
  SiCss3,
  SiHtml5,
  SiAngular,
  SiNodedotjs
} from "react-icons/si";

function About() {
  return (
    <div className="about__container">
      <h2 className="title">About me</h2>
      <div className="info">
        <div className="image">
          <img src={Logo} alt="me" />
        </div>
        <div className="text">
          <p>
            Responsible and motivated student ready to apply education in the workplace. Offers excellent technical abilities with 
            software and applications, ability to handle challenging work, and excellent time management skills.
          </p>
          <p>
          I am a Front-end Developer / Engineer with strong verbal and written communication skills, self-driven, and can deliver
high-quality results in a fast-paced environment.
          </p>
        </div>
      </div>
      <div className="skills">
        <h2 className="title">Skills</h2>
        <div className="skills-section">
        <div className="skills-grid">
            <p className="skill">
              <span>
                <FaJava />
              </span>
              Java
            </p>
            <p className="skill">
              <span>
                <SiGit />
              </span>
              Version Control
            </p>
            <p className="skill">
              <span>
                <SiCss3 />
              </span>
              CSS3
            </p>
            <p className="skill">
              <span>
                <SiReact />
              </span>
              React
            </p>
            <p className="skill">
              <span>
                <SiSpring />
              </span>
              Spring
            </p>
            <p className="skill">
              <span>
                <SiJavascript />
              </span>
              JavaScript
            </p>
            <p className="skill">
              <span>
                <SiTypescript />
              </span>
              Typescript
            </p>
            <p className="skill">
              <span>
                <SiBootstrap />
              </span>
              Bootstrap
            </p>
            <p className="skill">
              <span>
                <SiApachemaven />
              </span>
              Maven
            </p>
            <p className="skill">
              <span>
                <SiMysql />
              </span>
              MySQL
            </p>
            <p className="skill">
              <span>
                <SiNodedotjs />
              </span>
              Nodejs
            </p>
            <p className="skill">
              <span>
                <SiHtml5 />
              </span>
              HTML5
            </p>
            <p className="skill">
              <span>
                <SiAngular />
              </span>
              AngularJS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
