import React, { useEffect } from "react";

const Qualification: React.FC = () => {
  const activeClass = "qualification__active";

  useEffect(() => {
    const tabs = document.querySelectorAll("[data-target]");
    const tabContents = document.querySelectorAll("[data-content]");

    function activeQualification(this: any) {
      const target = document.querySelector(this.dataset.target);

      tabContents.forEach((tabContent) => {
        tabContent.classList.remove(activeClass);
      });
      target.classList.add(activeClass);

      tabs.forEach((tab) => {
        tab.classList.remove(activeClass);
      });
      this.classList.add(activeClass);
    }

    tabs.forEach((tab) => {
      tab.addEventListener("click", activeQualification);
    });

    return () => {
      tabs.forEach((tab) => {
        tab.removeEventListener("click", activeQualification);
      });
    };
  }, []);

  return (
    <div className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container grid">
        <div className="qualification__tabs">
          <div
            className="qualification__button button-flex qualification__active"
            data-target="#education"
          >
            <i className="bx bxs-graduation qualification__icon" />
            Education
          </div>

          <div
            className="qualification__button button-flex"
            data-target="#work"
          >
            <i className="bx bx-briefcase-alt qualification__icon" />
            Work
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className="qualification__content qualification__active"
            data-content
            id="education"
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">System Engineer</h3>
                <span className="qualification__subtitle">
                  Bolivia - University
                </span>
                <div className="qualification__calendar">
                  <i className="bx bxs-calendar" />
                  Feb 2019 - Aug 2021
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                {/* <span className="qualification__line"></span> */}
              </div>

              <div>
                <h3 className="qualification__title">
                  Computer Systems Analyst
                </h3>
                <span className="qualification__subtitle">
                  Bolivia - Institute
                </span>
                <div className="qualification__calendar">
                  <i className="bx bxs-calendar" />
                  Mar 2015 - Jul 2018
                </div>
              </div>
            </div>
          </div>

          <div className="qualification__content" data-content id="work">
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Full-stack Developer</h3>
                <span className="qualification__subtitle">
                  Unosquare - Bolivia
                </span>
                <div className="qualification__calendar">
                  <i className="bx bxs-calendar" />
                  Jun 2021 - Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Full-stack Developer</h3>
                <span className="qualification__subtitle">
                  Nearshore Code - Bolivia
                </span>
                <div className="qualification__calendar">
                  <i className="bx bxs-calendar" />
                  Jan 2019 - Jun 2021
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Developer</h3>
                <span className="qualification__subtitle">VIVA - Bolivia</span>
                <div className="qualification__calendar">
                  <i className="bx bxs-calendar" />
                  Jul 2018 - Dec 2018
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualification;
