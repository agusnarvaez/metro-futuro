// Background
import homePartnersBg from "../../assets/img/background/homePartnersBg.svg"

// Logos Partners
import metroXLogo from "../../assets/img/logos/metroXLogo.png"
import stayRealTVLogo from "../../assets/img/logos/stayRealTVLogo.png"
import PartnerCard from './PartnerCard'




export default function HomePartners() {
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
/*         {
            link: "https://briken.io/",
            img: brikenLogo,
            alt: "brikenLogo"
        } */
    ];
    return (

        <section id="homePartners">
                <img alt="homePartnersBackground" title="homePartnersBackground" className="sectionBackground--desktop" src={homePartnersBg} loading="lazy"/>
                <h3 className='section_subTitle'>Nuestros partners</h3>
                <div id='homePartnersContainer'>
                    <ul>
                        {partnersList.map((partner,key) => {
                            return (
                                <PartnerCard partner={partner} key={key}/>
                            )
                        })}
                    </ul>
                </div>
            </section>
    )
}