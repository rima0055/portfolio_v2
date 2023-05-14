import React from "react";

function Work() {
  return (
    <div className="experience-section">

      <h2 className="title">Work Experience</h2>

      <div className="job">
        <p className="job__title">Software Developer</p>
        <p className="company__name">ECI Technology Group Inc. | Sep 2019 - Present</p>
        <ul className="job__points">
          <li>Built distributed storage, index, and query systems that are scalable, fault-tolerant, low cost, and easy to manage/use.</li>
          <li>Got hands-on experience in professional software engineering practices & best practices for the full software development life cycle, including coding standards, code reviews, source control management, build processes, testing, and operations.</li>
          <li>Design, develop, modify, debug and/or maintain software code according to functional, non-functional and technical design specifications.</li>
          <li>Proficient in using Git for version control, merging and branching.</li>
          <li>Knowledge of cloud computing platforms like AWS and experience in deploying applications on EC2 instances.</li>
          <li>Collaborated with cross-functional teams to identify and solve complex software development problems.</li>
          <li>Implemented security measures like authentication and authorization using Spring Security.</li>
          <li>Experience in working with multi-threading and concurrency in Java.</li>
          <li>Worked in an agile environment to deliver high-quality software</li>
        </ul>
      </div>
    </div>
  );
}

export default Work;
