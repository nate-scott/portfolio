import React from "react";
import styles from "./Projects.module.css";

const Projects = ({ projects }) => (
  <section id="projects" className={styles.projects}>
    <div className={styles.projectsContent}>
      <h2>Projects</h2>
      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <img
              src={project.image}
              alt={project.title}
              className={styles.projectImage}
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
    <div className={styles.link}>
      <p>
        Visit my{" "}
        <a
          href="https://github.com/nate-scott"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{" "}
        to see my code!
      </p>
    </div>
  </section>
);

export default Projects;
