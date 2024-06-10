// Background
import aboutTitleBg from "../../assets/img/background/aboutTitleBg.svg"

// Logos
import metroFuturoLogo from "../../assets/img/logos/metroFuturoLogo.png"


export default function AboutTitle() {

    return (
        <section id="aboutTitle">
            <h1>
                Somos <br />
                <img className="aboutMetroLogo" alt="aboutMetroLogo" title="aboutMetroLogo" src={metroFuturoLogo} loading="lazy" />
                {/* <font color="#004DFF">Metro Futuro</font> */}
            </h1>
            <p className='section_paragraph'>Una empresa global de inmuebles tokenizados</p>
            <img alt="aboutTitleBackground" title="aboutTitleBackground" className="sectionBackground" src={aboutTitleBg} loading="lazy" />
        </section>
    )
}