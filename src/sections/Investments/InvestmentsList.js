import { useEffect } from "react";

// COMPONENTS
import InvestmentCard from "../../components/Investments/InvestmentCard";
// import investmentsSearchFilterArrow from "../assets/img/icons/investmentsSearchFilterArrow.png";
// import investmentsFilterHomeIcon from "../assets/img/icons/investmentsFilterHomeIcon.png"

import {reqApi,filterItems} from "../../services/getArticles";

export default function InvestmentsList({list,setList,investments,setInvestments}) {
    useEffect(()=>{
        reqApi(list,setList)
        if(investments.length===0){
            filterItems(list,setInvestments)
        }
    },[list,setList,investments,setInvestments])
    return (
        <section className="investmentsPageList">
            {investments.map((article,key)=>{
                return(<InvestmentCard investment={article.fields} index={key} key={key} />)
            })}
        </section>
    )
}