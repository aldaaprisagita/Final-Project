import { projects } from "../data/portfolio.js";

export default function Projects() {
  return (
    <section className="page-section projects-page">
      <div className="container">
        <div className="section-heading text-center">
          <p className="eyebrow">APA YANG SUDAH SAYA KERJAKAN</p>
          <h1>
            Project <span>pilihan.</span>
          </h1>
          <p className="section-lead mx-auto">Beberapa karya dan latihan yang menggambarkan proses belajar saya.</p>
        </div>
        <div className="row g-4 mt-3">
          {projects.map((project, index) => (
            <div className="col-md-6 col-lg-4" key={project.title}>
              <article className="card project-card h-100">
                <div className="project-image-wrap">
                  <img src={project.image} className="card-img-top" alt={`Preview ${project.title}`} loading="lazy" />
                  <span className="project-number">0{index + 1}</span>
                </div>
                <div className="card-body d-flex flex-column">
                  <span className="project-category">{project.category}</span>
                  <h2 className="card-title">{project.title}</h2>
                  <p className="card-text">{project.description}</p>
                  <div className="tech-list">
                    {project.tech.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                  {(project.demo || project.figma) && (
                    <div className="project-links mt-auto pt-4">
                      {project.demo && (
                        <a href={project.demo} target="_blank" rel="noreferrer">
                          Live Demo <i className="bi bi-arrow-up-right" />
                        </a>
                      )}

                      {project.figma && (
                        <a href={project.figma} target="_blank" rel="noreferrer">
                          Figma <i className="bi bi-box-arrow-up-right" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
