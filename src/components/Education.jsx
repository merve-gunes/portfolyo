import { FaGraduationCap } from 'react-icons/fa';
import './Education.css';

const educations = [
  {
    id: 1,
    school: 'OSTİM TEKNİK ÜNİVERSİTESİ',
    department: 'Yazılım Mühendisliği',
    year: '2024 <— Devam ediyor',
    description: '2. sınıf öğrencisiyim. Web geliştirme ve yazılım mühendisliği üzerine eğitim alıyorum.',
  },
];

function Education() {
  return (
    <section className="education" id="egitim">
      <h2>Eğitim</h2>
      <div className="education-list">
        {educations.map((edu) => (
          <div className="education-card" key={edu.id}>
            <div className="education-icon">
              <FaGraduationCap />
            </div>
            <div className="education-info">
              <h3>{edu.school}</h3>
              <h4>{edu.department}</h4>
              <span className="education-year">{edu.year}</span>
              <p>{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;