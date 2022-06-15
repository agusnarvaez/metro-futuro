import React from 'react';
import { NavLink } from 'react-router-dom';
// Background
import livingRoom from '../../assets/img/livingRoom.png';



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
                <img className="homeAboutCover" src={livingRoom} alt="livingRoom" />
            </section>
    )
}
export default HomeAbout;