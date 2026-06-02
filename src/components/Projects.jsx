import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import proshotImg from '../assets/proshot.png';
import floraImg from '../assets/flora.png';
import weatherImg from '../assets/weather.png';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'ProShot (AI CV Photo Converter)',
    description: 'Yapay zeka entegrasyonu ile gündelik ve sıradan portre fotoğraflarını profesyonel, temiz arka planlı ve şık CV vesikalıklarına dönüştüren modern bir web aracı.',
    image: proshotImg,
    github: 'https://github.com/merve-gunes',
    demo: '#',
    tags: ['React.js', 'AI API Integration', 'Glassmorphism', 'CSS3'],
    delayClass: 'reveal-delay-1',
  },
  {
    id: 2,
    title: 'Flora (E-Commerce Prototype)',
    description: 'İç mekan bitki ve çiçek satışı sunan, sepet yönetimi, kullanıcı dostu filtreleme ve modern ödeme akışına sahip minimalist e-ticaret arayüzü prototipi.',
    image: floraImg,
    github: 'https://github.com/merve-gunes',
    demo: '#',
    tags: ['React.js', 'State Management', 'CSS Grid', 'Flexbox'],
    delayClass: 'reveal-delay-2',
  },
  {
    id: 3,
    title: 'Hava Durumu Uygulaması',
    description: 'Açık hava durumu API\'leri aracılığıyla anlık konum verisi çekerek minimalist, hava durumuna göre renk değiştiren dinamik ve cam efekti kullanan hava durumu paneli.',
    image: weatherImg,
    github: 'https://github.com/merve-gunes',
    demo: '#',
    tags: ['Vanilla JS', 'REST API Fetch', 'Glassmorphic UI', 'Aesthetic Charts'],
    delayClass: 'reveal-delay-3',
  },
];

function Projects() {
  return (
    <section className="projects" id="projeler">
      <h2 className="reveal">Projeler</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className={`project-card glass-panel reveal ${project.delayClass}`} key={project.id}>
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag-chip">
                    {tag}
                  </span>
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