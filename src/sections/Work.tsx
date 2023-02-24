import React, { useEffect } from "react";
import mixitup from "mixitup";

const Work: React.FC = () => {
  const activeClass = "active-work";

  useEffect(() => {
    const linkWork = document.querySelectorAll(".work__item");

    function activeWork(this: any) {
      linkWork.forEach((l) => l.classList.remove(activeClass));
      this.classList.add(activeClass);
    }

    linkWork.forEach((l) => l.addEventListener("click", activeWork));

    return () => {
      linkWork.forEach((l) => l.removeEventListener("click", activeWork));
    };
  }, [activeClass]);

  useEffect(() => {
    const mixerPortfolio = mixitup(".work__container", {
      selectors: {
        target: ".work__card",
      },
      animation: {
        duration: 300,
      },
    });

    return () => {
      mixerPortfolio.destroy();
    };
  }, []);

  return (
    <section className="work section" id="work">
      <span className="section__subtitle">My Portfolio</span>
      <h2 className="section__title">Recent Works</h2>

      <div className="work__filters">
        <span className={`work__item ${activeClass}`} data-filter="all">
          All
        </span>
        <span className="work__item" data-filter=".frontend">
          Frontend
        </span>
        <span className="work__item" data-filter=".backend">
          Backend
        </span>
        <span className="work__item" data-filter=".design">
          Design
        </span>
      </div>

      <div className="work__container container grid">
        <div className="work__card mix frontend backend">
          <img src="/assets/img/work1.jpg" alt="" className="work__img" />

          <h3 className="work_title">Chat App</h3>
          <a href="#" className="work__button">
            Demo <i className="bx bx-right-arrow-alt work__icon" />
          </a>
        </div>

        <div className="work__card mix frontend backend">
          <img src="/assets/img/work2.jpg" alt="" className="work__img" />

          <h3 className="work_title">Draw App</h3>
          <a href="#" className="work__button">
            Demo <i className="bx bx-right-arrow-alt work__icon" />
          </a>
        </div>

        <div className="work__card mix design">
          <img src="/assets/img/work3.jpg" alt="" className="work__img" />

          <h3 className="work_title">Brand design</h3>
          <a href="#" className="work__button">
            Demo <i className="bx bx-right-arrow-alt work__icon" />
          </a>
        </div>

        <div className="work__card mix frontend">
          <img src="/assets/img/work4.jpg" alt="" className="work__img" />

          <h3 className="work_title">Component Library</h3>
          <a href="#" className="work__button">
            Demo <i className="bx bx-right-arrow-alt work__icon" />
          </a>
        </div>

        <div className="work__card mix frontend backend">
          <img src="/assets/img/work5.jpg" alt="" className="work__img" />

          <h3 className="work_title">Social Media App</h3>
          <a href="#" className="work__button">
            Demo <i className="bx bx-right-arrow-alt work__icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Work;
