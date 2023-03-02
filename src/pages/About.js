//* ##### Página ABOUT ####

//* Importo Hooks y ReactGA (Google Anlytics)
import {useEffect} from "react";
import ReactGA from 'react-ga';

//* #### COMPONENTS ####
import AboutTitle from '../sections/About/AboutTitle';
import AboutServices from '../sections/About/AboutServices';
import AboutFocus from '../sections/About/AboutFocus';
import AboutInfo from '../sections/About/AboutInfo';
import AboutSlogan from '../sections/About/AboutSlogan';
import AboutTeam from "../sections/About/AboutTeam";
import HelmetData from "../components/HelmetData";

export default function About({metaData}) {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname);
      }, []);
    return (
        <main id="aboutPage">
            
            <HelmetData metaData={metaData} />

            <AboutTitle/>

            <AboutServices/>

            <AboutFocus/>

            <AboutInfo/>
            
            <AboutSlogan/>

            <AboutTeam/>
            
        </main>
    )
}
