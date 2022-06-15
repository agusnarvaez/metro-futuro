

// Hoja de estilos
import "../assets/css/about.css"








/** #### Import de componentes de página #### **/
import AboutTitle from '../components/About/AboutTitle';
import AboutServices from '../components/About/AboutServices';
import AboutFocus from '../components/About/AboutFocus';
import AboutInfo from '../components/About/AboutInfo';
import AboutSlogan from '../components/About/AboutSlogan';
import AboutTeam from "../components/About/AboutTeam";
function About() {

    return (
        <div className="aboutPage">
            
            <AboutTitle/>

            <AboutServices/>

            <AboutFocus/>

            <AboutInfo/>
            
            <AboutSlogan/>

            <AboutTeam/>
            
        </div>
    )
}

export default About;