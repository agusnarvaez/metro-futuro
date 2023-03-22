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
            {/* <div className="investmentsPageListFilter">
                <form>
                    <div className={investmentSearchClass}>
                        <input type="text" name="search" placeholder="Buscar"  id="investmentsSearch"
                            onChange={(e)=>{
                                setInvestmentSearch(e.target.value);
                            }}
                            onFocus={()=>{
                                setInvestmentSearchClass("investmentsSearchFocus");
                            }}
                            onBlur={()=>{
                                setInvestmentSearchClass("investmentsSearch");
                            }}
                        />
                    </div>
                    <div name="Precio" className="priceFilter"
                    onClick={()=>{
                        setListClass(
                            (listClass=="")?
                            "priceFilterList":"");
                    }}>
                        <p><img alt="investmentsFilterHomeIcon" title="investmentsFilterHomeIcon" className="investmentsFilterHomeIcon" src={investmentsFilterHomeIcon}/>Precio</p>
                        {priceFilterList}
                        <img className="investmentsSearchFilterArrow" alt="investmentsSearchFilterArrow" title="investmentsSearchFilterArrow" src={investmentsSearchFilterArrow}/>
                    </div>
                </form>
            </div> */}

            {investments.map((article,key)=>{
                return(<InvestmentCard investment={article.fields} index={key} key={key} />)
            })}
        </section>
    )
}