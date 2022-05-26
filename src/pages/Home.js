/* import React, { useEffect, useState } from "react"; */
import "../assets/css/home.css"
import { NavLink } from 'react-router-dom'
import livingRoom from '../assets/img/livingRoom.png';
function Home() {
    console.log(livingRoom);
    return (
        <div className="homePage">
            <div className="homeAbout">
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
            </div>
            <div className="homeSlogan">
                <h2>Invierte en España desde 100 euros</h2>
            </div>
            <div className="homeInvestmentSteps">
                <div className="homeInvestments">
                    <h3>¿Como <font color="#004DFF">invertir</font> en simples pasos?</h3>
                    <div className="homeInvestmensInfoLink">
                        <div>
                            <NavLink to='/investments'>
                                Invierte
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="homeInvestmentStepsCarrousel">

                </div>
            </div>
        </div>
    )
}

export default Home;