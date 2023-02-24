import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import Avatar from "../components/Avatar";
import Spinner from "../components/Spinner";

const Home: React.FC = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__data">
          <span className="home__greeting">Hello, I'm</span>
          <h1 className="home__name">Jordy Morales Roman</h1>
          <h3 className="home__education">Full-stack Developer</h3>

          <div className="home__buttons">
            <a
              download
              href="assets/pdf/Jordy-CV.pdf"
              className="button button--ghost"
            >
              Download CV
            </a>
            <a href="#contact" className="button">
              Let's talk
            </a>
          </div>
        </div>

        <div className="home__handle">
          <div className="home__avatar">
            <Suspense fallback={<Spinner />}>
              <Canvas
                camera={{ position: [2, 0, 12.25], fov: 15 }}
                // style={{ width: "100%", height: "750px" }}
              >
                <ambientLight intensity={0.5} />
                <pointLight position={[35, 35, 0]} intensity={0.4} />

                <Avatar position={[0, -0.1, 0]} />

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
            <i className="bx bxl-linkedin-square"></i>
          </a>
          <a
            href="https://github.com/2jsdev"
            target="_blank"
            className="home__social-link"
          >
            <i className="bx bxl-github"></i>
          </a>
          <a
            href="https://twitter.com/2jsdev"
            target="_blank"
            className="home__social-link"
          >
            <i className="bx bxl-twitter"></i>
          </a>
        </div>

        <a href="#about" className="home__scroll">
          <i className="bx bx-mouse home__scroll-icon"></i>
          <span className="home__scroll-name">Scroll Down</span>
        </a>
      </div>
    </section>
  );
};

export default Home;
