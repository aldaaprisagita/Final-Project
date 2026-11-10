import { useState } from "react";
import { profile } from "../data/portfolio.js";
import { validateContact } from "../utils/contactValidation.js";

const initialForm = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const validationErrors = validateContact(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setForm(initialForm);
    }
  }

  return (
    <section className="page-section contact-page">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">LET'S CONNECT</p>
          <h1>
            Mari mulai <span>percakapan.</span>
          </h1>
          <p className="section-lead">Silakan kirim pesan melalui formulir berikut.</p>
        </div>

        <div className="row g-5 mt-2">
          <div className="col-lg-5">
            <div className="contact-info-card">
              <h2>Informasi kontak</h2>
              <p>Gunakan informasi berikut untuk menghubungi saya.</p>

              <div className="contact-detail">
                <i className="bi bi-envelope" />
                <div>
                  <small>Email</small>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </div>
              </div>

              {/* Instagram */}
              <div className="contact-detail">
                <i className="bi bi-instagram" />
                <div>
                  <small>Instagram</small>
                  <a href="https://www.instagram.com/aldaa.dwi/" target="_blank" rel="noreferrer">
                    @aldaa.dwi
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div className="contact-detail">
                <i className="bi bi-github" />
                <div>
                  <small>GitHub</small>
                  <a href="https://github.com/aldaaprisagita/" target="_blank" rel="noreferrer">
                    aldaaprisagita
                  </a>
                </div>
              </div>

              <div className="contact-detail">
                <i className="bi bi-geo-alt" />
                <div>
                  <small>Lokasi</small>
                  <strong>{profile.location}</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <form className="contact-form card" onSubmit={handleSubmit} noValidate>
              <div className="card-body p-4 p-md-5">
                <h2>Kirim pesan</h2>
                <p className="form-intro">Kolom bertanda * wajib diisi.</p>

                {submitted && (
                  <div className="alert alert-success" role="status">
                    Validasi berhasil. Formulir contoh ini belum mengirim email sungguhan.
                  </div>
                )}

                <div className="mb-3">
                  <label className="form-label" htmlFor="name">
                    Nama *
                  </label>
                  <input id="name" name="name" className={`form-control ${errors.name ? "is-invalid" : ""}`} value={form.name} onChange={handleChange} placeholder="Nama lengkap" />
                  {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>

                <div className="mb-3">
                  <label className="form-label" htmlFor="email">
                    Email *
                  </label>
                  <input id="email" name="email" type="email" className={`form-control ${errors.email ? "is-invalid" : ""}`} value={form.email} onChange={handleChange} placeholder="nama@email.com" />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>

                <div className="mb-4">
                  <label className="form-label" htmlFor="message">
                    Pesan *
                  </label>
                  <textarea id="message" name="message" rows="5" className={`form-control ${errors.message ? "is-invalid" : ""}`} value={form.message} onChange={handleChange} placeholder="Tuliskan pesanmu (minimal 10 karakter)" />
                  {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                </div>

                <button className="btn btn-primary-custom w-100" type="submit">
                  Kirim pesan <i className="bi bi-send" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
