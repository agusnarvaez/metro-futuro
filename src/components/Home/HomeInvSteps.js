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

        <section id="homeInvestmentSteps">
                <img className="sectionBackground--desktop" alt="homeInvestmentStepsBg" src={investmentStepsBg} />
                <div className="sectionInfo_subsection sectionInfo_subsection--column">
                    <h2 id="homeInvestmentSteps_subTitle" className="section_subTitle section_subTitle--left">¿Como <font color="#004DFF">invertir</font> en simples pasos?</h2>
                    <div className="degradedLink" id="homeInvestmentSteps_desktopLink">
                        <div className='degradedLink_TextContainer degradedLink_TextContainer--white'>
                            <NavLink className="degradedLink_Text" to='/investments/list'>
                                Invierte
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="sectionInfo_subsection sectionInfo_subsection--column sectionInfo_subsection--50width">
                    <div className="carrouselNav">
                        <div className="carrouselNav_arrowContainer"
                            onClick={() => setCarrousel(!carrousel)}
                        >
                            <div>
                                <img src={leftArrowHomeCarrousel} alt="leftArrowNav" />
                            </div>
                        </div>
                        <div className="carrouselNav_arrowContainer"
                            onClick={() => setCarrousel(!carrousel)}

                        >
                            <div>
                                <img src={rightArrowHomeCarrousel} alt="rightArrowNav" />
                            </div>
                        </div>
                    </div>
                    <div className="carrouselContainer">
                        <div
                            className={carrousel ? "carrouselContainer_mobil" : "carrouselContainer_mobil carrouselContainer_mobil--moved"}
                        >
                            <div className="carrouselContainer_card">
                                <div className="carrouselContainer_cardId">
                                    <div className="carrouselContainer_cardNumber">1</div>
                                    <h4>Regístrate</h4>
                                </div >
                                <p>Inscribite en la plataforma y realiza el proceso de validación de identidad y origen de datos.</p>
                            </div>
                            <div className="carrouselContainer_card">
                                <div className="carrouselContainer_cardId">
                                    <div className="carrouselContainer_cardNumber">2</div>
                                    <h4>Selección de tokens</h4>
                                </div>    
                                <p>Elige el proyecto inmobiliario en el que quieras invertir y la cantidad e m<sup>2</sup> que quieras comprar.</p>
                            </div>
                            <div className="carrouselContainer_card">
                                <div className="carrouselContainer_cardId">
                                    <div className="carrouselContainer_cardNumber">3</div>
                                    <h4>Firma</h4>
                                </div>
                                <p>Nuestras operaciones son innovadoras y están establecidas en Smart Contracts, una herramienta que le brinda independencia y seguridad al inversor.</p>
                            </div>
                            <div className="carrouselContainer_card">
                                <div className="carrouselContainer_cardId">
                                    <div className='carrouselContainer_cardNumber'>4</div>
                                    <h4>Pago</h4>
                                </div>
                                <p>Una vez realizado el pago recibes tus tokens en tu billetera digital, para poder disponer de ellos o recibir tu renta mensualmente.</p>
                            </div>
                        </div>
                    </div>
                    <div className="degradedLink" id="homeInvestmentSteps_mobileLink">
                        <div className='degradedLink_TextContainer degradedLink_TextContainer--white'>
                            <NavLink className="degradedLink_Text" to='/investments/list'>
                                Invierte
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>
    )
}
export default HomeInvestmentSteps;