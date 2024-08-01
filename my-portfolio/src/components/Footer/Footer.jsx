import React from "react";
import styles from "./Footer.module.css";

const Footer = () => (
  <footer className={styles.footer}>
    <p>© {new Date().getFullYear()} Nate Scott. All rights reserved.</p>
    <div className={styles.socialLinks}>
      <a
        href="https://www.linkedin.com/in/natevscott/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
      <a
        href="https://github.com/nate-scott"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    </div>
  </footer>
);

export default Footer;
