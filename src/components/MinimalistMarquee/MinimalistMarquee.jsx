import './MinimalistMarquee.css';

const quoteStrip = "\"HOW YOU DOIN'?\" 🍕 • \"BEARS. BEETS. BATTLESTAR GALACTICA.\" 🪵 • \"THAT'S WHAT SHE SAID.\" ☕ • \"TABS OR SPACES?\" 💻 • \"MAY THE FORCE BE WITH YOU.\" ✨ • \"I'LL BE THERE FOR YOU.\" 🎸 • ";

function MinimalistMarquee() {
  return (
    <div className="minimalist-marquee-container">
      <div className="marquee-track">
        <div className="marquee-text-content">
          <span>{quoteStrip}</span>
          <span>{quoteStrip}</span>
        </div>
        <div className="marquee-text-content" aria-hidden="true">
          <span>{quoteStrip}</span>
          <span>{quoteStrip}</span>
        </div>
      </div>
    </div>
  );
}

export default MinimalistMarquee;
