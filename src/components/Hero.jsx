import React from "react";
import "../styles/Hero.css";
import heroImg from "../assets/images/picture.png";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-left">
        <div className="hero-image-container">
          <img
            src={heroImg}
            alt="Andreea Ion - Profile"
            className="hero-image-round"
          />
        </div>
      </div>

      <div className="hero-right">
        <h2>Hello!</h2>
        <h1>I'm Andreea</h1>
        <div className="hero-type-container">
          <TypeAnimation
            sequence={[
              "Full Stack Developer 💻",
              2000,
              "React & React Native Creator 📲",
              2000,
              "JavaScript Enthusiast ⚙️",
              2000,
              "Backend with Express.js & Node.js 🔧",
              2000,
              "Building Modern Web & Mobile Experiences 🌐",
              2000,
              "Designing Clean & Responsive Interfaces 🎨",
              2000,
              "Always Learning. Always Building. 💡",
              2000,
              "Lover of Code, Coffee & Creativity ☕",
              2000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "1.8rem", display: "inline-block" }}
            repeat={Infinity}
          />
        </div>
        <div className="hero-buttons">
          <a href="#contact" className="hero-btn hire-btn">
            Hire Me
          </a>
          <a
            href="https://drive.google.com/file/d/1VgfmdRs5npIN5lCPOBk5hr36VwoX7J22/view?usp=sharing"
            className="hero-btn resume-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
