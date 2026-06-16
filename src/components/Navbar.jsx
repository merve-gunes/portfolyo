import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';
import './Navbar.css';
import logo from '../assets/logo.png';

function Navbar() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return systemPrefersDark ? 'dark' : 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <header className="navbar-header">
      <nav className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Merve Safa Güneş Logo" className="navbar-logo-img" />
        </Link>
        <div className="navbar-right">
          <ul className="navbar-links">
            <li><Link to="/">Hakkımda</Link></li>
            <li><Link to="/yetenekler">Yetenekler</Link></li>
            <li><Link to="/projeler">Projeler</Link></li>
            <li><Link to="/galeri">Galeri</Link></li>
            <li><Link to="/egitim">Eğitim</Link></li>
            <li><Link to="/iletisim">İletişim</Link></li>
          </ul>
          <button 
            onClick={toggleTheme} 
            className="theme-toggle-btn" 
            aria-label={theme === 'light' ? 'Karanlık Moda Geç' : 'Aydınlık Moda Geç'}
            title={theme === 'light' ? 'Karanlık Moda Geç' : 'Aydınlık Moda Geç'}
          >
            {theme === 'light' ? (
              <FaMoon className="theme-toggle-icon moon" />
            ) : (
              <FaSun className="theme-toggle-icon sun" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;