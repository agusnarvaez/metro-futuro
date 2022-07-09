import React from 'react';

// Background
import homeBenefitsBg from "../../assets/img/background/homeBenefitsBg.png";

// Imágenes
import building from '../../assets/img/building.png';

// Íconos
import clockIcon from '../../assets/img/icons/homeClock.png';
import shoppingCartIcon from '../../assets/img/icons/homeShoppingCart.png';
import dollarSignIcon from '../../assets/img/icons/homeDollarSign.png';
import padlockIcon from '../../assets/img/icons/homePadlock.png';
import suitcaseIcon from '../../assets/img/icons/homeSuitcase.png';
function HomeBenefits() {
    const benefitsList = [
            {
                img: clockIcon,
                title: "Liquidez",
                text: "Recibe una renta mensual por el alquiler del inmuebles"
            },
            {
                img: shoppingCartIcon,
                title: "Descentralización",
                text: "Vende y compra tus tokens inmobiliarios cuando quieras"
            },
            {
                img: dollarSignIcon,
                title: "Rentabilidad",
                text: "Obten tu rentabilidad al venderse la propiedad"
            },
            {
                img: padlockIcon,
                title: "Seguridad",
                text: "Utilizamos Smart Contracts para garantizar la seguridad en tu operación"
            },
            {
                img: suitcaseIcon,
                title: "Relaciones Jurídicas",
                text: "Nuestras inversiones cumplen con las normativas para garantizar tu inversión"
            }
        ]
    return (
        <section className="sectionInfo" id="homeBenefits">
                <img className="sectionBackground--desktop" alt="homeBenefitsBackground" src={homeBenefitsBg} />
                <h3>Beneficios de invertir con Metro Futuro</h3>
                <div className="sectionInfo" id="homeBenefitsContainer">
                    <div id="homeBenefitsImg">
                        <img alt="homeBenefitsImg" src={building} />
                    </div>
                    <ul>
                        {benefitsList.map((benefit, index) =>{
                            return(
                            <li>
                                <img alt="icon" src={benefit.img} />
                                <div>
                                    <h5>{benefit.title}</h5>
                                    <p>{benefit.text}</p>
                                </div>
                            </li>
                            )
                        }
                        )}
                    </ul>
                </div>
            </section>
    )
}
export default HomeBenefits;