//* ###### VISTA DE HOME ####

//* ### Import de componentes ###
import HomeAbout from "../sections/Home/HomeAbout"
import HomeInvestmentSteps from "../sections/Home/HomeInvSteps"
import HomeOportunity from "../sections/Home/HomeOportunity"
import HomeBenefits from "../sections/Home/HomeBenefits"
import HomeLearnWithUs from "../sections/Home/HomeLearn"
import HomePartners from "../sections/Home/HomePartners"
import HomeFaq from "../sections/Home/HomeFaq"
import HomePress from "../sections/Home/HomePress"
import HelmetData from "../components/HelmetData"

export default function Home({metaData,list,setList,investments,setInvestments}) {


    return (
        <main className="homePage">

            <HelmetData metaData={metaData} />

            <HomeOportunity list={list} setList={setList} investments={investments} setInvestments={setInvestments} />

            <HomeAbout/>

            <HomeInvestmentSteps/>

            <HomeBenefits/>

            <HomePress />

            <HomeLearnWithUs/>

            <HomePartners/>

            <HomeFaq/>

        </main>
    )
}