import React from "react";
import Logo from "../assets/logo.jpg";
import {FaJava} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiPostgresql,
  SiGit,
  SiFlask,
  SiSpring,
  SiApachemaven,
  SiApachekafka,
  SiCss3,
  SiJenkins,
  SiHtml5,
  SiHelm,
  SiAmazonaws
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
            Analytical and resourceful problem-solver with disciplined approach and skill in producing clean, robust code.
          </p>
          <p>
          I am a Software Developer / Engineer with strong verbal and written communication skills, self-driven, and can deliver
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
                <SiPostgresql />
              </span>
              Postgres
            </p>
            <p className="skill">
              <span>
                <SiPython />
              </span>
              Python
            </p>
            <p className="skill">
              <span>
                <SiSpring />
              </span>
              Spring
            </p>
            <p className="skill">
              <span>
                <SiHelm />
              </span>
              Helm
            </p>
            <p className="skill">
              <span>
                <SiTypescript />
              </span>
              Typescript
            </p>
            <p className="skill">
              <span>
                <SiJavascript />
              </span>
              Javascript
            </p>
            <p className="skill">
              <span>
                <SiAmazonaws />
              </span>
              AWS
            </p>
            <p className="skill">
              <span>
                <SiApachemaven />
              </span>
              Maven
            </p>
            <p className="skill">
              <span>
                <SiApachekafka />
              </span>
              Apache Kafka
            </p>
            <p className="skill">
              <span>
                <SiCss3 />
              </span>
              CSS
            </p>
            <p className="skill">
              <span>
                <SiJenkins />
              </span>
              Jenkins
            </p>
            <p className="skill">
              <span>
                <SiHtml5 />
              </span>
              HTML5
            </p>
            <p className="skill">
              <span>
                <SiFlask />
              </span>
              Flask
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
