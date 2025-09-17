import React, { useEffect } from "react";
import ScrollReveal from 'scrollreveal'
import { useTranslation } from "react-i18next";
import { GlobalProvider } from './contexts/GlobalContext'
import { initializeClarity } from './config/clarity'

import Spinner from "./components/Spinner";
import Header from "./components/Header";

import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Qualification from "./sections/Qualification";
import Portfolio from "./sections/Portfolio";
import Contact from "./sections/Contact";

import Footer from "./components/Footer";

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});

const App: React.FC = () => {
  const { i18n } = useTranslation();
  const i18nInitialized = i18n.isInitialized;

  useEffect(() => {
    // Initialize Microsoft Clarity
    initializeClarity();

    sr.reveal(`.home__data`);
    sr.reveal(`.home__handle`, { delay: 700 });
    sr.reveal(`.home__social, .home__scroll`, { delay: 900, origin: "bottom" });
  }, []);

  useEffect(() => {
    const blob = document.getElementById("blob");
    document.body.onpointermove = (event) => {
      const { clientX, clientY } = event;
      if (blob) {
        blob.animate(
          {
            left: `${clientX}px`,
            top: `${clientY}px`,
          },
          { duration: 3000, fill: "forwards" }
        );
      }
    };
    return () => {
      document.body.onpointermove = null;
    };
  }, []);

  if (!i18nInitialized) return <Spinner />;

  return (
    <GlobalProvider>
      <Header />
      <main className="main">
        <div id="blob"></div>
        <div id="blur"></div>
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </GlobalProvider>
  )
}

export default App
