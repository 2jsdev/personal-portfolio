import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ThemeProvider } from "./context/ThemeContext";
import { LocaleProvider } from "./context/LocaleContext";
import ScrollReveal from 'scrollreveal'
import Header from "./components/Header";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Qualification from "./sections/Qualification";
import Portfolio from "./sections/Portfolio";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import Spinner from "./components/Spinner";

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});

const App: React.FC = () => {
  const { i18n } = useTranslation();
  const i18nInitialized = i18n.isInitialized;

  if (!i18nInitialized) return <Spinner />;

  useEffect(() => {
    sr.reveal(`.home__data`);
    sr.reveal(`.home__handle`, { delay: 700 });
    sr.reveal(`.home__social, .home__scroll`, { delay: 900, origin: "bottom" });
  }, []);

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
