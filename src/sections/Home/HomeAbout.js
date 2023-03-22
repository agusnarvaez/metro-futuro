import React from 'react';
import { NavLink } from 'react-router-dom';
// Background
import livingRoom from '../../assets/img/livingRoom.jpg';

import homeAboutCoverMobile from '../../assets/img/background/homeAboutCoverMobile.svg';

export default function HomeAbout() {
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
                            Somos una empresa global de inversiones inmobiliarias entre Europa y LATAM con tecnología blockchain
                    </p>
                    <div className="degradedLink" id='homeAboutLink'>
                        <div className='degradedLink_TextContainer degradedLink_TextContainer--lightGray' id="homeAboutInfoLink">
                            <NavLink className="degradedLink_Text" to='/sobre-nosotros'>
                                Conocenos
                            </NavLink>
                        </div>
                    </div>
                </div>


                {/* Background */}
                <img className="sectionBackground--desktop"  src={livingRoom} alt="livingRoom" title='livingRoom' />
                <img className="sectionBackground--mobile" src={homeAboutCoverMobile} alt="sectionBackground" title='sectionBackground' />
            </section>
    )
}