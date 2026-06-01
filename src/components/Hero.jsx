import './Hero.css'

function Hero(){
    return(

        <section className="hero">
            <div className="hero-text">
                <h1>Merhaba, ben <span>Merve Safa Güneş</span></h1>
                <h2>Yazılım Mühendisliği Öğrencisi</h2>
                <p>Web geliştirme ve yazılım dünyasına tutkuyla yaklaşan bir öğrenciyim.</p>
                <a href="#projeler" className="hero-btn">Projelerimi Gör</a>


            </div>
        </section>
    )
}

export default Hero