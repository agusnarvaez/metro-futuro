import { useEffect } from "react";

// images
// import investmentsPageProjectsCover from "../assets/img/projects/nitaCover.png";

// COMPONENTS
import InvestmentCard from "../../components/Investments/InvestmentCard";
// import investmentsSearchFilterArrow from "../assets/img/icons/investmentsSearchFilterArrow.png";
// import investmentsFilterHomeIcon from "../assets/img/icons/investmentsFilterHomeIcon.png"

import reqApi from "../../services/getArticles";

export default function Investments({list,setList}) {
    useEffect(()=>{
        reqApi(list,setList)

    },[/* listClass,investmentSearch */list,setList])
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
                        <p><img alt="investmentsFilterHomeIcon" className="investmentsFilterHomeIcon" src={investmentsFilterHomeIcon}/>Precio</p>
                        {priceFilterList}
                        <img className="investmentsSearchFilterArrow" alt="investmentsSearchFilterArrow" src={investmentsSearchFilterArrow}/>
                    </div>
                </form>
            </div> */}
            
            {list.map((article,key)=>{
                console.log(key)
                
                return(<InvestmentCard investment={article.fields} index={key} />)
            })}
        </section>
    )
}