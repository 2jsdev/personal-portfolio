import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import mixitup from "mixitup";
import "./Portfolio.css";

const ACTIVE_CLASS = "active-portfolio";

const Portfolio: React.FC = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: "Wookielink",
      image: "/assets/img/wookielink.png",
      githubLink: "https://github.com/2jsdev/wookielink",
      demoLink: "https://wookiel.ink/",
      filters: ["frontend", "backend"],
    },
    {
      title: "Draw App",
      image: "/assets/img/jdraw.avif",
      githubLink: "https://github.com/2jsdev/jdraw",
      demoLink: "https://jdraw.2jsdev.me/",
      filters: ["frontend"],
    },
    {
      title: "@2jsdev/icons",
      image: "/assets/img/icons.avif",
      githubLink: "https://github.com/2jsdev/icons",
      demoLink: "https://www.npmjs.com/package/@2jsdev/icons",
      filters: ["library"],
    },
    // {
    //   title: "Component Library",
    //   image: "/assets/img/work4.avif",
    //   githubLink: "#",
    //   demoLink: "#",
    //   filters: ["frontend", "library"],
    // },
    // {
    //   title: "Social Media App",
    //   image: "/assets/img/work5.avif",
    //   githubLink: "#",
    //   demoLink: "#",
    //   filters: ["frontend", "backend"],
    // },
  ];

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
        <span className="portfolio__item" data-filter=".library">
          {t("portfolio.filters.library")}
        </span>
        {/* <span className="portfolio__item" data-filter=".design">
          {t("portfolio.filters.design")}
        </span> */}
      </div>

      <div className="portfolio__container container grid">
        {projects.map((project, index) => (
          <div key={index} className={`portfolio__card mix ${project.filters.join(" ")}`}>
            <img src={project.image} alt={project.title} className="portfolio__img" />
            <h3 className="portfolio__title">{project.title}</h3>
            <div className="portfolio__buttons">
              <a href={project.githubLink} target="_blank" className="portfolio__button">
                GitHub
              </a>
              <a href={project.demoLink} target="_blank" className="portfolio__button portfolio__button-primary">
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
