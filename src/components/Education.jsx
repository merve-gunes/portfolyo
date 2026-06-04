import { FaGraduationCap } from 'react-icons/fa';
import './Education.css';

const educations = [
  {
    id: 1,
    school: 'OSTİM TEKNİK ÜNİVERSİTESİ',
    department: 'Yazılım Mühendisliği',
    year: '2024 — Devam Ediyor',
    description: 'Yazılım mühendisliğinin temelleri, algoritma analizi, nesne yönelimli programlama, veritabanı yönetimi ve web teknolojileri üzerine akademik eğitim alıyorum. Teorik bilgiyi pratik projelerle pekiştiriyorum.',
  },
];

const certificates = [
  {
    id: 1,
    title: 'Versiyon Kontrolleri: Git ve Github',
    org: 'BTK Akademi',
    date: 'Mart 2026',
    link: '#',
  },
  {
    id: 2,
    title: 'CSS Essentials',
    org: 'Cisco Networking Academy',
    date: 'Ocak 2026',
    link: '#',
  },
  {
    id: 3,
    title: 'Introduction to Cybersecurity',
    org: 'Cisco Networking Academy',
    date: 'Haziran 2025',
    link: '#',
  },
  {
    id: 4,
    title: 'Frontend Eğitimi',
    org: 'OSTIMTECH Business Administration',
    date: 'Kasım 2025',
    link: '#',
  },
];

function Education() {
  return (
    <section className="education" id="egitim">
      <h2 className="reveal">Eğitim</h2>
      <div className="education-list reveal reveal-delay-1">
        {educations.map((edu) => (
          <div className="education-card glass-panel" key={edu.id}>
            <div className="education-icon-wrapper">
              <span className="education-icon">
                <FaGraduationCap />
              </span>
            </div>
            <div className="education-info">
              <span className="education-year">{edu.year}</span>
              <h3>{edu.school}</h3>
              <h4>{edu.department}</h4>
              <p>{edu.description}</p>
            </div>
          </div>
        ))}

        <div className="education-divider"></div>

        <h3 className="certificates-heading">Kurslar & Sertifikalar</h3>

        <div className="certificates-grid">
          {certificates.map((cert) => (
            <div className="certificate-item" key={cert.id}>
              <div className="certificate-info">
                <span className="certificate-title">{cert.title}</span>
                <div className="certificate-meta">
                  <span>{cert.org}</span>
                  <span>{cert.date}</span>
                </div>
              </div>
              <a href={cert.link} className="certificate-link" target="_blank" rel="noopener noreferrer">
                Sertifikayı Görüntüle
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;