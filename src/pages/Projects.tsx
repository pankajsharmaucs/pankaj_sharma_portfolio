
const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce website with shopping cart, payment gateway, and admin dashboard using MERN stack.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: 'https://assets.justinmind.com/wp-content/uploads/2024/07/hero-image-examples-travel-agency.png',
    link: '#',
  },
  {
    title: 'Portfolio Website',
    description: 'A professional developer portfolio built with React and Bootstrap, showcasing projects, skills, and resume.',
    tech: ['React', 'Bootstrap', 'TypeScript'],
    image: 'https://assets.justinmind.com/wp-content/uploads/2024/07/hero-image-examples-e-learning.png',
    link: '#',
  },
  {
    title: 'Blog CMS',
    description: 'A headless blog CMS with admin panel and markdown support, using Next.js and MongoDB.',
    tech: ['Next.js', 'MongoDB', 'TailwindCSS'],
    image: 'https://www.creativefabrica.com/wp-content/uploads/2023/08/07/Xander-Creative-Portfolio-Hero-Section-Graphics-76341096-1.jpg',
    link: '#',
  },
];

const Projects = () => {
  return (
    <section className="container py-5">
      <h2 className="mb-4 display-6 fw-bold text-center">Projects</h2>
      <div className="row g-4">
        {projects.map((project, index) => (
          <div className="col-md-6 col-lg-4" key={index}>
            <div className="card h-100 shadow-sm border-0">
              <img src={project.image} className="card-img-top" alt={project.title} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text flex-grow-1">{project.description}</p>
                <div className="mb-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="badge bg-primary me-1">{tech}</span>
                  ))}
                </div>
                <a href={project.link} className="btn btn-outline-dark mt-auto" target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
