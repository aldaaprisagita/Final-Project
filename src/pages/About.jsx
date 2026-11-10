import { profile } from "../data/portfolio.js";
import "../styles/about.css";

export default function About() {
  return (
    <section className="about-page page-section">
      <div className="container">
        <div className="about-heading">
          <p className="eyebrow">A LITTLE ABOUT ME</p>
          <h1>
            Kenali <span>saya.</span>
          </h1>
          <p className="section-lead">Perjalanan belajar, mengeksplorasi teknologi, dan mengembangkan berbagai ide menjadi sebuah karya.</p>
        </div>

        <div className="about-layout">
          <div className="about-photo-wrap">
            <img src="/images/aldadwi.jpg" alt="Alda Dwi Aprisagita" loading="lazy" />
            <div className="photo-caption">
              <i className="bi bi-geo-alt" /> {profile.location}
            </div>
          </div>

          <article className="about-content">
            <p className="eyebrow">HELLO, THERE!</p>
            <h2>Halo, saya Alda! 👋</h2>

            <p>
              Saya merupakan mahasiswa Teknik Informatika yang memiliki ketertarikan pada dunia teknologi, khususnya web development dan desain UI/UX. Saya senang mengeksplorasi ide, mencoba hal baru, dan mempelajari bagaimana sebuah
              website dapat dibuat menarik sekaligus nyaman digunakan.
            </p>

            <p>
              Selama menempuh perkuliahan, saya mulai mengembangkan kemampuan di bidang pemrograman dan pengembangan aplikasi web melalui berbagai latihan maupun project. Saya pernah menggunakan HTML, CSS, JavaScript, PHP, Laravel,
              CodeIgniter 3, dan MySQL dalam proses pengembangan aplikasi.
            </p>

            <p>
              Salah satu project yang pernah saya kerjakan adalah Sistem Informasi Manajemen Simpan-Pinjam. Dalam project ini, saya mengembangkan aplikasi berbasis web menggunakan Laravel dan MySQL, mulai dari perancangan database,
              pembuatan fitur transaksi tabungan, pinjaman, dan deposito.
            </p>

            <p>
              Saya masih terus belajar dan mengembangkan kemampuan, baik dalam coding maupun desain antarmuka. Bagi saya, setiap project adalah kesempatan untuk mencoba sesuatu yang baru, menghadapi tantangan, dan mendapatkan pengalaman
              yang bisa menjadi bekal untuk berkembang ke depannya.
            </p>

            <div className="about-facts">
              <div>
                <span>01</span>
                <strong>Always Learning</strong>
                <small>Senang mencoba hal baru</small>
              </div>
              <div>
                <span>02</span>
                <strong>Creative Thinking</strong>
                <small>Suka mengeksplorasi ide</small>
              </div>
            </div>
          </article>
        </div>

        <div className="skills-panel">
          <div>
            <p className="eyebrow">WHAT I WORK WITH</p>
            <h2>Tools & Technologies</h2>
          </div>

          <div className="skill-list">
            {profile.skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
