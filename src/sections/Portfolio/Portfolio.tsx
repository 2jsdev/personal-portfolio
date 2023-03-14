import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import mixitup from "mixitup";
import "./Portfolio.css";

const ACTIVE_CLASS = "active-portfolio";

const Portfolio: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const tabs = document.querySelectorAll(".portfolio__item");

    function activeWork(this: any) {
      tabs.forEach((tab) => tab.classList.remove(ACTIVE_CLASS));
      this.classList.add(ACTIVE_CLASS);
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
      <h2 className="section__title">{t("portfolio.title")}</h2>
      <span className="section__subtitle">{t("portfolio.subtitle")}</span>

      <div className="portfolio__filters">
        <span className="portfolio__item active-portfolio" data-filter="all">
          {t("portfolio.filters.all")}
        </span>
        <span className="portfolio__item" data-filter=".frontend">
          {t("portfolio.filters.frontend")}
        </span>
        <span className="portfolio__item" data-filter=".backend">
          {t("portfolio.filters.backend")}
        </span>
        <span className="portfolio__item" data-filter=".design">
          {t("portfolio.filters.design")}
        </span>
      </div>

      <div className="portfolio__container container grid">
        <div className="portfolio__card mix frontend backend">
          <img src="/assets/img/work1.avif" alt="" className="portfolio__img" />

          <h3 className="portfolio__title">Chat App</h3>
          <a href="#" className="portfolio__button">
            Demo <i className="bx bx-right-arrow-alt portfolio__icon" />
          </a>
        </div>

        <div className="portfolio__card mix frontend backend">
          <img src="/assets/img/work2.avif" alt="" className="portfolio__img" />

          <h3 className="portfolio__title">Draw App</h3>
          <a href="#" className="portfolio__button">
            Demo <i className="bx bx-right-arrow-alt portfolio__icon" />
          </a>
        </div>

        <div className="portfolio__card mix design">
          <img src="/assets/img/work3.avif" alt="" className="portfolio__img" />

          <h3 className="portfolio__title">Brand design</h3>
          <a href="#" className="portfolio__button">
            Demo <i className="bx bx-right-arrow-alt portfolio__icon" />
          </a>
        </div>

        <div className="portfolio__card mix frontend">
          <img src="/assets/img/work4.avif" alt="" className="portfolio__img" />

          <h3 className="portfolio__title">Component Library</h3>
          <a href="#" className="portfolio__button">
            Demo <i className="bx bx-right-arrow-alt portfolio__icon" />
          </a>
        </div>

        <div className="portfolio__card mix frontend backend">
          <img src="/assets/img/work5.avif" alt="" className="portfolio__img" />

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
