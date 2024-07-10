// Imágenes
import homePartnersBg from "../../assets/img/background/homePartnersBg.svg"

// Logos Partners
import metroXLogo from "../../assets/img/logos/metroXLogo.png"
import stayRealTVLogo from "../../assets/img/logos/stayRealTVLogo.png"
import polygonLogo from "../../assets/img/logos/polygonLogo.png"
import beccarLogo from "../../assets/img/logos/beccarVarelaLogo.png"
import cafLogo from "../../assets/img/logos/cafLogo.png"
import cdsLogo from "../../assets/img/logos/cdsLogo.png"
import cicloLogo from "../../assets/img/logos/cicloLogo.png"
import jjgroupLogo from "../../assets/img/logos/j&jgroupLogo.png"

// Componentes
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
        {
            link:"https://polygon.technology/",
            img: polygonLogo,
            alt: "polygonLogo"
        },
        {
            link: "https://www.beccarvarela.com/",
            img: beccarLogo,
            alt: "beccarLogo"
        },
        {
            link: "https://camarafintech.org/",
            img: cafLogo,
            alt: "cafLogo"
        },
        {
            link: "https://www.cdsyasociados.com.ar/index.htm",
            img: cdsLogo,
            alt: "cdsLogo"
        },
        {
            link: "https://cicloglobalre.com/",
            img: cicloLogo,
            alt: "cicloLogo"
        },
        {
            link: "https://jjgroup.com.ar/",
            img: jjgroupLogo,
            alt: "jjgroupLogo"
        }
    ]
    return (

        <section id="homePartners">
                <img alt="homePartnersBackground" title="homePartnersBackground" className="sectionBackground--desktop" src={homePartnersBg} loading="lazy"/>

                <h3 className='section_subTitle'>Nuestros partners</h3>

                <div id='homePartnersContainer'>
                    <ul>
                        { partnersList.map( (partner, key) => <PartnerCard partner={partner} key={key}/> ) }
                    </ul>
                </div>
            </section>
    )
}