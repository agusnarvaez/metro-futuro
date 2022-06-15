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
                    <li></li>
                    <li><img alt="metroXLogo" src={metroXLogo} /></li>
                    <li><img alt="stayRealTVLogo" src={stayRealTVLogo} /></li>
                    <li><img alt="brikenLogo" src={brikenLogo} /></li>
                </ul>
            </section>
    )
}
export default HomePartners;