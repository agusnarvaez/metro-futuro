import React, { useEffect, useState } from "react";
import "../assets/css/investments.css";
import investmentsTitleBg from "../assets/img/background/investmentsTitleBg.png";
import investmentsPageProjectsCover from "../assets/img/projects/nitaCover.png";
import InvestmentCard from "../components/InvestmentCard";

function Investments(props) {
    const investmentsList= props.investmentsList;
    const [investmentsCards,setInvestmentsCards]=useState([]);
    useEffect(()=>{
            setInvestmentsCards(
                investmentsList.map((investment,i)=>{
                    return <InvestmentCard {...investment} key={i} />
                })
            )
        
    },
    [])
    return (
        <div className="investmentsPage">
            <section className="investmentstPageTitle">
                <img alt="sectionBackground" className="sectionBackground" src={investmentsTitleBg} />
                <h1>
                    Conoce las
                    <font color="#004DFF">propiedades</font>
                </h1>
            </section>
            <section className="investmentsPageList">
                <div className="investmentsPageListFilter">
                    <form>
                        
                    </form>
                </div>
                <div className="investmentsPageProjectsList">
                    {investmentsCards}
                </div>
            </section>
        </div>
    )
}

export default Investments;