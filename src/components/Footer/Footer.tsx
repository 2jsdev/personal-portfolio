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
          <a
            href="https://www.instagram.com/2jsdev/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-link"
          >
            <i className="bx bxl-instagram" />
          </a>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
