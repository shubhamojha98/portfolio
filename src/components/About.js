import React from "react";
import { FaAward } from "react-icons/fa6";
import { MdOutlineLaptopWindows } from "react-icons/md";
import { RiProjectorFill } from "react-icons/ri";

const About = () => {
  return (
    <>
      <section id="about">
        <h5>Get to Know</h5>
        <h2>About Me</h2>

        <div className="container about-container">
          <div className="about-content">
            <div className="about-card">
              <article className="card">
                <FaAward className="icon" />
                <h4>Experience</h4>
                <small>6 Month of Working Experience</small>
              </article>
              <article className="card">
                <MdOutlineLaptopWindows className="icon" />
                <h4>Company</h4>
                <small>Bira Ventures Pvt Ltd.</small>
              </article>
              <article className="card">
                <RiProjectorFill className="icon" />
                <h4>Projects</h4>
                <small>3 Complete Project</small>
              </article>
            </div>
            <br></br>
            <h1>My Key Qualities</h1>
            <br></br>
            <p>
              Can handle multiple tasks on a daily basis , have creative approach to problem solving. I am a dependable person who is great at time management. and always energetic and eager to learn new
              skills. I have experience working as part of a team and individually and , flexible in my working hours, being able to work evenings and weekends. I am always on time for organized
              events, work-related or otherwise. Even though I take my work seriously, I do have a good sense of humour.
            </p>
            <br></br>
            <span>
            <a href='#contact' className='btn btn-connect'>Let's Talk</a></span>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
