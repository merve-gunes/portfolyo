import './Navbar.css';
import sunLogo from '../assets/sun-logo.png';

function Navbar() {
  return (
    <header className="navbar-header">
      <nav className="navbar-container">
        <a href="/" className="navbar-logo">
          <img src={sunLogo} alt="Merve Safa Güneş Logo" className="navbar-logo-img" />
        </a>
        <ul className="navbar-links">
          <li><a href="/hakkinda" target="_blank" rel="noopener noreferrer">Hakkımda</a></li>
          <li><a href="/yetenekler" target="_blank" rel="noopener noreferrer">Yetenekler</a></li>
          <li><a href="/projeler" target="_blank" rel="noopener noreferrer">Projeler</a></li>
          <li><a href="/galeri" target="_blank" rel="noopener noreferrer">Galeri</a></li>
          <li><a href="/egitim" target="_blank" rel="noopener noreferrer">Eğitim</a></li>
          <li><a href="/iletisim" target="_blank" rel="noopener noreferrer">İletişim</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;