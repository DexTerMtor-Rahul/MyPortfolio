import { useEffect, useState } from "react";
import { navLinks } from "../constants";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a className="logo" href="#hero">
          DexTerMtor
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-buttons">
          <a
            href="/resume/Rahul_Raj_SDE.pdf"
            download="Rahul_Raj_Resume.pdf"
            className="resume-btn group"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="inner">
              <svg
                className="download-icon"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 16L16 12H13V4H11V12H8L12 16Z"
                  fill="currentColor"
                />
                <path d="M20 18H4V20H20V18Z" fill="currentColor" />
              </svg>
              <span>Resume</span>
            </div>
          </a>

          <a href="#contact" className="contact-btn group">
            <div className="inner">
              <span>Contact Me</span>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
