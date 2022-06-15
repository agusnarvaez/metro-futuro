import React from 'react';
import { NavLink } from 'react-router-dom';
// Background
import learnWithUsBg from "../../assets/img/background/homeLearnWithUsBg.png";

// Visor de videos de Youtube
import ReactPlayer from "react-player";

function HomeLearnWithUs() {

    return (

        <section className="homeLearnWithUs">
                <img className="learnWithUsBg" alt="learnWithUsBackground" src={learnWithUsBg} />
                <div className="homeLearnWithUsVideo">
                    <ReactPlayer
                        className="homeLearnWithUsVideoPlayer"
                        url="https://youtu.be/wX7HmpI8NsY"
                        controls
                        width="110%"
                        height="100%"
                        border-radius="30px"
                        /* volume="0"   */
                        border="none"  
                        loop
                        
                    />
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
    )
}
export default HomeLearnWithUs;