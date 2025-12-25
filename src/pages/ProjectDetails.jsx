import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/ProjectDetails.css";
import { projects } from "../data/projectsData";
import ProjectCarousel from "../components/ProjectCarousel";
import { FaArrowRight } from "react-icons/fa";

function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return <p className="project-not-found">Project not found.</p>;
  }

  return (
    <section className="project-details-section">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>
      <ProjectCarousel images={project.images} />
      <div className="project-details-container">
        <div className="project-details-content">
          <h2>{project.title}</h2>
          <p className="project-details-description">{project.description}</p>
          <ul className="project-details-timeline">
            {project.details.map((item, index) => (
              <li key={index} className="timeline-item">
                {item}
              </li>
            ))}
          </ul>
          <div className="project-details-tech">
            {project.tech.map((t, i) => (
              <span key={i}>{t}</span>
            ))}
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="view-live-btn"
          >
            <span className="p-icon">
              <span className="p-dot" />
              <span className="p-arrow">
                <FaArrowRight />
              </span>
            </span>
            <span className="p-label">View Live Project</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetails;
