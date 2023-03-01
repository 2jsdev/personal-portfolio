import React from "react";
import { useTranslation } from "react-i18next";
import "./Footer.css";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">{t("footer.name")}</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              {t("footer.about")}
            </a>
          </li>
          <li>
            <a href="#skills" className="footer__link">
              {t("footer.skills")}
            </a>
          </li>
          <li>
            <a href="#work" className="footer__link">
              {t("footer.projects")}
            </a>
          </li>
        </ul>

        <ul className="footer__social">
          <a
            href="https://www.facebook.com/profile.php?id=100053618656168"
            target="_blank"
            className="footer__social-link"
          >
            <i className="bx bxl-facebook" />
          </a>
          <a
            href="https://twitter.com/2jsdev"
            target="_blank"
            className="footer__social-link"
          >
            <i className="bx bxl-twitter" />
          </a>
        </ul>
        <div className="custom-shape-divider-top-1677679359">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
