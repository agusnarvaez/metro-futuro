import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';

// Background
import investmentStepsBg from "../../assets/img/background/homeInvestmentStepsBg.png";

// Flechas carrousel
import rightArrowHomeCarrousel from "../../assets/img/icons/rightArrow.png"
import leftArrowHomeCarrousel from "../../assets/img/icons/leftArrow.png"


function HomeInvestmentSteps() {
    const [carrousel, setCarrousel] = useState(true);
    return (

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
    )
}
export default HomeInvestmentSteps;