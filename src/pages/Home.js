import { useState } from "react";
import "../assets/css/home.css"
import { NavLink } from 'react-router-dom'
import livingRoom from '../assets/img/livingRoom.png';
function Home() {
    const [carrousel, setCarrousel] = useState(true);

    console.log(carrousel);
    return (
        <div className="homePage">
            <div className="homeAbout">
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
            </div>
            <div className="homeSlogan">
                <h2>Invierte en España desde 100 euros</h2>
            </div>
            <div className="homeInvestmentSteps">
                <div className="homeInvestments">
                    <h3>¿Como <font color="#004DFF">invertir</font> en simples pasos?</h3>
                    <div className="homeInvestmensInfoLink">
                        <div>
                            <NavLink to='/investments'>
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
                                <img src="./assets/images/icons/leftArrow.svg" alt="leftArrowNav" />
                            </div>
                        </div>
                        <div className="homeInvestmentStepsCarrouselArrowContainer"
                            onClick={() => setCarrousel(!carrousel)}

                        >
                            <div>
                                <img src="./assets/images/icons/rightArrow.svg" alt="rightArrowNav" />
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
            </div>
        </div>
    )
}

export default Home;