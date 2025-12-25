import React, { useState, useRef, useEffect } from "react";
import "../styles/HomeResume.css";
import {
  FaGraduationCap,
  FaHistory,
  FaLaptopCode,
  FaProjectDiagram,
  FaPalette,
  FaLink,
} from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { projects } from "../data/projectsData.js";

const AnimatedItem = ({
  children,
  delay = 0,
  index,
  onMouseEnter,
  onClick,
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.5, triggerOnce: false });
  return (
    <motion.div
      ref={ref}
      data-index={index}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      initial={{ scale: 0.7, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.7, opacity: 0 }}
      transition={{ duration: 0.25, delay }}
      style={{ marginBottom: "1rem", cursor: "pointer" }}
    >
      {children}
    </motion.div>
  );
};

const AnimatedList = ({ items = [], showGradients = true }) => {
  const listRef = useRef(null);
  const [topGradientOpacity, setTopGradientOpacity] = useState(0);
  const [bottomGradientOpacity, setBottomGradientOpacity] = useState(1);

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    setTopGradientOpacity(Math.min(scrollTop / 50, 1));
    const bottomDistance = scrollHeight - (scrollTop + clientHeight);
    setBottomGradientOpacity(
      scrollHeight <= clientHeight ? 0 : Math.min(bottomDistance / 50, 1)
    );
  };

  return (
    <div className="scroll-list-container">
      <div className="scroll-list" ref={listRef} onScroll={handleScroll}>
        {items.map((project, index) => (
          <AnimatedItem key={index} delay={0.1 * index}>
            <div className="project-item">
              <div className="project-content">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <FaLink /> View
                </a>
              )}
            </div>
          </AnimatedItem>
        ))}
      </div>

      {showGradients && (
        <>
          <div
            className="top-gradient"
            style={{ opacity: topGradientOpacity }}
          ></div>
          <div
            className="bottom-gradient"
            style={{ opacity: bottomGradientOpacity }}
          ></div>
        </>
      )}
    </div>
  );
};

function HomeResume() {
  const [activeTab, setActiveTab] = useState("education");

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#skills") {
        setActiveTab("skills");
        document
          .getElementById("skills")
          ?.scrollIntoView({ behavior: "smooth" });
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const tabs = [
    { id: "education", icon: <FaGraduationCap />, label: "Education" },
    { id: "work", icon: <FaHistory />, label: "Work History" },
    { id: "skills", icon: <FaLaptopCode />, label: "Programming Skills" },
    { id: "projects", icon: <FaProjectDiagram />, label: "Projects" },
    { id: "interests", icon: <FaPalette />, label: "Interests" },
  ];

  const educationData = [
    {
      title: "IT School - Romania",
      subtitle: "Front-End Web Development",
      date: "2024 - 2025",
    },
    {
      title:
        "National University of Science and Technology Politehnica Bucharest",
      subtitle: "Master’s degree: Engineering Graphics and Design",
      date: "2021 - 2023",
    },
    {
      title:
        "National University of Science and Technology Politehnica Bucharest",
      subtitle:
        "Bachelor’s Degree: Applied Informatics in Electrical Engineering",
      date: "2016 - 2020",
    },
  ];

  const workData = [
    {
      title: "Full Stack Developer - Freelance",
      subtitle: "React, Typescript, Node.js, UI/UX, SQL",
      date: "Present",
    },
    {
      title: "Security Systems Design Engineer",
      subtitle: [
        "Designed integrated security systems",
        "Configured IP cameras and provided remote support",
        "Coordinated on-site teams and guided physical repairs",
        "Created detailed monthly reports and cost estimates",
      ],
      date: "2019 - 2025",
    },
  ];

  return (
    <section className="resume-section" id="resume">
      <h2 className="resume-title">Resume</h2>

      <div className="resume-container">
        <div className="resume-sidebar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`resume-tab ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="resume-content">
          {activeTab === "education" && (
            <div className="resume-items">
              {educationData.map((item, i) => (
                <div className="resume-item" key={i}>
                  <div className="resume-dot" />
                  <div className="resume-info">
                    <h3>{item.title}</h3>
                    <p>{item.subtitle}</p>
                  </div>
                  <div className="resume-date">{item.date}</div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "work" && (
            <div className="resume-items">
              {workData.map((item, i) => (
                <div className="resume-item" key={i}>
                  <div className="resume-dot" />
                  <div className="resume-info">
                    <h3>{item.title}</h3>
                    {Array.isArray(item.subtitle) ? (
                      <ul className="resume-list">
                        {item.subtitle.map((task, index) => (
                          <li key={index}>{task}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>{item.subtitle}</p>
                    )}
                  </div>
                  <div className="resume-date">{item.date}</div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "skills" && (
            <div className="skills-list" id="skills">
              <span>JavaScript (ES6+)</span>
              <span>TypeScript</span>
              <span>React.js</span>
              <span>Node.js</span>
              <span>Express</span>
              <span>MySQL</span>
              <span>PostgreSQL</span>
              <span>GitHub</span>
              <span>HTML5</span>
              <span>CSS3</span>
              <span>React Native</span>
              <span>Bootstrap</span>
              <span>DOM APIs</span>
              <span>Canva</span>
            </div>
          )}

          {activeTab === "projects" && <AnimatedList items={projects} />}

          {activeTab === "interests" && (
            <div className="resume-interests">
              <ul>
                <li>Building scalable and secure web applications ⚙️</li>
                <li>UI/UX design and modern frontend technologies 🎨</li>
                <li>Exploring AI tools for smarter workflows 🤖</li>
                <li>
                  Learning German 🇩🇪 and French 🇫🇷 while exploring European tech
                  culture
                </li>
                <li>Participating in tech communities and hackathons 💬</li>
                <li>Learning independently through online courses 🎓</li>
                <li>Watching theatre plays and movies 🎭🎬</li>
                <li>
                  Enjoying anime, manga, and story-driven video games 🎮📚
                </li>
                <li>Reading both fiction and tech literature 📖</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default HomeResume;
