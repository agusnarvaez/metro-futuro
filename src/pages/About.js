/** ##### Página ABOUT #### **/

// Importo React
import React from "react";
// Hoja de estilos
import "../assets/css/about.css"








/** #### Import de componentes de página #### **/
import AboutTitle from '../sections/About/AboutTitle';
import AboutServices from '../sections/About/AboutServices';
import AboutFocus from '../sections/About/AboutFocus';
import AboutInfo from '../sections/About/AboutInfo';
import AboutSlogan from '../sections/About/AboutSlogan';
import AboutTeam from "../sections/About/AboutTeam";
function About() {

    return (
        <main id="aboutPage">
            
            <AboutTitle/>

            <AboutServices/>

            <AboutFocus/>

            <AboutInfo/>
            
            <AboutSlogan/>

            <AboutTeam/>
            
        </main>
    )
}

export default About;