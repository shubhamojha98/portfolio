import React from "react";
import "../App.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import own_img2 from "../assets/own_img.jpg";

const Header = () => {
  return (
    <>
      <header>
        <div className="container head_container">
          <h5>Hello I am</h5>
          <h1>Shubham Kumar Ojha</h1>
          <h5>An Aspiring Software Developer</h5>
          <div className="cnnt_btn">
            <a href="" className="btn btn-connect">
              Let's Connect
            </a>
            {/* <a href=""></a> */}
          </div>
          <div className="headersocial">
            <a href="https://www.linkedin.com/in/shubham-kumar-ojha-a16923208/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/shubhamojha98" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </div>

          <div className="own-image">
            <img src={own_img2} alt="Own" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
