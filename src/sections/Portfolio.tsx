import React, { useEffect } from "react";
import mixitup from "mixitup";

const Portfolio: React.FC = () => {
  const activeClass = "active-portfolio";

  useEffect(() => {
    const tabs = document.querySelectorAll(".portfolio__item");

    function activeWork(this: any) {
      tabs.forEach((tab) => tab.classList.remove(activeClass));
      this.classList.add(activeClass);
    }

    tabs.forEach((tab) => tab.addEventListener("click", activeWork));

    return () => {
      tabs.forEach((tab) => tab.removeEventListener("click", activeWork));
    };
  }, []);

  useEffect(() => {
    const mixerPortfolio = mixitup(".portfolio__container", {
      selectors: {
        target: ".portfolio__card",
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
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most recent work</span>

      <div className="portfolio__filters">
        <span className="portfolio__item active-portfolio" data-filter="all">
          All
        </span>
        <span className="portfolio__item" data-filter=".frontend">
          Frontend
        </span>
        <span className="portfolio__item" data-filter=".backend">
          Backend
        </span>
        <span className="portfolio__item" data-filter=".design">
          Design
        </span>
      </div>

      <div className="portfolio__container container grid">
        <div className="portfolio__card mix frontend backend">
          <img src="/assets/img/work1.jpg" alt="" className="portfolio__img" />

          <h3 className="portfolio__title">Chat App</h3>
          <a href="#" className="portfolio__button">
            Demo <i className="bx bx-right-arrow-alt portfolio__icon" />
          </a>
        </div>

        <div className="portfolio__card mix frontend backend">
          <img src="/assets/img/work2.jpg" alt="" className="portfolio__img" />

          <h3 className="portfolio__title">Draw App</h3>
          <a href="#" className="portfolio__button">
            Demo <i className="bx bx-right-arrow-alt portfolio__icon" />
          </a>
        </div>

        <div className="portfolio__card mix design">
          <img src="/assets/img/work3.jpg" alt="" className="portfolio__img" />

          <h3 className="portfolio__title">Brand design</h3>
          <a href="#" className="portfolio__button">
            Demo <i className="bx bx-right-arrow-alt portfolio__icon" />
          </a>
        </div>

        <div className="portfolio__card mix frontend">
          <img src="/assets/img/work4.jpg" alt="" className="portfolio__img" />

          <h3 className="portfolio__title">Component Library</h3>
          <a href="#" className="portfolio__button">
            Demo <i className="bx bx-right-arrow-alt portfolio__icon" />
          </a>
        </div>

        <div className="portfolio__card mix frontend backend">
          <img src="/assets/img/work5.jpg" alt="" className="portfolio__img" />

          <h3 className="portfolio__title">Social Media App</h3>
          <a href="#" className="portfolio__button">
            Demo <i className="bx bx-right-arrow-alt portfolio__icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
