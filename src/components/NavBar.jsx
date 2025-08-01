import { useEffect, useState } from "react";
import { navLinks } from "../constants";
import { HiDownload } from "react-icons/hi";

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
              <HiDownload className="download-icon" size={16} />
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
