import React from "react";
import styles from "./Skills.module.css";

const Skills = ({ skills }) => (
  <section id="skills" className={styles.skills}>
    <h2>Skills</h2>
    <div className={styles.skillsList}>
      {skills.map((skill) => (
        <div key={skill.name} className={styles.skill}>
          <span className={styles.skillName}>{skill.name}</span>
          <div className={styles.progressBarContainer}>
            <div
              className={styles.progressBar}
              style={{ width: `${skill.proficiency}%` }}
            >
              <span className={styles.proficiency}></span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
