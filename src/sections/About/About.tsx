import React from "react";
import { useTranslation } from "react-i18next";
import { getYearsOfExperience } from "../../utils/experience";
import "./About.css";

const About: React.FC = () => {
  const { t } = useTranslation();
  const yearsOfExperience = getYearsOfExperience();

  return (
    <section className="about section" id="about">
      <h2 className="section__title">{t("about.title")}</h2>
      <span className="section__subtitle">{t("about.subtitle")}</span>
      <div className="about__container container grid">
        <img
          src="assets/img/profile.png"
          alt="Profile"
          className="about__img"
        />

        <div className="about__data">
          <div className="about__info">
            <div className="about__box">
              <i className="bx bx-award about__icon" />
              <h3 className="about__title">
                {t("about.info.experience.title")}
              </h3>
              <span className="about__subtitle">
                {t("about.info.experience.subtitle", { years: yearsOfExperience })}
              </span>
            </div>

            <div className="about__box">
              <i className="bx bx-check-circle about__icon" />
              <h3 className="about__title">{t("about.info.projects.title")}</h3>
              <span className="about__subtitle">
                {t("about.info.projects.subtitle")}
              </span>
            </div>

            <div className="about__box">
              <i className="bx bx-briefcase-alt about__icon" />

              <h3 className="about__title">
                {t("about.info.companies.title")}
              </h3>
              <span className="about__subtitle">
                {t("about.info.companies.subtitle")}
              </span>
            </div>
          </div>

          <p className="about__description">{t("about.description", { years: yearsOfExperience })}</p>

          <a href="#contact" className="button">
            {t("about.button")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
