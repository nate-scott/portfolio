import React from "react";
import styles from "./AboutMe.module.css";
import { Link } from "react-router-dom";

const AboutMe = () => (
  <section id="about" className={styles.about}>
    <div className={styles.aboutContent}>
      <img
        src="/nateAvatar.jpg"
        alt="Nate Scott, in all his bearded glory"
        className={styles.aboutImage}
      />
      <div className={styles.aboutText}>
        <h2>About Me</h2>
        <p>
          I'm Nate, a dedicated software enthusiast who graduated summa cum
          laude with an AAS in Software Development from{" "}
          <a
            href="https://scc.spokane.edu/What-to-Study/Programs/Pathway-Course-Map?plan=Software%20Development"
            target="_blank"
            rel="noopener noreferrer"
          >
            Spokane Community College
          </a>
          !
        </p>
        <p>
          With a robust foundation as a highly skilled, data-driven program
          manager, I bring over 5 years of experience in transforming key
          business strategies into scalable deliveries. My commitment lies in
          adding substantial value to organizations and customers alike. I'm
          thrilled to channel my passion for problem-solving and innovation into
          the realm of software development. My aim is to contribute to
          groundbreaking projects that push the boundaries of what's possible.
        </p>
        <p>
          I have honed my skills in full-stack development. My toolkit includes
          proficiency in technologies such as PHP, Laravel, Kotlin, Swift,
          React, Node.js, JavaScript, Bootstrap, HTML5, CSS, SQL,{" "}
          <Link to="/skills">and more</Link>! Whether it's crafting seamless
          backend logic or creating captivating user interfaces, I thrive on
          bringing ideas to life through code.
        </p>
        <p>
          Eager to merge my project management expertise with the dynamic world
          of software development, I'm on a mission to leverage cutting-edge
          technologies. My goal is to craft exceptional products, services, and
          unforgettable customer experiences.
        </p>
        <p>My key strengths include:</p>
        <ul>
          <li>
            Problem Solver: I excel at developing upstream solutions to
            eliminate recurring issues at their roots.
          </li>
          <li>
            Adaptability: I rapidly adapt to emerging technologies to stay at
            the forefront of the ever-evolving tech landscape.
          </li>
          <li>
            Collaborative Spirit: I enjoy collaborating with cross-functional
            teams to drive projects from conception to successful delivery.
          </li>
        </ul>
        <p>
          I'm thrilled to channel my passion for problem-solving and innovation
          into the realm of software development. My aim is to contribute to
          groundbreaking projects that push the boundaries of what's possible.
        </p>
        <p>
          <Link to="/contact">Let's connect</Link> and explore how we can create
          something extraordinary together!
        </p>
      </div>
    </div>
  </section>
);

export default AboutMe;
