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

    return (
        <section className="homeBenefits">
                <img className="homeBenefitsBg" alt="homeBenefitsBackground" src={homeBenefitsBg} />
                <h4>Beneficios de invertir con metro futuro</h4>
                <div className="homeBenefitsContainer">
                    <div className="homeBenefitsImg">
                        <img alt="homeBenefitsImg" src={building} />
                    </div>
                    <ul className="homeBenefitsItems">
                        <li>
                            <img alt="icon" src={clockIcon} />
                            <div>
                                <h5>Liquidez</h5>
                                <p>Recibe una renta mensual por el alquiler del imueble</p>
                            </div>
                        </li>
                        <li>
                            <img alt="icon" src={shoppingCartIcon} />
                            <div>
                                <h5>Descentralización</h5>
                                <p>Vende y compra tus tokens inmobiliarios cuando quieras</p>
                            </div>
                        </li>
                        <li>
                            <img alt="icon" src={dollarSignIcon} />
                            <div>
                                <h5>Rentabilidad</h5>
                                <p>Obten tu rentabilidad al venderse la propiedad</p>
                            </div>
                        </li>
                        <li>
                            <img alt="icon" src={padlockIcon} />
                            <div>
                                <h5>Seguridad</h5>
                                <p>Utilizamos Smart Contracts Para garantizar la seguridad en tu operación</p>
                            </div>
                        </li>
                        <li>
                            <img alt="icon" src={suitcaseIcon} />
                            <div>
                                <h5>Relaciones Jurídicas</h5>
                                <p>Nuestras inversiones cumplen con las normativas de la Comisión nacional del Mercado de Valores de España (CNMV)</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
    )
}
export default HomeBenefits;