import React, { useEffect } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header";
import Home from "./sections/Home";
import About from "./sections/About";
import Work from "./sections/Work";
import Contact from "./sections/Contact";
import Skills from "./sections/Skills";
import Footer from "./components/Footer";
import ScrollReveal from "scrollreveal";

const App: React.FC = () => {
  const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400,
  });

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
      <Work />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
