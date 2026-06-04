import './Navbar.css';
import sunLogo from '../assets/sun-logo.png';

function Navbar() {
  return (
    <header className="navbar-header">
      <nav className="navbar-container">
        <a href="#home" className="navbar-logo">
          <img src={sunLogo} alt="Merve Safa Güneş Logo" className="navbar-logo-img" />
          <span>Merve Safa Güneş</span>
        </a>
        <ul className="navbar-links">
          <li><a href="#hakkimda">Hakkımda</a></li>
          <li><a href="#yetenekler">Yetenekler</a></li>
          <li><a href="#projeler">Projeler</a></li>
          <li><a href="#etkinlikler">Etkinlikler</a></li>
          <li><a href="#egitim">Eğitim</a></li>
          <li><a href="#iletisim">İletişim</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;