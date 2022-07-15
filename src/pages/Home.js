// ###### VISTA DE HOME ####
// Importo React
import React, {/* useState, */ useRef/* , useEffect */} from "react";

// > Hoja de estilo
import "../assets/css/home.css";

/** ### Import de componentes ### **/
import HomeAbout from "../components/Home/HomeAbout";
import HomeSlogan from "../components/Home/HomeSlogan";
import HomeInvestmentSteps from "../components/Home/HomeInvSteps";
import HomeOportunity from "../components/Home/HomeOportunity";
import HomeBenefits from "../components/Home/HomeBenefits";
import HomeLearnWithUs from "../components/Home/HomeLearn";
import HomeNews from "../components/Home/HomeNews";
import HomePartners from "../components/Home/HomePartners";
import HomeFaq from "../components/Home/HomeFaq";



function Home(props) {
    const principalInvestment = props.investmentsList[0];
    
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
export default Home;