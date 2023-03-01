import React, { useState, createContext, useContext } from "react";
import i18n from "../i18n/config";

type Locale = "en-US" | "es-BO";

interface LocaleContextProps {
  locale: Locale;
  changeLocale: (locale: Locale) => void;
}

const defaultValues: LocaleContextProps = {
  locale: "en-US",
  changeLocale: (lng: Locale) => {},
};

export const LocaleContext = createContext<LocaleContextProps>(defaultValues);

export const LocaleProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [locale, setLocale] = useState<Locale>(i18n.language as Locale);

  const changeLocale = (lng: Locale) => {
    if (locale !== lng) {
      i18n.changeLanguage(lng);
      setLocale(lng);
    }
  };

  return (
    <LocaleContext.Provider
      value={{
        locale,
        changeLocale,
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
};

export function useLocale() {
  return useContext(LocaleContext);
}
