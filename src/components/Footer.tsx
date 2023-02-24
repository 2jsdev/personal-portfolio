import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Jordy</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>
          <li>
            <a href="#work" className="footer__link">
              Projects
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
      </div>
    </footer>
  );
};

export default Footer;
