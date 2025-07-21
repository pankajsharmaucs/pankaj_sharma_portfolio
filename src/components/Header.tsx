import { Link } from 'react-router-dom';

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-light shadow-sm sticky-top">
    <div className="container-fluid px-4">
      <Link to="/" className="navbar-brand fw-bold fs-4">Pankaj Sharma</Link>
      
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav gap-2">
          <li className="nav-item">
            <Link to="/about" className="nav-link text-dark px-3">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-link text-dark px-3">Projects</Link>
          </li>
          <li className="nav-item">
            <Link to="/skills" className="nav-link text-dark px-3">Skills</Link>
          </li>
          <li className="nav-item">
            <Link to="/resume" className="nav-link text-dark px-3">Resume</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link btn btn-outline-light btn-sm px-3">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;
