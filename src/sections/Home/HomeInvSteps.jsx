import {useState} from 'react';
import DegradedLink from '../../components/DegradedLink';
// Componentes
import HomeInvStepsCard from "./HomeInvStepsCard";

// Background
import investmentStepsBg from "../../assets/img/background/homeInvestmentStepsBg.svg";

// Flechas carrousel
import rightArrowHomeCarrousel from "../../assets/img/icons/rightArrow.png"
import leftArrowHomeCarrousel from "../../assets/img/icons/leftArrow.png"

// Info Carrousel
import carrouselInfo from "../../data/homeCarrouselInfo";

export default function HomeInvestmentSteps() {
    
    const [carrousel, setCarrousel] = useState(true);

    return (

        <section id="homeInvestmentSteps">
                <div className="sectionInfo_subsection sectionInfo_subsection--column">
                    <h2 id="homeInvestmentSteps_subTitle" className="section_subTitle section_subTitle--left">¿Como <font color="#004DFF">invertir</font> en simples pasos?</h2>
                    <DegradedLink text="Invierte" id="homeInvestmentSteps_desktopLink" route="https://app.metro-futuro.com/project-detail/f63c7d96-38f4-410c-bcdd-30eecd3065c7" backgroundColor="white"/>
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
                    <DegradedLink text="Invierte" id="homeInvestmentSteps_mobileLink" route="https://app.metro-futuro.com/project-detail/f63c7d96-38f4-410c-bcdd-30eecd3065c7" backgroundColor="white"/>
                </div>
            {/* ### Background ### */}
            <img className="sectionBackground--desktop" alt="homeInvestmentStepsBg" title='homeInvestmentStepsBg' src={investmentStepsBg} loading="lazy"/>
            </section>
    )
}