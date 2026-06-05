import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Skills.css';

const categories = [
  { id: 'frontend', num: '01', label: 'Frontend' },
  { id: 'database', num: '02', label: 'Database' },
  { id: 'tools_ai', num: '03', label: 'Tools & AI' },
];

const constellationData = {
  frontend: {
    nodes: [
      { id: 'react', name: 'React.js', radius: 80, angle: 0 },
      { id: 'js', name: 'JavaScript', radius: 140, angle: 0 },
      { id: 'html5', name: 'HTML5', radius: 140, angle: 180 },
      { id: 'css3', name: 'CSS3', radius: 200, angle: 90 },
      { id: 'responsive', name: 'Responsive', radius: 200, angle: 270 },
    ]
  },
  database: {
    nodes: [
      { id: 'modeling', name: 'Modeling', radius: 80, angle: 0 },
      { id: 'mysql', name: 'MySQL', radius: 140, angle: 0 },
      { id: 'sqlserver', name: 'SQL Server', radius: 140, angle: 180 },
      { id: 'sqlite', name: 'SQLite', radius: 200, angle: 90 },
    ]
  },
  tools_ai: {
    nodes: [
      { id: 'cursor', name: 'Cursor', radius: 80, angle: 0 },
      { id: 'lovable', name: 'Lovable', radius: 140, angle: 0 },
      { id: 'ai', name: 'AI Integration', radius: 140, angle: 180 },
      { id: 'git', name: 'Git & GitHub', radius: 200, angle: 90 },
    ]
  }
};

function Skills() {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const activeData = constellationData[activeCategory];

  return (
    <section className="skills" id="yetenekler">
      <div className="skills-container reveal reveal-delay-1">
        <h2 className="section-title">Yetenekler</h2>
        
        <div className="skills-split-container">
          {/* Left Side: Category Selector */}
          <div className="skills-categories-list">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`skills-category-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
                onMouseEnter={() => setActiveCategory(cat.id)}
              >
                <span className="cat-num">{cat.num}</span>
                <span className="cat-label">{cat.label}</span>
              </button>
            ))}
          </div>

          {/* Right Side: Planetary Orbit Canvas */}
          <div className="skills-orbit-canvas">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="orbit-system-container"
              >
                {/* Central Hub representing Developer Core */}
                <div className="orbit-central-hub">
                  <span className="hub-text">DEV</span>
                </div>

                {/* Orbit Tracks (Static border circles) */}
                <div className="orbit-track track-inner" style={{ width: '160px', height: '160px' }}></div>
                <div className="orbit-track track-middle" style={{ width: '280px', height: '280px' }}></div>
                <div className="orbit-track track-outer" style={{ width: '400px', height: '400px' }}></div>

                {/* Orbit Nodes */}
                {activeData.nodes.map((node) => (
                  <div
                    key={node.id}
                    className="orbit-node"
                    style={{
                      '--radius': `${node.radius}px`,
                      '--angle': `${node.angle}deg`,
                    }}
                  >
                    <div className="orbit-planet-circle"></div>
                    <span className="orbit-planet-text">{node.name}</span>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;