// ###### VISTA DE HOME ####
// Importo React
import React from "react";

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
    
    return (
        <main className="homePage">

            <HomeAbout/>

            <HomeSlogan/>

            <HomeInvestmentSteps/>
            
            <HomeOportunity principalInvestment={principalInvestment} />

            <HomeBenefits/>

            <HomeLearnWithUs/>

            <HomeNews/>
            
            <HomePartners/>

            <HomeFaq/>
            
        </main>
    )
}
export default Home;