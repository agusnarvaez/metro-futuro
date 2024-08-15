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
            link: "https://www.ambito.com/economia/boom-hidrocarburos-desarrollaran-una-nueva-ciudad-el-corazon-vaca-muerta-n5818232?utm_campaign=newsletter_10_-_11dic&utm_medium=email&utm_source=RD+Station",
            img: ambitoLogo,
            alt: "ambitoLogo"
        },
        {
            link: "https://x.com/ElEconomista_/status/1734975086921122069",
            img: economistaLogo,
            alt: "economistaLogo"
        },
        {
            link:"https://exporealestate.com.ar/",
            img: realEstateLogo,
            alt: "realEstateLogo"
        },
        {
            link: "https://www.infobae.com/economia/2022/10/17/tokenizar-casas-y-departamentos-en-que-consiste-la-nueva-tendencia-cripto-y-como-invertir-desde-usd-100/",
            img: infobaeLogo,
            alt: "infobaeLogo"
        },
        {
            link: "https://www.lanacion.com.ar/propiedades/tokens-inmobiliarios-quien-es-el-joven-que-esta-digitalizando-el-mercado-de-propiedades-local-nid04082021/",
            img: laNacionLogo,
            alt: "laNacionLogo"
        },
        {
            link: "https://www.youtube.com/watch?v=4ilGDg0r3aI",
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