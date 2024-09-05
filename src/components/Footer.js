import React from "react";
import { VscGithub } from "react-icons/vsc";
import { RxGithubLogo } from "react-icons/rx";
import { FaSquareGithub } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-socials">
          <a href="https://github.com/shubhamojha98" target="_blank" rel="noopener noreferrer"><RxGithubLogo/></a>
          <a href="https://github.com/shubhamojha98" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
        </div>
        <div className="copyright">
          <small>Shubham Kumar Ojha</small>
        </div>
      </footer>
    </>
  );
};

export default Footer;
