import { useState } from "react";
import "../assets/css/home.css";
import { NavLink } from 'react-router-dom';
import livingRoom from '../assets/img/livingRoom.png';
import investmentStepsBg from "../assets/img/background/homeInvestmentStepsBg.png";
import clockIcon from '../assets/img/icons/homeClock.png';
import shoppingCartIcon from '../assets/img/icons/homeShoppingCart.png';
import dollarSignIcon from '../assets/img/icons/homeDollarSign.png';
import padlockIcon from '../assets/img/icons/homePadlock.png';
import suitcaseIcon from '../assets/img/icons/homeSuitcase.png';
import building from '../assets/img/building.png';
import homeBenefitsBg from "../assets/img/background/homeBenefitsBg.png";
import learnWithUsBg from "../assets/img/background/homeLearnWithUsBg.png";
import homePartnersBg from "../assets/img/background/homePartnersBg.png";
import homeFaqIcon from '../assets/img/icons/homeFaqIcon.png';
import metroXLogo from "../assets/img/logos/metroXLogo.png";
import stayRealTVLogo from "../assets/img/logos/stayRealTVLogo.png";
import brikenLogo from "../assets/img/logos/brikenLogo.png";

import rightArrowHomeCarrousel from "../assets/img/icons/rightArrow.png"
import leftArrowHomeCarrousel from "../assets/img/icons/leftArrow.png"

function Home() {
    const [carrousel, setCarrousel] = useState(true);

    console.log(carrousel);
    return (
        <div className="homePage">

            <section className="homeAbout">
                <div className="homeAboutInfo">
                    <h2>Inversiones por M<sup>2</sup></h2>
                    <p>Una plataforma con tecnología blockchain que permite invertir por metro cuadrado en Europa</p>
                    <div className="homeAboutInfoLink">
                        <div>
                            <NavLink to='/about'>
                                Más información
                            </NavLink>
                        </div>
                    </div>
                </div>
                <img className="homeAboutCover" src={livingRoom} alt="livingRoom" />
            </section>


            <section className="homeSlogan">
                <h2>Invierte en España desde 100 euros</h2>
            </section>


            <section className="homeInvestmentSteps">
                <img className="homeInvestmentStepsBg" alt="homeInvestmentStepsBg" src={investmentStepsBg} />
                <div className="homeInvestments">
                    <h3>¿Como <font color="#004DFF">invertir</font> en simples pasos?</h3>
                    <div className="homeInvestmensInfoLink">
                        <div>
                            <NavLink to='/investments/list'>
                                Invierte
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="homeInvestmentStepsCarrousel">
                    <div className="homeInvestmentStepsCarrouselNav">
                        <div className="homeInvestmentStepsCarrouselArrowContainer"
                            onClick={() => setCarrousel(!carrousel)}
                        >
                            <div>
                                <img src={leftArrowHomeCarrousel} alt="leftArrowNav" />
                            </div>
                        </div>
                        <div className="homeInvestmentStepsCarrouselArrowContainer"
                            onClick={() => setCarrousel(!carrousel)}

                        >
                            <div>
                                <img src={rightArrowHomeCarrousel} alt="rightArrowNav" />
                            </div>
                        </div>
                    </div>
                    <div className="homeInvestmentStepsCarrouselContainer">
                        <div
                            className={carrousel ? "homeInvestmentStepsCarrouselMobil" : "homeInvestmentStepsCarrouselMobil moved"}
                        >
                            <div className="homeInvestmentStepsCarrouselCard">
                                <div>1</div>
                                <h4>Regístrate</h4>
                                <p>Inscribite en la plataforma y realiza el proceso de validación de identidad y origen de datos.</p>
                            </div>
                            <div className="homeInvestmentStepsCarrouselCard">
                                <div>2</div>
                                <h4>Selección de tokens</h4>
                                <p>Elige el proyecto inmobiliario en el que quieras invertir y la cantidad e m<sup>2</sup> que quieras comprar.</p>
                            </div>
                            <div className="homeInvestmentStepsCarrouselCard">
                                <div>3</div>
                                <h4>Firma</h4>
                                <p>Nuestras operaciones son innovadoras y están establecidas en Smart Contracts, una herramienta que le brinda independencia y seguridad al inversor.</p>
                            </div>
                            <div className="homeInvestmentStepsCarrouselCard">
                                <div>4</div>
                                <h4>Pago</h4>
                                <p>Una vez realizado el pago recibes tus tokens en tu billetera digital, para poder disponer de ellos o recibir tu renta mensualmente.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


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


            <section className="homeLearnWithUs">
                <img className="learnWithUsBg" alt="learnWithUsBackground" src={learnWithUsBg} />
                <div className="homeLearnWithUsVideo">

                </div>
                <div className="homeLearnWithUsText">
                    <h4>Aprende con <font color="#004DFF">Metro Futuro</font></h4>
                    <p>
                        Te ofrecemos una plataforma eLearning online y gratuita para formarse en inversioens inmobiliarias y la tecnología Blockchain.<br /><br />
                        Únete a la academia de Metro Futuro para lograr capitalizar tus ahorros y transformarte en un inversor del Real State, la industria con mayor seguridad y menor riesgo.
                    </p>
                    <div className="homeLearnWithUsLink">
                        <div>
                            <NavLink to='/academy'>
                                Ver más
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>


            <section className="homeNews">
                <div className="homeNewsText">
                    <h3>Novedades</h3>
                    <p>Entérate de últimas noticias del sector inmobiliario en Europa y Latam.</p>
                </div>
                <div className="homeNewsLink">
                    <div>
                        <NavLink to='/academy'>
                            Quiero saber más
                        </NavLink>
                    </div>
                </div>
            </section>

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
            <section className="homeFaq">
                <h3>Preguntas frecuentes</h3>
                <ul>
                    <li>
                        <div>
                            <h4>¿En que estoy invirtiendo?</h4>
                            <img alt="homeFaqIcon" src={homeFaqIcon} />
                        </div>
                    </li>
                    <li>
                        <div>
                            <h4>¿Como funciona legalmente?</h4>
                            <img alt="homeFaqIcon" src={homeFaqIcon} />
                        </div>
                    </li>
                    <li>
                        <div>
                            <h4>¿Cuando y cómo puedo salir de mi inversión?</h4>
                            <img alt="homeFaqIcon" src={homeFaqIcon} />
                        </div>
                    </li>
                    <li>
                        <div>
                            <h4>¿Como recibo mi alquiler mensualmente?</h4>
                            <img alt="homeFaqIcon" src={homeFaqIcon} />
                        </div>
                    </li>
                </ul>
                <div className="homeFaqLink">
                    <div>
                        <NavLink to='/faq'>
                            Ver más
                        </NavLink>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;