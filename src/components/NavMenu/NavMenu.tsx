import React, { useEffect, useState } from "react";
import "./NavMenu.css";

const NavMenu: React.FC = () => {
  const [activeLink, setActiveLink] = useState(
    localStorage.getItem("activeLink") || "#"
  );

  const handleSetActiveLink = () => {
    const sections: HTMLElement[] = Array.from(
      document.querySelectorAll("section[id]")
    );
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      const sectionTop = section.offsetTop - 58;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (
        window.pageYOffset >= sectionTop &&
        window.pageYOffset < sectionBottom
      ) {
        const sectionId = `#${section.id}`;
        setActiveLink(sectionId);
        localStorage.setItem("activeLink", sectionId);
        break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleSetActiveLink);

    return () => {
      window.removeEventListener("scroll", handleSetActiveLink);
    };
  }, []);

  return (
    <div className="nav__menu">
      <ul className="nav__list">
        <li className="nav_item">
          <a
            href="#home"
            className={`nav__link ${activeLink === "#home" && "active-link"}`}
          >
            <i className="bx bx-home-alt" />
          </a>
        </li>

        <li className="nav_item">
          <a
            href="#about"
            className={`nav__link ${activeLink === "#about" && "active-link"}`}
          >
            <i className="bx bx-user" />
          </a>
        </li>

        <li className="nav_item">
          <a
            href="#skills"
            className={`nav__link ${activeLink === "#skills" && "active-link"}`}
          >
            <i className="bx bx-book" />
          </a>
        </li>

        <li className="nav_item">
          <a
            href="#portfolio"
            className={`nav__link ${
              activeLink === "#portfolio" && "active-link"
            }`}
          >
            <i className="bx bx-briefcase-alt-2" />
          </a>
        </li>

        <li className="nav_item">
          <a
            href="#contact"
            className={`nav__link ${
              activeLink === "#contact" && "active-link"
            }`}
          >
            <i className="bx bx-message-square-detail" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavMenu;
