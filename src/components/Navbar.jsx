import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX, FiGithub } from "react-icons/fi";

function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <NavLink to="/" className="brand" onClick={closeMenu}>
          Dev<span className="brand-mark">Flow</span>
        </NavLink>

        <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <FiX /> : <FiMenu />}
        </button>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          <NavLink to="/" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/tools" onClick={closeMenu}>Tools</NavLink>
          <NavLink to="/about" onClick={closeMenu}>About</NavLink>
          <a
            className="nav-github"
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            <FiGithub /> GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
