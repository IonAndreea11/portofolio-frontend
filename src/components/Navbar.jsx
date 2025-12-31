import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const navigate = useNavigate();
  const menuRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile || !menuOpen) return;

    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobile, menuOpen]);

  const goHome = (e) => {
    e.preventDefault();
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToSkills = (e) => {
    e.preventDefault();
    navigate("/", { state: { tab: "skills" } });
    setMenuOpen(false);
  };

  const goToContact = (e) => {
    e.preventDefault();

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

    setMenuOpen(false);
  };

  return (
    <>
      <header className="nav-top">
        <div className="navbar-logo">Ion Andreea</div>

        {isMobile && (
          <div
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </div>
        )}
      </header>

      {!isMobile && (
        <ul className="nav-desktop">
          <li>
            <a href="/" onClick={goHome}>
              Home
            </a>
          </li>
          <li>
            <a href="/about">About Me</a>
          </li>
          <li>
            <a href="/" onClick={goToSkills}>
              Skills
            </a>
          </li>
          <li>
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                navigate("/", { state: { scrollTo: "projects" } });
              }}
            >
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={goToContact}>
              Contact
            </a>
          </li>
        </ul>
      )}

      {isMobile && (
        <nav
          ref={menuRef}
          className={`nav-drill ${menuOpen ? "nav-is-toggled" : ""}`}
        >
          <ul className="nav-items nav-level-1">
            <li className="nav-item">
              <a href="/" onClick={goHome}>
                Home
              </a>
            </li>

            <li className="nav-item">
              <a href="/about" onClick={() => setMenuOpen(false)}>
                About Me
              </a>
            </li>

            <li className="nav-item">
              <a href="/" onClick={goToSkills}>
                Skills
              </a>
            </li>

            <li className="nav-item">
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/", { state: { scrollTo: "projects" } });
                }}
              >
                Projects
              </a>
            </li>

            <li className="nav-item">
              <a href="#contact" onClick={goToContact}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}

export default Navbar;
