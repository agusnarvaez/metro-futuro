/** ##### Página ABOUT #### **/

/** #### COMPONENTS #### **/
import AboutTitle from '../sections/About/AboutTitle';
import AboutServices from '../sections/About/AboutServices';
import AboutFocus from '../sections/About/AboutFocus';
import AboutInfo from '../sections/About/AboutInfo';
import AboutSlogan from '../sections/About/AboutSlogan';
import AboutTeam from "../sections/About/AboutTeam";


export default function About() {

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
