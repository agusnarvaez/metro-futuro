import React from 'react';
import { NavLink } from 'react-router-dom';
// Background
import livingRoom from '../../assets/img/livingRoom.png';

import homeAboutCoverMobile from '../../assets/img/background/homeAboutCoverMobile.png';

function HomeAbout() {
    return (

        <section id="homeAbout">
                <div className="sectionInfo">
                    <h2 
                        className='section_subTitle blackText'
                        id="homeAboutSubtitle">
                            Inversiones por M<sup>2</sup>
                    </h2>
                    <p
                        className='section_paragraph blackText'
                        id="homeAboutParagraph">
                            Somos una empresa global de inversiones inmobiliarias entre Europa y LATAM con tecnología blockchain y crowdfunding
                    </p>
                    <div className="degradedLink" id='homeAboutLink'>
                        <div className='degradedLink_TextContainer degradedLink_TextContainer--lightGray' id="homeAboutInfoLink">
                            <NavLink className="degradedLink_Text" to='/about'>
                                Más información
                            </NavLink>
                        </div>
                    </div>
                </div>


                {/* Background */}
                <img className="sectionBackground--desktop"  src={livingRoom} alt="livingRoom" />
                <img className="sectionBackground--mobile" src={homeAboutCoverMobile} alt="sectionBackground" />
            </section>
    )
}
export default HomeAbout;