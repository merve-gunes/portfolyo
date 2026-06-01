import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const contacts = [
  {
    id: 1,
    label: 'Email',
    value: 'mervegunes1454@gmail.com',
    href: 'mervegunes1454@gmail.com',
    icon: <FaEnvelope />,
  },
  {
    id: 2,
    label: 'GitHub',
    value: 'github.com/merve-gunes',
    href: 'https://github.com/merve-gunes',
    icon: <FaGithub />,
  },
  {
    id: 3,
    label: 'LinkedIn',
    value: 'linkedin.com/in/kullaniciadin',
    href: 'https://linkedin.com/in/kullaniciadin',
    icon: <FaLinkedin />,
  },
];

function Contact() {
  return (
    <section className="contact" id="iletisim">
      <h2>İletişim</h2>
      <p className="contact-subtitle">Benimle iletişime geçmekten çekinme!</p>
      <div className="contact-list">
        {contacts.map((item) => (
          <a href={item.href} target="_blank" rel="noreferrer" className="contact-card" key={item.id}>
            <span className="contact-icon">{item.icon}</span>
            <div>
              <h3>{item.label}</h3>
              <p>{item.value}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Contact;