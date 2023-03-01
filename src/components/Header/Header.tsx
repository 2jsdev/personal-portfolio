import React, { useContext, useEffect, useState } from "react";
import { useLocale } from "../../context/LocaleContext";
import { ThemeContext } from "../../context/ThemeContext";
import LogoText from "../LogoText";
import NavMenu from "../NavMenu/NavMenu";
import Switch from "../Switch";
import "./Header.css";

const Header: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { locale, changeLocale } = useLocale();
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
        <a href="#" className="nav__logo">
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
            className={`${
              theme === "light" ? "bx bx-sun" : "bx bx-moon"
            } change-theme`}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
