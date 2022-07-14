import React from 'react';

// Background
import aboutTitleBg from "../../assets/img/background/aboutTitleBg.png";

// Logos
import metroFuturoLogo from "../../assets/img/logos/metroFuturoLogoTag.png";


function AboutTitle() {

    return (
        <section id="aboutTitle">
            <img className="aboutMetroLogo" alt="aboutMetroLogo" src={metroFuturoLogo} />
            <h1>
                Somos <br />
                <font color="#004DFF">Metro Futuro</font>
            </h1>
            <p className='section_paragraph'>Una empresa global de inmuebles tokenizados</p>
            <img alt="aboutTitleBackground" className="sectionBackground" src={aboutTitleBg} />
        </section>
    )
}
export default AboutTitle;