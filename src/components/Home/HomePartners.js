import React from 'react';

// Background
import homePartnersBg from "../../assets/img/background/homePartnersBg.png";

// Logos Partners
import metroXLogo from "../../assets/img/logos/metroXLogo.png";
import stayRealTVLogo from "../../assets/img/logos/stayRealTVLogo.png";
import brikenLogo from "../../assets/img/logos/brikenLogo.png";




function HomePartners() {
    const partnersList = [
        {
            link: "https://metrox.com.ar/",
            img: metroXLogo,
            alt: "metroXLogo"
        },
        {
            link: "https://stayreal.tv/main/",
            img: stayRealTVLogo,
            alt: "stayRealTVLogo"
        },
        {
            link: "https://briken.io/",
            img: brikenLogo,
            alt: "brikenLogo"
        }
    ];
    return (

        <section id="homePartners">
                <img alt="homePartnersBackground" className="sectionBackground--desktop" src={homePartnersBg} />
                <h3 className='section_subTitle'>Nuestros partners</h3>
                <div id='homePartnersContainer'>
                    <ul>
                        {partnersList.map((partner) => {
                            return (
                                <li>
                                    <a
                                        target="_blank"
                                        href={partner.link}
                                        rel="noopener noreferrer">
                                        <img alt={partner.alt} src={partner.img} />
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </section>
    )
}
export default HomePartners;