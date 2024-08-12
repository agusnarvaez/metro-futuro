// Imágenes
import homePartnersBg from "../../assets/img/background/homePartnersBg.svg"

// Logos Partners
import ambitoLogo from "../../assets/img/logos/ambitoLogo.png"
import economistaLogo from "../../assets/img/logos/economistaLogo.jpg"
import realEstateLogo from "../../assets/img/logos/realEstateLogo.png"
import infobaeLogo from "../../assets/img/logos/infobaeLogo.png"
import laNacionLogo from "../../assets/img/logos/laNacionLogo.png"
import neuraLogo from "../../assets/img/logos/neuraLogo.png"

// Componentes
import PartnerCard from './PartnerCard'

export default function HomePress() {
    const partnersList = [
        {
            link: "https://www.ambito.com/",
            img: ambitoLogo,
            alt: "ambitoLogo"
        },
        {
            link: "https://eleconomista.com.ar/",
            img: economistaLogo,
            alt: "economistaLogo"
        },
        {
            link:"https://exporealestate.com.ar/",
            img: realEstateLogo,
            alt: "realEstateLogo"
        },
        {
            link: "https://www.infobae.com/",
            img: infobaeLogo,
            alt: "infobaeLogo"
        },
        {
            link: "https://www.lanacion.com.ar/",
            img: laNacionLogo,
            alt: "laNacionLogo"
        },
        {
            link: "https://www.neura.media/",
            img: neuraLogo,
            alt: "neuraLogo"
        }
    ]
    return (

        <section id="homePartners" className="homePress">
                <img alt="homePartnersBackground" title="homePartnersBackground" className="sectionBackground--desktop" src={homePartnersBg} loading="lazy"/>

                <h3 className='section_subTitle'>Medios y eventos</h3>

                <div id='homePartnersContainer'>
                    <ul>
                        { partnersList.map( (partner, key) => <PartnerCard partner={partner} key={key}/> ) }
                    </ul>
                </div>
            </section>
    )
}