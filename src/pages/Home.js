//* ###### VISTA DE HOME ####



//* ### Import de componentes ###
import HomeAbout from "../sections/Home/HomeAbout";
import HomeSlogan from "../sections/Home/HomeSlogan";
import HomeInvestmentSteps from "../sections/Home/HomeInvSteps";
import HomeOportunity from "../sections/Home/HomeOportunity";
import HomeBenefits from "../sections/Home/HomeBenefits";
import HomeLearnWithUs from "../sections/Home/HomeLearn";
import HomeNews from "../sections/Home/HomeNews";
import HomePartners from "../sections/Home/HomePartners";
import HomeFaq from "../sections/Home/HomeFaq";

import HelmetData from "../components/HelmetData";

export default function Home({metaData,list,setList,investments,setInvestments}) {

    
    return (
        <main className="homePage">
            
            <HelmetData metaData={metaData} />

            <HomeAbout/>

            <HomeOportunity list={list} setList={setList} investments={investments} setInvestments={setInvestments} />
            
            <HomeSlogan  /*  scrollTransition={scrollTransition}  *//>

            <HomeInvestmentSteps/>
            
            <HomeBenefits/>

            <HomeLearnWithUs/>

            <HomeNews/>
            
            <HomePartners/>

            <HomeFaq/>
            
        </main>
    )
}