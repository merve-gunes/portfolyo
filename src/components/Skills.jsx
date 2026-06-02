import { FaLaptopCode, FaDatabase, FaBrain, FaHtml5, FaCss3Alt, FaJs, FaReact, FaMobileAlt, FaGitAlt, FaRobot, FaServer } from 'react-icons/fa';
import { SiMysql, SiSqlite } from 'react-icons/si';
import './Skills.css';

const skillCategories = [
  {
    id: 1,
    title: 'Frontend Development',
    icon: <FaLaptopCode />,
    delayClass: 'reveal-delay-1',
    skills: [
      { name: 'HTML5', icon: <FaHtml5 /> },
      { name: 'CSS3', icon: <FaCss3Alt /> },
      { name: 'JavaScript (ES6+)', icon: <FaJs /> },
      { name: 'React.js', icon: <FaReact /> },
      { name: 'Responsive Design', icon: <FaMobileAlt /> },
    ],
  },
  {
    id: 2,
    title: 'Database Management',
    icon: <FaDatabase />,
    delayClass: 'reveal-delay-2',
    skills: [
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'SQL Server', icon: <FaServer /> },
      { name: 'SQLite', icon: <SiSqlite /> },
      { name: 'Relational Modeling', icon: <FaDatabase /> },
    ],
  },
  {
    id: 3,
    title: 'Tools & AI Prototyping',
    icon: <FaBrain />,
    delayClass: 'reveal-delay-3',
    skills: [
      { name: 'Git & GitHub', icon: <FaGitAlt /> },
      { name: 'Cursor', icon: <FaRobot /> },
      { name: 'Lovable', icon: <FaBrain /> },
      { name: 'AI Integration (fal-ai)', icon: <FaRobot /> },
    ],
  },
];

function Skills() {
  return (
    <section className="skills" id="yetenekler">
      <h2 className="reveal">Yetenekler</h2>
      <div className="skills-categories-grid">
        {skillCategories.map((category) => (
          <div className={`skills-category-card glass-panel reveal ${category.delayClass}`} key={category.id}>
            <div className="category-header">
              <span className="category-icon">{category.icon}</span>
              <h3>{category.title}</h3>
            </div>
            <div className="skills-chips-container">
              {category.skills.map((skill) => (
                <div className="skill-chip" key={skill.name}>
                  <span className="chip-icon">{skill.icon}</span>
                  <span className="chip-text">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;