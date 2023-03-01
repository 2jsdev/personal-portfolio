import React from "react";
import { useTranslation } from "react-i18next";
import "./Skills.css";

const Skills: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">{t("skills.title")}</h2>
      <span className="section__subtitle">{t("skills.subtitle")}</span>

      <div className="skills__container container grid">
        <div className="skills__content">
          <h3 className="skills__title">{t("skills.frontend")}</h3>

          <div className="skills__box">
            <div className="skills__group">
              <div className="skills__data">
                <i className="bx bxs-badge-check" />
                <div>
                  <h3 className="skills__name">{t("skills.HTML")}</h3>
                  <span className="skills__level">
                    {t("skills.level.intermediate")}
                  </span>
                </div>
              </div>

              <div className="skills__data">
                <i className="bx bxs-badge-check" />
                <div>
                  <h3 className="skills__name">{t("skills.CSS")}</h3>
                  <span className="skills__level">
                    {t("skills.level.basic")}
                  </span>
                </div>
              </div>

              <div className="skills__data">
                <i className="bx bxs-badge-check" />
                <div>
                  <h3 className="skills__name">{t("skills.JavaScript")}</h3>
                  <span className="skills__level">
                    {t("skills.level.advanced")}
                  </span>
                </div>
              </div>
            </div>

            <div className="skills__group">
              <div className="skills__data">
                <i className="bx bxs-badge-check" />
                <div>
                  <h3 className="skills__name">{t("skills.React")}</h3>
                  <span className="skills__level">
                    {t("skills.level.advanced")}
                  </span>
                </div>
              </div>

              <div className="skills__data">
                <i className="bx bxs-badge-check" />
                <div>
                  <h3 className="skills__name">{t("skills.Git")}</h3>
                  <span className="skills__level">
                    {t("skills.level.intermediate")}
                  </span>
                </div>
              </div>

              <div className="skills__data">
                <i className="bx bxs-badge-check" />
                <div>
                  <h3 className="skills__name">{t("skills.TypeScript")}</h3>
                  <span className="skills__level">
                    {t("skills.level.intermediate")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="skills__content">
          <h3 className="skills__title">{t("skills.backend")}</h3>

          <div className="skills__box">
            <div className="skills__group">
              <div className="skills__data">
                <i className="bx bxs-badge-check" />
                <div>
                  <h3 className="skills__name">{t("skills.Node.js")}</h3>
                  <span className="skills__level">
                    {t("skills.level.advanced")}
                  </span>
                </div>
              </div>

              <div className="skills__data">
                <i className="bx bxs-badge-check" />
                <div>
                  <h3 className="skills__name">{t("skills.NestJS")}</h3>
                  <span className="skills__level">
                    {t("skills.level.basic")}
                  </span>
                </div>
              </div>

              <div className="skills__data">
                <i className="bx bxs-badge-check" />
                <div>
                  <h3 className="skills__name">{t("skills.Python")}</h3>
                  <span className="skills__level">
                    {t("skills.level.basic")}
                  </span>
                </div>
              </div>
            </div>

            <div className="skills__group">
              <div className="skills__data">
                <i className="bx bxs-badge-check" />
                <div>
                  <h3 className="skills__name">{t("skills.MySQL")}</h3>
                  <span className="skills__level">
                    {t("skills.level.basic")}
                  </span>
                </div>
              </div>

              <div className="skills__data">
                <i className="bx bxs-badge-check" />
                <div>
                  <h3 className="skills__name">{t("skills.PostgreSQL")}</h3>
                  <span className="skills__level">
                    {t("skills.level.intermediate")}
                  </span>
                </div>
              </div>

              <div className="skills__data">
                <i className="bx bxs-badge-check" />
                <div>
                  <h3 className="skills__name">{t("skills.MongoDB")}</h3>
                  <span className="skills__level">
                    {t("skills.level.advanced")}
                  </span>
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
