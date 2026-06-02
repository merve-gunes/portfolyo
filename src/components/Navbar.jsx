import './Navbar.css';

function Navbar() {
  return (
    <header className="navbar-header">
      <nav className="navbar-container">
        <a href="#" className="navbar-logo">
          Merve Safa Güneş
        </a>
        <ul className="navbar-links">
          <li><a href="#hakkimda">Hakkımda</a></li>
          <li><a href="#yetenekler">Yetenekler</a></li>
          <li><a href="#projeler">Projeler</a></li>
          <li><a href="#egitim">Eğitim</a></li>
          <li><a href="#iletisim">İletişim</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;