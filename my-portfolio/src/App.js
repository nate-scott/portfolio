import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import "./App.css";


const projects = [
  {
    id: 1,
    title: "Gaming Vault",
    description: "Gaming website developed using Wordpress & PHP (Laravel)",
    image: "/gamingVaultLogo.png",
    link: "https://gamer.codingwithnate.com/",
  },
  {
    id: 2,
    title: "CPNW",
    description: "Healthcare website developed using React & Node.js",
    image: "/cpnwLogo.png",
    link: "https://cpnw.org/",
  },
  // Add new projects here
];

const skills = [
  { name: "Android Studio", proficiency: 80 },
  { name: "Azure DevOps", proficiency: 80 },
  { name: "Bootstrap", proficiency: 90 },
  { name: "CSS", proficiency: 90 },
  { name: "Express", proficiency: 90 },
  { name: "Flexbox", proficiency: 90 },
  { name: "Git", proficiency: 90 },
  { name: "HTML Legacy", proficiency: 80 },
  { name: "HTML5", proficiency: 90 },
  { name: "IntelliJ Idea", proficiency: 80 },
  { name: "JavaScript", proficiency: 90 },
  { name: "Kotlin", proficiency: 90 },
  { name: "Laravel", proficiency: 90 },
  { name: "MongoDB", proficiency: 80 },
  { name: "MySQL", proficiency: 80 },
  { name: "Node.js", proficiency: 90 },
  { name: "Nodemon", proficiency: 80 },
  { name: "NPM", proficiency: 90 },
  { name: "PHP", proficiency: 90 },
  { name: "PHPStorm", proficiency: 80 },
  { name: "Postman", proficiency: 90 },
  { name: "React", proficiency: 90 },
  { name: "Redux", proficiency: 80 },
  { name: "RESTful API", proficiency: 80 },
  { name: "SQL", proficiency: 80 },
  { name: "SQLite", proficiency: 80 },
  { name: "Storybook", proficiency: 80 },
  { name: "Swift", proficiency: 90 },
  { name: "Unit Testing", proficiency: 80 },
  { name: "VSCode", proficiency: 80 },
  // Add new skills here
];

const App = () => (
  <Router>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/home" element={<Hero />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Projects projects={projects} />} />
        <Route path="/skills" element={<Skills skills={skills} />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
      <Footer />
    </div>
  </Router>
);

export default App;
