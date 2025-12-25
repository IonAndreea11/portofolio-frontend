import { useState } from "react";
import "../styles/ProjectCarousel.css";

function ProjectCarousel({ images }) {
  const [current, setCurrent] = useState(0);

  if (!images || images.length === 0) return null;

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="project-carousel">
      <div className="carousel-window">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((img, index) => (
            <div
              className={`carousel-slide ${index === current ? "active" : ""}`}
              key={index}
            >
              <img src={img} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="carousel-controls">
        <button onClick={prevSlide} aria-label="Previous slide">
          ‹
        </button>
        <button onClick={nextSlide} aria-label="Next slide">
          ›
        </button>
      </div>
    </div>
  );
}

export default ProjectCarousel;
