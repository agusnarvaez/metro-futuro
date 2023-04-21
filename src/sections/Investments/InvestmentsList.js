import { useEffect } from "react";

// COMPONENTS
import InvestmentCard from "../../components/Investments/InvestmentCard";

//* API de contentful

import {getFullList} from "../../client/client";
export default function InvestmentsList({list,setList,investments,setInvestments}) {
    useEffect(()=>{
        
        getFullList(list,setList,investments,setInvestments)

    },[list,setList,investments,setInvestments])
    return (
        <section className="investmentsPageList">
            {investments.map((article,key)=>{
                return(<InvestmentCard investment={article.fields} index={key} key={key} />)
            })}
        </section>
    )
}