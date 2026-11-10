import { Link } from "react-router-dom";
import { profile } from "../data/portfolio.js";

export default function Home() {
  return (
    <section className="hero-section">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="availability">
            <span /> Terbuka untuk kesempatan baru
          </div>
          <p className="eyebrow">HALO, SELAMAT DATANG DI PORTFOLIO SAYA</p>
          <h1>
            Saya <span>{profile.name}</span>,<br />
            {profile.role}.
          </h1>
          <p className="hero-description">{profile.shortBio}</p>
          <div className="d-flex flex-wrap gap-3 mt-4">
            <Link to="/projects" className="btn btn-primary-custom">
              Lihat Project <i className="bi bi-arrow-up-right" />
            </Link>
            <Link to="/contact" className="btn btn-outline-custom">
              Hubungi Saya
            </Link>
          </div>
          <div className="social-line">
            <span>Temukan saya</span>
            <a href="https://github.com/aldaaprisagita/" target="_blank" rel="noreferrer" aria-label="GitHub">
              <i className="bi bi-github" />
            </a>
            <a href="https://www.instagram.com/aldaa.dwi/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <i className="bi bi-instagram" />
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="portrait-frame">
            <img src="public/images/aldadwi.jpg" alt="Foto profil contoh" loading="lazy" />
          </div>
          <div className="floating-note">
            <i className="bi bi-lightbulb" />
            <span>
              Always learning,
              <br />
              <strong>always creating.</strong>
            </span>
          </div>
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />
        </div>
      </div>
      <div className="container hero-bottom">
        <span>01 / 04</span>
        <span>
          SCROLL TO EXPLORE <i className="bi bi-arrow-down" />
        </span>
      </div>
    </section>
  );
}
