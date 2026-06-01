import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaDatabase } from 'react-icons/fa';
import { SiSqlite } from 'react-icons/si';
import './Skills.css';

const skills = [
  { name: 'HTML5',      icon: <FaHtml5 />,    color: '#e34c26' },
  { name: 'CSS3',       icon: <FaCss3Alt />,   color: '#264de4' },
  { name: 'JavaScript', icon: <FaJs />,        color: '#f7df1e' },
  { name: 'React',      icon: <FaReact />,     color: '#61dafb' },
  { name: 'SQL',        icon: <FaDatabase />,  color: '#ff6b6b' },
  { name: 'SQLite',     icon: <SiSqlite />,    color: '#44a8d4' },
];

function Skills() {
  return (
    <section className="skills" id="yetenekler">
      <h2>Yetenekler</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.name}>
            <span className="skill-icon" style={{ color: skill.color }}>
              {skill.icon}
            </span>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;