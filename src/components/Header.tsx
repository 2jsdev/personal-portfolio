import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import LogoText from "./LogoText";

const Header: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [scrolling, setScrolling] = useState(false);
  const [activeLink, setActiveLink] = useState(
    localStorage.getItem("activeLink") || "#home"
  );

  const handleScroll = () => {
    const position = window.pageYOffset;

    // Si la posición actual es mayor o igual a 50, se añade la clase scroll-header al elemento header, de lo contrario se quita
    setScrolling(position >= 50);
  };

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
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleSetActiveLink);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleSetActiveLink);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("light-theme", theme === "light");
  }, [theme]);

  return (
    <header className={`header ${scrolling ? "scroll-header" : ""}`}>
      <nav className="nav container">
        <a href="#" className="nav__logo">
          <LogoText />
        </a>

        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav_item">
              <a
                href="#home"
                className={`nav__link ${
                  activeLink === "#home" && "active-link"
                }`}
              >
                <i className="bx bx-home-alt" />
              </a>
            </li>

            <li className="nav_item">
              <a
                href="#about"
                className={`nav__link ${
                  activeLink === "#about" && "active-link"
                }`}
              >
                <i className="bx bx-user" />
              </a>
            </li>

            <li className="nav_item">
              <a
                href="#skills"
                className={`nav__link ${
                  activeLink === "#skills" && "active-link"
                }`}
              >
                <i className="bx bx-book" />
              </a>
            </li>

            <li className="nav_item">
              <a
                href="#work"
                className={`nav__link ${
                  activeLink === "#work" && "active-link"
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
        {/* Theme change button */}
        <i
          onClick={() => toggleTheme()}
          className={`${
            theme === "light" ? "bx bx-sun" : "bx bx-moon"
          } change-theme`}
        />
      </nav>
    </header>
  );
};

export default Header;
