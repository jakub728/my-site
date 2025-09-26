import "./OutletCSS.scss";

import {
  FaReact,
  FaHtml5,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaCss3Alt,
  FaSass,
  FaNpm,
  FaUnity,
} from "react-icons/fa";
import {
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiVite,
  SiPostman,
  SiJsonwebtokens,
  SiSocketdotio,
  SiJavascript,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiFigma,
  SiCanva,
  SiBlender,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

import { useState, useEffect, useRef } from "react";

const skillsData = {
  frontend: [
    { name: "React", level: 4, icon: <FaReact color="#61DAFB" /> },
    { name: "JavaScript", level: 4, icon: <SiJavascript color="#F7DF1E" /> },
    { name: "TypeScript", level: 2, icon: <SiTypescript color="#3178C6" /> },
    { name: "HTML", level: 5, icon: <FaHtml5 color="#E34F26" /> },
    { name: "CSS", level: 5, icon: <FaCss3Alt color="#264DE4" /> },
    { name: "SASS", level: 4, icon: <FaSass color="#CD6799" /> },
  ],
  backend: [
    { name: "Node.js", level: 4, icon: <FaNodeJs color="#3C873A" /> },
    { name: "Express.js", level: 4, icon: <SiExpress color="#000" /> },
    { name: "MongoDB", level: 4, icon: <SiMongodb color="#47A248" /> },
    { name: "REST API", level: 4, icon: <SiPostman color="#FF6C37" /> },
    { name: "WebSockets", level: 3, icon: <SiSocketdotio color="#010101" /> },
    { name: "JWT Auth", level: 3, icon: <SiJsonwebtokens color="#000" /> },
  ],
  tools: [
    { name: "Git", level: 4, icon: <FaGitAlt color="#F1502F" /> },
    { name: "GitHub", level: 5, icon: <FaGithub color="#181717" /> },
    { name: "npm", level: 5, icon: <FaNpm color="#CB3837" /> },
    { name: "Vite", level: 4, icon: <SiVite color="#646CFF" /> },
    { name: "VS Code", level: 5, icon: <VscVscode color="#007ACC" /> },
    { name: "Postman", level: 4, icon: <SiPostman color="#FF6C37" /> },
  ],
  other: [
    { name: "Photoshop", level: 4, icon: <SiAdobephotoshop color="#31A8FF" /> },
    {
      name: "PremierePro",
      level: 3,
      icon: <SiAdobepremierepro color="#9999FF" />,
    },
    { name: "Figma", level: 3, icon: <SiFigma color="#F24E1E" /> },
    { name: "Canva", level: 3, icon: <SiCanva color="#00C4CC" /> },
    { name: "Blender", level: 1, icon: <SiBlender color="#F5792A" /> },
    { name: "Unity", level: 1, icon: <FaUnity color="#000000" /> },
  ],
};

const renderStars = (level) => {
  const stars = "⭐️".repeat(level) + "☆".repeat(5 - level);
  return <span className="stars">{stars}</span>;
};

const SkillItem = ({ skill, delay }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <li
      ref={ref}
      className={`skill-item ${visible ? "visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className="skill-icon">{skill.icon}</span>
      <span className="skill-name">{skill.name}</span>
      {renderStars(skill.level)}
    </li>
  );
};

const SkillsColumn = ({ title, skills, indexOffset = 0 }) => (
  <div className="skills-column">
    <ul>
      {skills.map((skill, idx) => (
        <SkillItem
          key={skill.name}
          skill={skill}
          delay={(indexOffset + idx) * 100}
        />
      ))}
    </ul>
    <h2>{title}</h2>
  </div>
);

const Skills = () => {
  return (
    <div className="skills-wrapper">
      <h1>🛠️ Skills</h1>
      <SkillsColumn
        title="💻 Frontend"
        skills={skillsData.frontend}
        indexOffset={0}
      />
      <SkillsColumn
        title="⚙️ Backend"
        skills={skillsData.backend}
        indexOffset={skillsData.frontend.length}
      />
      <SkillsColumn
        title="🧰 Tools"
        skills={skillsData.tools}
        indexOffset={skillsData.frontend.length + skillsData.backend.length}
      />
      <SkillsColumn
        title="📚 Other"
        skills={skillsData.other}
        indexOffset={
          skillsData.frontend.length +
          skillsData.backend.length +
          skillsData.tools.length
        }
      />
    </div>
  );
};

export default Skills;
