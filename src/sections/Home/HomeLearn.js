import React from 'react';
/* import { NavLink } from 'react-router-dom'; */
// Background
import learnWithUsBg from "../../assets/img/background/homeLearnWithUsBg.png";

// Visor de videos de Youtube
import ReactPlayer from "react-player";

function HomeLearnWithUs() {

    return (

        <section id="homeLearnWithUs">
                <img className="sectionBackground--desktop" id="homeLearnWithUsBackground" alt="learnWithUsBackground" src={learnWithUsBg} />
                <div className="youTubeVideo_Container">
                    <ReactPlayer
                        className="youTubeVideo_Player"
                        url="http://youtu.be/wX7HmpI8NsY"
                        controls
                        width="100%"
                        height="100%"
                        border-radius="30px"
                        border="none"  
                        loop
                        
                    />
                </div>
                <div className="sectionInfo" id="homeLearnWithUs_Info">
                    <h4>Aprendé con <font color="#004DFF">Metro Futuro</font></h4>
                    <p>
                        Te ofrecemos una plataforma eLearning online y gratuita para formarse en inversiones inmobiliarias y la tecnología Blockchain.<br /><br />
                        Únete a la academia de Metro Futuro para lograr capitalizar tus ahorros y transformarte en un inversor del Real Estate, la industria con mayor seguridad y menor riesgo.
                    </p>
                    <div className="degradedLink" id="homeLearnWithUs_Link">
                        <div className='degradedLink_TextContainer degradedLink_TextContainer--white'>
                            <a 
                                className="degradedLink_Text"
                                href='https://www.youtube.com/channel/UCmiKhrSZxmtVFlz7wt1dcKw'
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                Ver más
                            </a>
                        </div>
                    </div>
                </div>
            </section>
    )
}
export default HomeLearnWithUs;