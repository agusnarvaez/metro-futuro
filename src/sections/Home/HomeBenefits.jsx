//* Componentes
import HomeBenefitCard from './HomeBenefitsCard';

//* Background
import homeBenefitsBg from "../../assets/img/background/homeBenefitsBg.svg";

//* Imágenes
import building from '../../assets/img/building.jpg';

//* Íconos
import invertIcon from '../../assets/img/icons/homeInvert.svg'
import earnIcon from '../../assets/img/icons/homeEarn.svg'
import dollarSignIcon from '../../assets/img/icons/homeDollarSign.svg'
import padlockIcon from '../../assets/img/icons/homePadlock.svg'
import suitcaseIcon from '../../assets/img/icons/homeSuitcase.svg'
import chartIcon from '../../assets/img/icons/homeChart.svg'
import markIcon from '../../assets/img/icons/homeMapMarker.svg'
import checkIcon from '../../assets/img/icons/homeCheck.svg'

export default function HomeBenefits() {
    const benefitsList = [
            {
                img: invertIcon,
                title: "Inversión",
                text: "Invierte en inmuebles desde 100 Euros"
            },
            {
                img: earnIcon,
                title: "Ingresos",
                text: "Genera ingresos pasivos mensualmente por el alquiler"
            },
            {
                img: dollarSignIcon,
                title: "Ganancia",
                text: " Disfruta de las ganancias por la venta del inmuble"
            },
            {
                img: chartIcon,
                title: "Rentabilidad",
                text: "Obtén una rentabilidad superior al 10%"
            },
            {
                img: suitcaseIcon,
                title: "Liquidez",
                text: "Liquidez inmediata; vende tus tokens a un tercero en cualquier momento"
            },
            {
                img: markIcon,
                title: "Facilidad y rapidez",
                text: "Invierte en 2 clicks en cualquier parte del mundo"
            },
            {
                img: checkIcon,
                title: "Gestión integral",
                text: "Nos ocupamos de la compra hasta la venta"
            },
            {
                img: padlockIcon,
                title: "Seguridad",
                text: "Nuestras inversiones se encuentran reguladas por la CNMV de España"
            }
        ]
    return (
        <section className="sectionInfo" id="homeBenefits">
                <img className="sectionBackground--desktop" alt="homeBenefitsBackground" title='homeBenefitsBackground' src={homeBenefitsBg} loading="lazy"/>
                <h3>Beneficios de invertir con Metro Futuro</h3>
                <div className="sectionInfo" id="homeBenefitsContainer">
                    <div id="homeBenefitsImg">
                        <img alt="homeBenefitsImg" title='homeBenefitsImg' src={building} loading="lazy" />
                    </div>
                    <ul>
                        {benefitsList.map((benefit, key) =>{
                            return(
                                <HomeBenefitCard benefit={benefit} key={key} />
                            )
                        }
                        )}
                    </ul>
                </div>
            </section>
    )
}