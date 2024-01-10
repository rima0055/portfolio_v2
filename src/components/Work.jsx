import React from "react";

function Work() {
  return (
    <div className="experience-section">

      <h2 className="title">Work Experience</h2>

      <div className="job">
        <p className="job__title">Front-end Developer</p>
        <p className="company__name">DIT Web Solutions Inc | Octember 2023 - December 2023</p>
        <ul className="job__points">
          <li>Creating the website architecture.</li>
          <li>Designing and managing the website back-end including database and server integration.</li>
	        <li>Generating WordPress themes and plugins.</li>
          <li>Planning and creating the website architecture.</li>
          <li>Establishing and guiding website architecture so that sites are attractive and user-friendly.</li>
          <li>Troubleshooting and resolving website problems for clients and co-workers.</li>
          <li>Developed user interfaces for web applications using HTML, CSS, and JavaScript.</li>
          <li>Designing and building the website front-end.</li>
          <li>Created successful websites that met requirements for objectives such as load speed and design.</li>
        </ul>
      </div>

      <div className="job">
        <p className="job__title">Software Developer</p>
        <p className="company__name">Akash Technolabs | June 2018 - February 2019</p>
        <ul className="job__points">
          <li>Got hands-on experience in professional software engineering practices & best practices for the full software development life cycle, including coding standards, code reviews, source control management, build processes, testing, and operations.</li>
        	<li>Design, develop, modify, debug and/or maintain software code according to functional, non-functional, and technical design specifications.</li>
          <li>Proficient in using Git for version control, merging and branching.</li>
          <li>Collaborated with cross-functional teams to identify and solve complex software development problems.</li>
	        <li>Implemented security measures like authentication and authorization using Spring Security.</li>
          <li>Experience in working with multi-threading and concurrency in Java.</li>
         	<li>Worked in an agile environment to deliver high-quality software.</li>
        </ul>
      </div>
    </div>
  );
}

export default Work;
