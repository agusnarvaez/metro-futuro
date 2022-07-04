import React from 'react';
import { NavLink } from 'react-router-dom';
// Background
import livingRoom from '../../assets/img/livingRoom.png';

import homeAboutCoverMobile from '../../assets/img/background/homeAboutCoverMobile.png';

function HomeAbout() {
    return (

        <section className="homeAbout">
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
                <img className="homeAboutCoverDesktop"  src={livingRoom} alt="livingRoom" />
                <img className="homeAboutCoverMobile" src={homeAboutCoverMobile} alt="livingRoom" />
            </section>
    )
}
export default HomeAbout;