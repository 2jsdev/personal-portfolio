import React from "react";

const Skills: React.FC = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container container grid">
        <div className="skills__content">
          <h3 className="skills__title">Frontend developer</h3>

          <div className="skills__box">
            <div className="skills__group">
              <div className="skills__data">
                <i className="bx bxs-badge-check" />
                <div>
                  <h3 className="skills__name">HTML</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>

              <div className="skills__data">
                <i className="bx bxs-badge-check" />
                <div>
                  <h3 className="skills__name">CSS</h3>
                  <span className="skills__level">Basic</span>
                </div>
              </div>

              <div className="skills__data">
                <i className="bx bxs-badge-check" />
                <div>
                  <h3 className="skills__name">JavaScript</h3>
                  <span className="skills__level">Advanced</span>
                </div>
              </div>
            </div>

            <div className="skills__group">
              <div className="skills__data">
                <i className="bx bxs-badge-check" />
                <div>
                  <h3 className="skills__name">React</h3>
                  <span className="skills__level">Advanced</span>
                </div>
              </div>

              <div className="skills__data">
                <i className="bx bxs-badge-check" />
                <div>
                  <h3 className="skills__name">Git</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>

              <div className="skills__data">
                <i className="bx bxs-badge-check" />
                <div>
                  <h3 className="skills__name">TypeScript</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="skills__content">
          <h3 className="skills__title">Backend developer</h3>

          <div className="skills__box">
            <div className="skills__group">
              <div className="skills__data">
                <i className="bx bxs-badge-check" />
                <div>
                  <h3 className="skills__name">Node.js</h3>
                  <span className="skills__level">Advanced</span>
                </div>
              </div>

              <div className="skills__data">
                <i className="bx bxs-badge-check" />
                <div>
                  <h3 className="skills__name">NestJS</h3>
                  <span className="skills__level">Basic</span>
                </div>
              </div>

              <div className="skills__data">
                <i className="bx bxs-badge-check" />
                <div>
                  <h3 className="skills__name">Python</h3>
                  <span className="skills__level">Basic</span>
                </div>
              </div>
            </div>

            <div className="skills__group">
              <div className="skills__data">
                <i className="bx bxs-badge-check" />
                <div>
                  <h3 className="skills__name">MySQL</h3>
                  <span className="skills__level">Basic</span>
                </div>
              </div>

              <div className="skills__data">
                <i className="bx bxs-badge-check" />
                <div>
                  <h3 className="skills__name">PostgreSQL</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>

              <div className="skills__data">
                <i className="bx bxs-badge-check" />
                <div>
                  <h3 className="skills__name">MongoDB</h3>
                  <span className="skills__level">Advanced</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
