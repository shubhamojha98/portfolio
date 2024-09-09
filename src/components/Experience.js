import React from "react";
import { BsClipboardCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <>
      <section id="experience">
        <h5>What Skills I have</h5>
        <h2>My Expertise</h2>
        <div className="container exp-card">
          <div className="frontend-card">
            <h3>Frontend Development</h3>
            <div className="exp-content">
              <article className="exp-details">
                <BsClipboardCheckFill className="exp-icon" />
                <div>
                  <h4>HTML</h4>
                  <h6 className="text-light">Intermediate</h6>
                </div>
              </article>
              <article className="exp-details">
                <BsClipboardCheckFill className="exp-icon" />
                <div>
                  <h4>CSS</h4>
                  <h6 className="text-light">Intermediate</h6>
                </div>
              </article>
              <article className="exp-details">
                <BsClipboardCheckFill className="exp-icon" />
                <div>
                  <h4>JavaScript</h4>
                  <h6 className="text-light">Intermediate</h6>
                </div>
              </article>
              <article className="exp-details">
                <BsClipboardCheckFill className="exp-icon" />
                <div>
                  <h4>React</h4>
                  <h6 className="text-light">Intermediate</h6>
                </div>
              </article>
              <article className="exp-details">
                <BsClipboardCheckFill className="exp-icon" />
                <div>
                  <h4>Bootstrap</h4>
                  <h6 className="text-light">Intermediate</h6>
                </div>
              </article>
              {/* <article className="exp-details">
                <div>
                  <h4>HTML</h4>
                  <h6>Intermediate</h6>
                </div>
              </article> */}
            </div>
          </div>
          <div className="backend-card">
            <h3>Backend Development</h3>
            <div className="exp-content">
              <article className="exp-details">
                <BsClipboardCheckFill className="exp-icon" />
                <div>
                  <h4>Springboot</h4>
                  <h6 className="text-light">Intermediate</h6>
                </div>
              </article>
              <article className="exp-details">
                <BsClipboardCheckFill className="exp-icon" />
                <div>
                  <h4>PHP</h4>
                  <h6 className="text-light">Intermediate</h6>
                </div>
              </article>
              <article className="exp-details">
                <BsClipboardCheckFill className="exp-icon" />
                <div>
                  <h4>MS.NET</h4>
                  <h6 className="text-light">Intermediate</h6>
                </div>
              </article>
              <article className="exp-details">
                <BsClipboardCheckFill className="exp-icon" />
                <div>
                  <h4>Hibernate</h4>
                  <h6 className="text-light">Intermediate</h6>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
