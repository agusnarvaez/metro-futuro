import {useState} from 'react';
import { NavLink } from 'react-router-dom';

// Componentes
import HomeInvStepsCard from "./HomeInvStepsCard";

// Background
import investmentStepsBg from "../../assets/img/background/homeInvestmentStepsBg.png";

// Flechas carrousel
import rightArrowHomeCarrousel from "../../assets/img/icons/rightArrow.png"
import leftArrowHomeCarrousel from "../../assets/img/icons/leftArrow.png"

// Info Carrousel
import carrouselInfo from "../../data/homeCarrouselInfo";

export default function HomeInvestmentSteps() {
    
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
                            <NavLink className="degradedLink_Text" to='/contact'>
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
                            <NavLink className="degradedLink_Text" to='/contact'>
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