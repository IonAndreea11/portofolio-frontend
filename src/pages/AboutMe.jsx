import "../styles/AboutMe.css";
import myPhoto from "../assets/images/picture.png";
import { useNavigate } from "react-router-dom";
import TiltedCard from "../components/TiltedCard";
import {
  FaReact,
  FaPalette,
  FaMapMarkerAlt,
  FaArrowRight,
  FaLinkedin,
} from "react-icons/fa";
import "../styles/Button.css";
import LightPillar from "../components/Background";

function AboutMe() {
  const navigate = useNavigate();

  const handleContactClick = () => {
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document
          .getElementById("contact")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 400);
    } else {
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isMobile = window.matchMedia("(pointer: coarse)").matches;

  return (
    <section className="about-page" id="about">
      {!isMobile && (
        <LightPillar
          topColor="#1e1e2f"
          bottomColor="#00b4d8"
          intensity={1}
          rotationSpeed={0.15}
          interactive={false}
          glowAmount={0.004}
          pillarWidth={2.5}
          pillarHeight={0.5}
          noiseIntensity={0.4}
          mixBlendMode="screen"
          pillarRotation={25}
          className="about-light-bg"
        />
      )}
      <div className="about-container">
        <section>
          <div className="about-text">
            <h2 className="about-title">About Me</h2>
            <p className="about-subtitle">Who am I?</p>

            <p className="about-description">
              Hello! I'm <span className="highlight">Andreea Ion</span>, a
              passionate
              <span className="highlight"> Full Stack Developer</span> who loves
              turning creative ideas into real digital experiences. I enjoy
              building intuitive, fast, and visually appealing applications
              using modern technologies like
              <span className="highlight"> React</span>,{" "}
              <span className="highlight"> Tailwind CSS</span>, and
              <span className="highlight"> Node.js</span>. I'm also fascinated
              by <span className="highlight">UI/UX design</span> and how
              thoughtful interfaces can improve user interaction.
            </p>

            <p className="about-description">
              Before stepping fully into software development, I worked as an
              <span className="highlight"> Engineer</span> for six years, where
              I designed and implemented integrated security systems including
              CCTV, access control, and fire detection solutions. My role helped
              me develop a structured approach to problem-solving, teamwork, and
              project coordination. Managing both technical configurations and
              on-site teams taught me adaptability and the ability to learn
              across multiple disciplines, skills that now enhance my work as a
              developer.
            </p>

            <p className="about-description">
              My passion for coding started back in high school, where I
              discovered the excitement of building things from scratch. Outside
              of coding, I love <span className="highlight">theatre</span>,
              reading both <span className="highlight">books</span> and
              <span className="highlight"> manga</span>, watching{" "}
              <span className="highlight">anime</span>, and playing
              <span className="highlight"> video games</span>. These hobbies
              fuel my creativity and inspire me to bring storytelling and
              emotion into the digital experiences I create.
            </p>

            <button
              onClick={handleContactClick}
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
              <span className="p-label">Get in touch</span>
            </button>
          </div>
        </section>

        <section>
          <TiltedCard
            imageSrc={myPhoto}
            altText="Andreea Ion"
            containerHeight="360px"
            containerWidth="320px"
            imageHeight="320px"
            imageWidth="320px"
            rotateAmplitude={8}
            scaleOnHover={1.06}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={false}
          />

          <div className="about-card-info">
            <h3>Andreea Ion</h3>
            <span className="about-role">Full Stack Developer</span>
            <a
              href="https://www.linkedin.com/in/ion-andreea-elena-125721179/"
              target="_blank"
              rel="noopener noreferrer"
              className="about-linkedin"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
            <ul className="about-highlights">
              <li>
                <FaReact className="about-icon" />
                React / Node.js
              </li>
              <li>
                <FaPalette className="about-icon" />
                UI / UX Focus
              </li>
              <li>
                <FaMapMarkerAlt className="about-icon" />
                Berlin
              </li>
            </ul>
          </div>
        </section>
      </div>
    </section>
  );
}

export default AboutMe;
