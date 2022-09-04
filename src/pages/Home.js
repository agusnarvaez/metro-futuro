//* ###### VISTA DE HOME ####

//* MÉTODOS DE REACT
import { useRef } from "react";

//* REACT-HELMET
import { Helmet } from 'react-helmet';

/** ### Import de componentes ### **/
import HomeAbout from "../sections/Home/HomeAbout";
import HomeSlogan from "../sections/Home/HomeSlogan";
import HomeInvestmentSteps from "../sections/Home/HomeInvSteps";
import HomeOportunity from "../sections/Home/HomeOportunity";
import HomeBenefits from "../sections/Home/HomeBenefits";
import HomeLearnWithUs from "../sections/Home/HomeLearn";
import HomeNews from "../sections/Home/HomeNews";
import HomePartners from "../sections/Home/HomePartners";
import HomeFaq from "../sections/Home/HomeFaq";

export default function Home({investmentsList}) {

    
    const principalInvestment = investmentsList[0];
    
    const sloganRef = useRef();
    /* const [scrollTransition,setScrollTransition]=useState('scrollInitial');

    useEffect(() => {
        const handleScroll = ()=>{
            const slogan = sloganRef.current;
            const sloganCoordinates=slogan.getBoundingClientRect();
            const sloganY = sloganCoordinates.y;
            const topAppear = sloganY < 500 ? 'topAppear':'scrollInitial';
            
            setScrollTransition(topAppear);
            
            /* console.log(sloganY + ' ' + scrollTransition);     */
      /*      
        }


        window.addEventListener("scroll",handleScroll);

        return ()=>{
            window.removeEventListener("scroll",handleScroll);
        }
    },[scrollTransition]); */
    return (
        <main className="homePage">
            
            <Helmet>
                <title>Metro Futuro | Inversión en Real Estate</title>
                <meta name="description" content="Enterate de las últimas novedades en Real Estate y como invertir en este fantástico mundo!" />
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="Inicio"/>
                <meta property="og:image" content="/public/assets/images/icons/metroFuturoLogoTag.png"/>
                <meta property="og:image:alt" content="Logo Metro Futuro"/>
                <meta property="og:description" content="Enterate de las últimas novedades en Real Estate y como invertir en este fantástico mundo!"/>
                <meta property="og:site_name" content="Metro Futuro"/>
            </Helmet>

            <HomeAbout/>

            <HomeOportunity principalInvestment={principalInvestment} />
            
            <HomeSlogan ref={sloganRef} /*  scrollTransition={scrollTransition}  *//>

            <HomeInvestmentSteps/>
            
            <HomeBenefits/>

            <HomeLearnWithUs/>

            <HomeNews/>
            
            <HomePartners/>

            <HomeFaq/>
            
        </main>
    )
}