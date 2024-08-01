import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        codingwithnate.com
      </Link>
      <div className={styles.hamburger} onClick={toggleNav}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <nav className={`${styles.nav} ${isNavOpen ? styles.active : ""}`}>
        <Link to="/home" onClick={toggleNav}>
          Home
        </Link>
        <Link to="/about" onClick={toggleNav}>
          About
        </Link>
        <Link to="/projects" onClick={toggleNav}>
          Projects
        </Link>
        <Link to="/skills" onClick={toggleNav}>
          Skills
        </Link>
        <Link to="/contact" onClick={toggleNav}>
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
