import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';

// Componentes
import HomeInvStepsCard from "./HomeInvStepsCard";

// Background
import investmentStepsBg from "../../assets/img/background/homeInvestmentStepsBg.png";

// Flechas carrousel
import rightArrowHomeCarrousel from "../../assets/img/icons/rightArrow.png"
import leftArrowHomeCarrousel from "../../assets/img/icons/leftArrow.png"


function HomeInvestmentSteps() {
    const carrouselInfo=[
        {
            id: 1,
            title: "Regístrate",
            text: "Inscríbete en la plataforma y realiza el pedido de validación de identidad y origen de datos."
        },
        {
            id: 2,
            title: "Selección de tokens",
            text: "Elije el proyecto inmobiliario en el que quieras invertir y la cantidad de m2 que quieras comprar."
        },
        {
            id: 3,
            title: "Firma",
            text: "Nuestras operaciones son innovadoras y están establecidas en Smart Contracts, una herramienta que le brinda independencia y seguridad al inversor."
        },
        {
            id: 4,
            title: "Pago",
            text: "Una vez realidao el pago, recibes tus tokens en tu billetera digital para poder disponer de ellos o recibir tu renta mensualmente."
        }
    ];
    const [carrousel, setCarrousel] = useState(true);
    const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
        });
    }
    return (

        <section id="homeInvestmentSteps">
                <div className="sectionInfo_subsection sectionInfo_subsection--column">
                    <h2 id="homeInvestmentSteps_subTitle" className="section_subTitle section_subTitle--left">¿Como <font color="#004DFF">invertir</font> en simples pasos?</h2>
                    <div className="degradedLink" id="homeInvestmentSteps_desktopLink">
                        <div onClick={scrollToTop} className='degradedLink_TextContainer degradedLink_TextContainer--white'>
                            <NavLink className="degradedLink_Text" to='/investments/list'>
                                Invierte
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="sectionInfo_subsection sectionInfo_subsection--column" id='homeCarrousel'>
                    <div className="carrouselNav" id="homeCarrouselNav">
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
                            className={carrousel ? "carrouselContainer_mobil carrousel_mobil--desktop" : "carrouselContainer_mobil carrouselContainer_mobil--moved carrousel_mobil--desktop"}
                        >{carrouselInfo.map((card,key) => {
                            return(
                                <HomeInvStepsCard card={card} key={key} />
                            )
                        })}
                        </div>
                        <div
                            className={carrousel ? "carrouselContainer_mobil carrousel_mobil--mobile" : "carrouselContainer_mobil carrouselContainer_mobil--moved carrousel_mobil--mobile"}
                        >{carrouselInfo.map((card,key) => {
                            return(
                                <HomeInvStepsCard card={card} key={key} />
                            )
                        })}
                        </div>
                    </div>
                    <div onClick={scrollToTop} className="degradedLink" id="homeInvestmentSteps_mobileLink">
                        <div className='degradedLink_TextContainer degradedLink_TextContainer--white'>
                            <NavLink className="degradedLink_Text" to='/investments/list'>
                                Invierte
                            </NavLink>
                        </div>
                    </div>
                </div>
            {/* ### Background ### */}
            <img className="sectionBackground--desktop" alt="homeInvestmentStepsBg" src={investmentStepsBg} />
            </section>
    )
}
export default HomeInvestmentSteps;