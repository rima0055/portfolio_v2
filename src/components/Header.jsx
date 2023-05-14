import React from "react";
import Resume from "../assets/Resume.pdf";
import DarkMode from "./darkmode";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import {GrDocumentPdf} from "react-icons/gr";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <h3 className="logo">Rima Patel</h3>
        <p>rimapatel9824@gmail.com</p>
      </div>
      <div className="header__right">
        <span className="linkedin">
          <a
            href={Resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrDocumentPdf />
          </a>
        </span>
        <span className="linkedin">
          <a
            href="https://www.linkedin.com/in/rimapatel0055"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin />
          </a>
        </span>
        <span className="github">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubSquare />
          </a>
        </span>
        <span className="gmail">
          <a
            href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=rimapatel9824@gmail.com&tf=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGmail />
          </a>
        </span>
        <DarkMode />
      </div>
    </div>
  );
}
export default Header;
