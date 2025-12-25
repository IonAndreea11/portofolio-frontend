import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/HomeProjects.css";
import { projects } from "../data/projectsData";
import FlipCard from "./FlipCard";

function HomeProjects() {
  const navigate = useNavigate();

  return (
    <section className="home-projects-section" id="projects">
      <h2 className="home-projects-title">My Projects</h2>

      <div className="home-projects-grid">
        {projects.map((project) => (
          <div className="home-project-card" key={project.id}>
            <FlipCard
              back={
                <>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="home-project-tech">
                    {project.tech.map((t, i) => (
                      <span key={i}>{t}</span>
                    ))}
                  </div>

                  <button
                    className="home-project-plus"
                    onClick={() => navigate(`/projects/${project.id}`)}
                  >
                    View Project →
                  </button>
                </>
              }
            >
              <>
                <div className="home-project-image">
                  <img
                    src={project.images?.[0] ?? project.image}
                    alt={project.title}
                  />
                </div>

                <div className="home-project-content">
                  <h3>{project.title}</h3>
                </div>
              </>
            </FlipCard>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HomeProjects;
