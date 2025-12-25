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


  const goToSection = (hash) => {
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        if (hash === "#skills") {
          window.location.hash = "skills";
          window.dispatchEvent(new HashChangeEvent("hashchange"));
        } else if (hash === "#contact") {
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        }
      }, 400);
    } else {
      if (hash === "#skills") {
        window.location.hash = "skills";
        window.dispatchEvent(new HashChangeEvent("hashchange"));
      } else if (hash === "#contact") {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      }
    }
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
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}
      </header>

      {!isMobile && (
        <ul className="nav-desktop">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Me</a></li>
          <li>
            <a
              href="#skills"
              onClick={(e) => {
                e.preventDefault();
                goToSection("#skills");
              }}
            >
              Skills
            </a>
          </li>
          <li><a href="#projects">Projects</a></li>
          <li>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                goToSection("#contact");
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      )}

      {isMobile && (
        <nav 
        ref={menuRef}
        className={`nav-drill ${menuOpen ? "nav-is-toggled" : ""}`}>
          <ul className="nav-items nav-level-1">
            <li className="nav-item">
              <a
                href="/"
                className="portofolio-nav-link"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </a>
            </li>

            <li className="nav-item">
              <a
                href="/about"
                className="portofolio-nav-link"
                onClick={() => setMenuOpen(false)}
              >
                About Me
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#skills"
                className="portofolio-nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  goToSection("#skills");
                  setMenuOpen(false);
                }}
              >
                Skills
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#projects"
                className="portofolio-nav-link"
                onClick={() => setMenuOpen(false)}
              >
                Projects
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#contact"
                className="portofolio-nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  goToSection("#contact");
                  setMenuOpen(false);
                }}
              >
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
