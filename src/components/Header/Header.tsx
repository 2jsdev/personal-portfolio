import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../contexts/GlobalContext";
import LogoText from "../LogoText";
import NavMenu from "../NavMenu/NavMenu";
import Switch from "../Switch";
import "./Header.css";

const Header: React.FC = () => {
  const { theme, toggleTheme, locale, changeLocale } = useGlobalContext();
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    const position = window.pageYOffset;
    // If the current position is greater than or equal to 50, the scroll-header class is added to the header element, otherwise it is removed
    setScrolling(position >= 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("light-theme", theme === "light");
  }, [theme]);

  return (
    <header className={`header ${scrolling && "scroll-header"}`}>
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          <LogoText />
        </a>
        <NavMenu />
        <div className="settings">
          <Switch
            handleSwitch={(checked: boolean) =>
              changeLocale(checked ? "en-US" : "es-BO")
            }
            checkedChildren="EN"
            unCheckedChildren="ES"
            defaultChecked={locale === "en-US"}
          />

          <i
            onClick={() => toggleTheme()}
            className={`${theme === "light" ? "bx bx-moon" : "bx bx-sun"
              } change-theme`}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
