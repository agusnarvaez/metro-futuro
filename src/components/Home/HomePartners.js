import React from 'react';

// Background
import homePartnersBg from "../../assets/img/background/homePartnersBg.png";

// Logos Partners
import metroXLogo from "../../assets/img/logos/metroXLogo.png";
import stayRealTVLogo from "../../assets/img/logos/stayRealTVLogo.png";
import brikenLogo from "../../assets/img/logos/brikenLogo.png";




function HomePartners() {

    return (

        <section className="homePartners">
                <img alt="homePartnersBackground" className="homePartnersBg" src={homePartnersBg} />
                <h3>Nuestros partners</h3>
                <ul>
                    <li><a
                            target="_blank"
                            href="https://metrox.com.ar/"
                            rel="noopener noreferrer">
                                <img alt="metroXLogo" src={metroXLogo} /></a></li>
                    <li><a 
                            target="_blank"
                            href="https://stayreal.tv/main/"
                            rel="noopener noreferrer">
                                <img alt="stayRealTVLogo" src={stayRealTVLogo} /></a></li>
                    <li><a 
                            target="_blank"
                            href="https://briken.io/" rel="noopener noreferrer"><img alt="brikenLogo" src={brikenLogo} /></a></li>
                </ul>
            </section>
    )
}
export default HomePartners;