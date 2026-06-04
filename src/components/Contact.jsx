import { useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const contacts = [
  {
    id: 1,
    label: 'E-posta',
    value: 'mervegunes1454@gmail.com',
    href: 'mailto:mervegunes1454@gmail.com',
    icon: <FaEnvelope />,
    delayClass: 'reveal-delay-1',
  },
  {
    id: 2,
    label: 'GitHub',
    value: 'github.com/merve-gunes',
    href: 'https://github.com/merve-gunes',
    icon: <FaGithub />,
    delayClass: 'reveal-delay-2',
  },
  {
    id: 3,
    label: 'LinkedIn',
    value: 'linkedin.com/in/merve-safa-gunes',
    href: 'https://www.linkedin.com/in/merve-safa-g%C3%BCne%C5%9F-39438432a/',
    icon: <FaLinkedin />,
    delayClass: 'reveal-delay-3',
  },
];

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Simulate submission success
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="contact" id="iletisim">
      <h2 className="reveal">İletişim</h2>
      <p className="contact-subtitle reveal reveal-delay-1">Benimle iletişime geçmekten çekinme! Sorularını sormak veya iş birliği yapmak için mesaj gönderebilirsin.</p>
      
      <div className="contact-container reveal reveal-delay-2">
        {/* Left Side: Contact Cards */}
        <div className="contact-info-panel">
          <div className="contact-cards-list">
            {contacts.map((item) => (
              <a href={item.href} target="_blank" rel="noreferrer" className="contact-card glass-panel" key={item.id}>
                <span className="contact-icon">{item.icon}</span>
                <div className="contact-card-text">
                  <h3>{item.label}</h3>
                  <p>{item.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right Side: Message Form */}
        <div className="contact-form-panel glass-panel">
          <h3>Mesaj Gönder</h3>
          
          {submitted ? (
            <div className="contact-success-msg">
              <span className="success-icon">✓</span>
              <p>Mesajınız başarıyla iletildi! En kısa sürede geri dönüş yapacağım.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Adınız Soyadınız</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Adınız Soyadınız..."
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta Adresiniz</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="isim@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajınız</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Mesajınızı buraya yazabilirsiniz..."
                  rows="4"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn-accent contact-submit-btn">
                Gönder <FaPaperPlane />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;