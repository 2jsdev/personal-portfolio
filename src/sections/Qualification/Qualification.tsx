import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./Qualification.css";

const ACTIVE_CLASS = "qualification__active";

const Qualification: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const tabs = document.querySelectorAll("[data-target]");
    const tabContents = document.querySelectorAll("[data-content]");

    function activeQualification(this: any) {
      const target = document.querySelector(this.dataset.target);

      tabContents.forEach((tabContent) => {
        tabContent.classList.remove(ACTIVE_CLASS);
      });
      target.classList.add(ACTIVE_CLASS);

      tabs.forEach((tab) => {
        tab.classList.remove(ACTIVE_CLASS);
      });
      this.classList.add(ACTIVE_CLASS);
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
      <h2 className="section__title">{t("qualification.title")}</h2>
      <span className="section__subtitle">{t("qualification.subtitle")}</span>

      <div className="qualification__container container grid">
        <div className="qualification__tabs">
          <div
            className="qualification__button button-flex qualification__active"
            data-target="#work"
          >
            <i className="bx bx-briefcase-alt qualification__icon" />
            {t("qualification.tabs.work.title")}
          </div>
          <div
            className="qualification__button button-flex "
            data-target="#education"
          >
            <i className="bx bxs-graduation qualification__icon" />
            {t("qualification.tabs.education.title")}
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className="qualification__content qualification__active"
            data-content
            id="work"
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  {t("qualification.tabs.work.unosquare.title")}
                </h3>
                <span className="qualification__subtitle">
                  {t("qualification.tabs.work.unosquare.subtitle")}
                </span>
                <div className="qualification__calendar">
                  <i className="bx bxs-calendar" />
                  {t("qualification.tabs.work.unosquare.calendar")}
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
                <h3 className="qualification__title">
                  {t("qualification.tabs.work.nearshore.title")}
                </h3>
                <span className="qualification__subtitle">
                  {t("qualification.tabs.work.nearshore.subtitle")}
                </span>
                <div className="qualification__calendar">
                  <i className="bx bxs-calendar" />
                  {t("qualification.tabs.work.nearshore.calendar")}
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  {t("qualification.tabs.work.viva.title")}
                </h3>
                <span className="qualification__subtitle">
                  {t("qualification.tabs.work.viva.subtitle")}
                </span>
                <div className="qualification__calendar">
                  <i className="bx bxs-calendar" />
                  {t("qualification.tabs.work.viva.calendar")}
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
              </div>
            </div>
          </div>
          <div className="qualification__content " data-content id="education">
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  {t("qualification.tabs.education.university.title")}
                </h3>
                <span className="qualification__subtitle">
                  {t("qualification.tabs.education.university.subtitle")}
                </span>
                <div className="qualification__calendar">
                  <i className="bx bxs-calendar" />
                  {t("qualification.tabs.education.university.calendar")}
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
              </div>

              <div>
                <h3 className="qualification__title">
                  {t("qualification.tabs.education.institute.title")}
                </h3>
                <span className="qualification__subtitle">
                  {t("qualification.tabs.education.institute.subtitle")}
                </span>
                <div className="qualification__calendar">
                  <i className="bx bxs-calendar" />
                  {t("qualification.tabs.education.institute.calendar")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualification;
