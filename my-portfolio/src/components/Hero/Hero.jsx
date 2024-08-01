import React from "react";
import { Link } from "react-router-dom";
import styles from "./Hero.module.css";

const Hero = () => (
  <section
    id="home"
    className={styles.hero}
    style={{ backgroundImage: `url(/oregonCoast.jpg)` }}
  >
    <div className={styles.heroContent}>
      <h1>Hello, I'm Nate</h1>
      <p>Welcome to my portfolio website</p>
      <Link to="/projects" className={styles.ctaButton}>
        View My Work
      </Link>
    </div>
  </section>
);

export default Hero;
