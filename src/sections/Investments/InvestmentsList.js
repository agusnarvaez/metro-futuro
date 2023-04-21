import { useEffect } from "react";

// COMPONENTS
import InvestmentCard from "../../components/Investments/InvestmentCard";

//* API de contentful
import {reqApi} from "../../client/client"
import { filterItems } from "../../utils/listFunctions"

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