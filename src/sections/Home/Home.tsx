import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "../../components/Model";
import Spinner from "../../components/Spinner";
import "./Home.css";

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__data">
          <span className="home__greeting">{t("home.greeting")}</span>
          <h1 className="home__name">{t("home.name")}</h1>
          <h3 className="home__education">{t("home.education")}</h3>

          <div className="home__buttons">
            <a
              download
              href="assets/pdf/Jordy-CV.pdf"
              className="button button--ghost"
            >
              {t("home.button.download")}
            </a>
            <a href="#contact" className="button">
              {t("home.button.talk")}
            </a>
          </div>
        </div>

        <div className="home__handle">
          <div className="home__avatar">
            <Suspense fallback={<Spinner />}>
              <Canvas camera={{ position: [2, 0, 12.25], fov: 16 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[35, 35, 0]} intensity={0.4} />

                <Model position={[0, 0, 0]} />

                <OrbitControls
                  enablePan={false}
                  enableZoom={false}
                  maxPolarAngle={Math.PI / 3}
                  minPolarAngle={Math.PI / 3}
                />
              </Canvas>
            </Suspense>
          </div>
        </div>

        <div className="home__social">
          <a
            href="https://www.linkedin.com/in/jordymorales/"
            target="_blank"
            className="home__social-link"
          >
            <i className="bx bxl-linkedin-square" />
          </a>
          <a
            href="https://github.com/2jsdev"
            target="_blank"
            className="home__social-link"
          >
            <i className="bx bxl-github" />
          </a>
          <a
            href="https://twitter.com/2jsdev"
            target="_blank"
            className="home__social-link"
          >
            <i className="bx bxl-twitter" />
          </a>
        </div>

        <a href="#about" className="home__scroll">
          <i className="bx bx-mouse home__scroll-icon" />
          <span className="home__scroll-name">{t("home.scroll_down")}</span>
        </a>
      </div>
    </section>
  );
};

export default Home;
