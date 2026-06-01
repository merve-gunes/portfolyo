import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Portfolyo Sitesi',
    description: 'React ile yapılmış kişisel portfolyo sitesi.',
    image: 'https://placehold.co/400x220/1a1a2e/ff6b6b?text=Portfolyo',
    github: 'https://github.com/',
    demo: 'https://',
    tags: ['React', 'CSS'],
  },
  {
    id: 2,
    title: 'Görev Takip Uygulaması',
    description: 'React ve SQL kullanarak yapılmış CRUD uygulaması.',
    image: 'https://placehold.co/400x220/1a1a2e/61dafb?text=Task+App',
    github: 'https://github.com/',
    demo: 'https://',
    tags: ['React', 'Node.js', 'SQL'],
  },
];

function Projects() {
  return (
    <section className="projects" id="projeler">
      <h2>Projeler</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer">
                  <FaGithub /> GitHub
                </a>
                <a href={project.demo} target="_blank" rel="noreferrer">
                  <FaExternalLinkAlt /> Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;