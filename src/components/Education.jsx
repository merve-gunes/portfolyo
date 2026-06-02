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
      </div>
    </section>
  );
}

export default Education;