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
import { useLocation } from "react-router-dom";

const AnimatedItem = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.5, triggerOnce: false });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.7, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.25, delay }}
      style={{ marginBottom: "1rem" }}
    >
      {children}
    </motion.div>
  );
};

const AnimatedList = ({ items = [] }) => {
  return (
    <div className="scroll-list-container">
      <div className="scroll-list">
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
    </div>
  );
};

function HomeResume() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("education");

  const educationData = [
    {
      title: "IT School – Romania",
      subtitle: "Front-End Web Development",
      date: "2024 – 2025",
    },
    {
      title:
        "National University of Science and Technology Politehnica Bucharest",
      subtitle: "Master’s Degree – Engineering Graphics and Design",
      date: "2021 – 2023",
    },
    {
      title:
        "National University of Science and Technology Politehnica Bucharest",
      subtitle:
        "Bachelor’s Degree – Applied Informatics in Electrical Engineering",
      date: "2016 – 2020",
    },
  ];

  const workData = [
    {
      title: "Full Stack Developer – Freelance",
      subtitle: [
        "Developed full-stack web applications using React, TypeScript, Node.js, and SQL",
        "Designed responsive and user-friendly interfaces with a strong focus on UI/UX",
        "Built REST APIs and handled database logic",
        "Worked independently on end-to-end projects from concept to deployment",
      ],
      date: "2024 – Present",
    },
    {
      title: "Security Systems Design Engineer",
      subtitle: [
        "Designed and implemented integrated security systems (CCTV, access control, fire detection)",
        "Configured IP cameras and provided remote technical support",
        "Coordinated on-site technical teams and supervised system installations",
        "Prepared technical documentation, cost estimates, and monthly reports",
      ],
      date: "2019 – 2025",
    },
  ];

  // useEffect(() => {
  //   if (location.state?.tab) {
  //     setActiveTab(location.state.tab);

  //     requestAnimationFrame(() => {
  //       document
  //         .getElementById(location.state.tab)
  //         ?.scrollIntoView({ behavior: "smooth", block: "start" });
  //     });
  //   }
  // }, [location.state]);

  useEffect(() => {
    if (location.state?.tab === "skills") {
      setActiveTab("skills");

      requestAnimationFrame(() => {
        const el = document.getElementById("skills");
        if (!el) return;

        const yOffset = -200;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({
          top: y,
          behavior: "smooth",
        });
      });
    }
  }, [location.state]);

  const tabs = [
    { id: "education", icon: <FaGraduationCap />, label: "Education" },
    { id: "work", icon: <FaHistory />, label: "Work History" },
    { id: "skills", icon: <FaLaptopCode />, label: "Programming Skills" },
    { id: "projects", icon: <FaProjectDiagram />, label: "Projects" },
    { id: "interests", icon: <FaPalette />, label: "Interests" },
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

          <div id="skills">
            {activeTab === "skills" && (
              <div className="skills-list">
                <span>JavaScript (ES6+)</span>
                <span>TypeScript</span>
                <span>React.js</span>
                <span>React Native</span>
                <span>Node.js</span>
                <span>Express.js</span>
                <span>REST APIs</span>
                <span>PostgreSQL</span>
                <span>MySQL</span>
                <span>HTML5</span>
                <span>CSS3</span>
                <span>Bootstrap</span>
                <span>Tailwind CSS</span>
                <span>Git & GitHub</span>
                <span>DOM APIs</span>
                <span>UI / UX Design</span>
                <span>Canva</span>
              </div>
            )}
          </div>

          {activeTab === "projects" && <AnimatedList items={projects} />}

          {activeTab === "interests" && (
            <div className="resume-interests">
              <ul>
                <li>UI/UX design 🎨</li>
                <li>Modern frontend ⚛️</li>
                <li>Anime & games 🎮</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default HomeResume;
