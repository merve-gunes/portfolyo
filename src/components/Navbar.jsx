import { Link } from 'react-router-dom';
import './Navbar.css';
import sunLogo from '../assets/sun-logo.png';

function Navbar() {
  return (
    <header className="navbar-header">
      <nav className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={sunLogo} alt="Merve Safa Güneş Logo" className="navbar-logo-img" />
        </Link>
        <ul className="navbar-links">
          <li><Link to="/">Hakkımda</Link></li>
          <li><Link to="/yetenekler">Yetenekler</Link></li>
          <li><Link to="/projeler">Projeler</Link></li>
          <li><Link to="/galeri">Galeri</Link></li>
          <li><Link to="/egitim">Eğitim</Link></li>
          <li><Link to="/iletisim">İletişim</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;