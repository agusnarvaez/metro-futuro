import {useState} from 'react';
import DegradedLink from '../../components/DegradedLink'
import DegradedNavLink from '../../components/DegradedNavLink'
// Componentes
import HomeInvStepsCard from "./HomeInvStepsCard"

// Background
import investmentStepsBg from "../../assets/img/background/homeInvestmentStepsBg.svg"

// Flechas carrousel
import rightArrowHomeCarrousel from "../../assets/img/icons/rightArrow.png"
import leftArrowHomeCarrousel from "../../assets/img/icons/leftArrow.png"

// Info Carrousel
import carrouselInfo from "../../data/homeCarrouselInfo"

export default function HomeInvestmentSteps() {

    const [carrousel, setCarrousel] = useState(true);

    return (

        <section id="homeInvestmentSteps">
                <div className="sectionInfo_subsection sectionInfo_subsection--column">
                    <h2 id="homeInvestmentSteps_subTitle" className="section_subTitle section_subTitle--left">¿Cómo <font color="#004DFF">invertir</font> en simples pasos?</h2>
                    <DegradedNavLink text="Invierte" id="homeInvestmentSteps_desktopLink" route="/contacto" backgroundColor="white"/>
                </div>
                <div className="sectionInfo_subsection sectionInfo_subsection--column" id='homeCarrousel'>
                    <div className="carrouselNav" id="homeCarrouselNav">
                        <div className="carrouselNav_arrowContainer"
                            onClick={() => setCarrousel(!carrousel)}
                        >
                            <div>
                                <img src={leftArrowHomeCarrousel} alt="leftArrowNav" title='leftArrowNav' loading="lazy" type='img/svg'/>
                            </div>
                        </div>
                        <div className="carrouselNav_arrowContainer"
                            onClick={() => setCarrousel(!carrousel)}

                        >
                            <div>
                                <img src={rightArrowHomeCarrousel} alt="rightArrowNav" title='rightArrowNav'loading="lazy" />
                            </div>
                        </div>
                    </div>
                    <div className="carrouselContainer">
                        <div
                            className={carrousel ? "carrouselContainer_mobil carrousel_mobil--desktop" : "carrouselContainer_mobil carrouselContainer_mobil--moved carrousel_mobil--desktop"}
                        >
                            {carrouselInfo.map((card,key) => <HomeInvStepsCard card={card} key={key} /> )}
                        </div>
                        <div
                            className={carrousel ? "carrouselContainer_mobil carrousel_mobil--mobile" : "carrouselContainer_mobil carrouselContainer_mobil--moved carrousel_mobil--mobile"}
                        >
                            {carrouselInfo.map((card,key) => <HomeInvStepsCard card={card} key={key} />)}
                        </div>
                    </div>
                    <DegradedNavLink text="Invierte" id="homeInvestmentSteps_mobileLink" route="/inmuebles" backgroundColor="white"/>
                </div>
            {/* ### Background ### */}
            <img className="sectionBackground--desktop" alt="homeInvestmentStepsBg" title='homeInvestmentStepsBg' src={investmentStepsBg} loading="lazy"/>
            </section>
    )
}