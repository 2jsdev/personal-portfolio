import React from "react";

const About: React.FC = () => {
  return (
    <section className="about section" id="about">
      <span className="section__subtitle">My Intro</span>
      <h2 className="section__title">About Me</h2>
      <div className="about__container container grid">
        <img src="assets/img/about.jpg" alt="" className="about__img" />

        <div className="about__data">
          <div className="about__info">
            <div className="about__box">
              <i className="bx bx-award about__icon" />
              <h3 className="about__title">04+</h3>
              <span className="about__subtitle">Years experience</span>
            </div>

            <div className="about__box">
              <i className="bx bx-briefcase-alt about__icon" />
              <h3 className="about__title">10+</h3>
              <span className="about__subtitle">Completed projects</span>
            </div>

            <div className="about__box">
              <i className="bx bx-happy-beaming about__icon" />
              <h3 className="about__title">03</h3>
              <span className="about__subtitle">Companies worked</span>
            </div>
          </div>

          <p className="about__description">
            Full-stack Developer with 4+ years of experience developing web
            applications using JavaScript, TypeScript, ReactJS, NodeJS, and
            Services (REST) applying design patterns and architectures. I'm
            enthusiastic about learning technologies, I always try to learn new
            things. Looking forward to being part of an innovative team.
          </p>

          <a href="#contact" className="button">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
