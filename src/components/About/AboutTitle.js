import React from 'react';

// Background
import aboutTitleBg from "../../assets/img/background/aboutTitleBg.png";

// Logos
import metroFuturoLogo from "../../assets/img/logos/metroFuturoLogoTag.png";


function AboutTitle() {

    return (
        <section className="aboutTitle">
            <img alt="sectionBackground" className="sectionBackground" src={aboutTitleBg} />
            <img className="aboutMetroLogo" alt="aboutMetroLogo" src={metroFuturoLogo} />
            <h1>
                Somos <br />
                <font color="#004DFF">Metro Futuro</font>
            </h1>
            <p>Una empresa global de inmuebles tokenizados</p>
        </section>
    )
}
export default AboutTitle;