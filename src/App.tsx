import React, { useEffect } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header";
import Home from "./sections/Home";
import About from "./sections/About";
import Portfolio from "./sections/Portfolio";
import Contact from "./sections/Contact";
import Skills from "./sections/Skills";
import Footer from "./components/Footer";
import ScrollReveal from "scrollreveal";
import Qualification from "./sections/Qualification";

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});

const App: React.FC = () => {
  useEffect(() => {
    sr.reveal(`.home__data`);
    sr.reveal(`.home__handle`, { delay: 700 });
    sr.reveal(`.home__social, .home__scroll`, { delay: 900, origin: "bottom" });
  }, []);

  return (
    <ThemeProvider>
      <Header />
      <Home />
      <About />
      <Skills />
      <Qualification />
      <Portfolio />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
