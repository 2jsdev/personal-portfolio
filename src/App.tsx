import React from "react";
import { useTranslation } from "react-i18next";
import { ThemeProvider } from "./context/ThemeContext";
import { LocaleProvider } from "./context/LocaleContext";
import Header from "./components/Header";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Qualification from "./sections/Qualification";
import Portfolio from "./sections/Portfolio";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import Spinner from "./components/Spinner";

const App: React.FC = () => {
  const { i18n } = useTranslation();
  const i18nInitialized = i18n.isInitialized;

  if (!i18nInitialized) return <Spinner />;

  return (
    <ThemeProvider>
      <LocaleProvider>
        <Header />
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Portfolio />
        <Contact />
        <Footer />
      </LocaleProvider>
    </ThemeProvider>
  );
};

export default App;
