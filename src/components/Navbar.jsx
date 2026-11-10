import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar({ darkMode, onToggleTheme }) {
  return (
    <nav className="navbar navbar-expand-lg site-navbar sticky-top">
      <div className="container">
        <NavLink className="navbar-brand brand-mark" to="/">portfolio<span>.</span></NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#portfolioNav" aria-controls="portfolioNav" aria-expanded="false"
          aria-label="Buka navigasi">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="portfolioNav">
          <div className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.end}
                className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
                {link.label}
              </NavLink>
            ))}
            <button className="theme-toggle ms-lg-2" onClick={onToggleTheme}
              aria-label={darkMode ? "Aktifkan mode terang" : "Aktifkan mode gelap"}>
              <i className={`bi ${darkMode ? "bi-sun" : "bi-moon-stars"}`} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}