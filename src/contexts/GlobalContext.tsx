import React, { useState, createContext, useContext, useEffect } from "react";
import i18n from "../i18n/config";

type Locale = "en-US" | "es-BO";

interface GlobalContextProps {
  locale: Locale;
  changeLocale: (locale: Locale) => void;
  theme: string;
  toggleTheme: () => void;
}

const GlobalContext = createContext<GlobalContextProps>({
  locale: "en-US",
  changeLocale: (_locale: Locale) => {},
  theme: "dark",
  toggleTheme: () => {},
});

export const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [locale, setLocale] = useState<Locale>(i18n.language as Locale);
  const [theme, setTheme] = useState<string>(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? storedTheme : "dark";
  });

  const changeLocale = (lng: Locale) => {
    if (locale !== lng) {
      void i18n.changeLanguage(lng);
      setLocale(lng);
    }
  };

  const toggleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const globalContextValue: GlobalContextProps = {
    locale,
    changeLocale,
    theme,
    toggleTheme,
  };

  return (
    <GlobalContext.Provider value={globalContextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export function useGlobalContext() {
  return useContext(GlobalContext);
}
