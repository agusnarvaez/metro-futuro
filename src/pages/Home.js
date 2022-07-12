// ###### VISTA DE HOME ####
// Importo React
import React, {useState, useRef, useEffect} from "react";

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
    
    const [scrollTransition,setScrollTransition]=useState(" ");
    const sloganRef = useRef();

    useEffect( () => {
        const handleScroll = ()=>{
            const slogan = sloganRef.current;
            const sloganCoordinates=slogan.getBoundingClientRect();
            const sloganY = sloganCoordinates.y;
            if(sloganY<=200){
                setScrollTransition("topAppear");
                console.log(scrollTransition);
            }
            
        }



        window.addEventListener("scroll",handleScroll);

        return ()=>{
            window.removeEventListener("scroll",handleScroll);
        }
    },[])
    return (
        <main className="homePage">

            <HomeAbout/>

            <HomeSlogan ref={sloganRef} scrollTransition={scrollTransition} />

            <HomeInvestmentSteps/>
            
            <HomeBenefits/>

            <HomeOportunity principalInvestment={principalInvestment} />
            
            <HomeLearnWithUs/>

            <HomeNews/>
            
            <HomePartners/>

            <HomeFaq/>
            
        </main>
    )
}
export default Home;