import { useEffect, useState } from "react";

// images
import investmentsTitleBg from "../assets/img/background/investmentsTitleBg.png";
// import investmentsPageProjectsCover from "../assets/img/projects/nitaCover.png";

// COMPONENTS
//import InvestmentCard from "../sections/Investments/InvestmentCard";
// import investmentsSearchFilterArrow from "../assets/img/icons/investmentsSearchFilterArrow.png";
// import investmentsFilterHomeIcon from "../assets/img/icons/investmentsFilterHomeIcon.png"

import reqApi from "../services/getArticles";

export default function Investments({list,setList}) {
    //const [investmentsCards,setInvestmentsCards]=useState([]);
    //const [listClass,setListClass]=useState("");
    //const [priceFilterList,setPriceFilterList]=useState([]);
    //const [investmentSearch,setInvestmentSearch] = useState("");
    // const [investmentSearchClass,setInvestmentSearchClass] = useState("investmentsSearch");
    useEffect(()=>{
        reqApi(list,setList)
            .then( console.log(list))
            /* console.log(investMentsApi) */
            //* Algoritmo de buscador
            /* if(investmentSearch===""){
                setInvestmentsCards(
                    list.map((investment,i)=>{
                        return <InvestmentCard {...investment} key={i} />
                    })
                )
            }else{
                setInvestmentsCards(
                    list.filter((investment)=>(
                    investment.title.toLowerCase().includes(investmentSearch.toLowerCase())||investment.address.toLowerCase().includes(investmentSearch.toLowerCase())
                )).map((investment,i) =>{
                        return <InvestmentCard {...investment} key={i} />
                    })
                )
            } */

            /* setPriceFilterList(
                <ul className={listClass}>
                    <li><br></br></li>
                    <li>$0-$500</li>
                    <li>$500-$1000</li>
                    <li>$1000-$1500</li>
                    <li>$2000-$2500</li>
                    <li>$2500-$3000</li>
                    <li>+$3000</li>
                </ul>
            ) */
            /* console.log(investmentSearch); */
    },
    [/* listClass,investmentSearch */list,setList])
    return (
        <main className="investmentsPage">
            <section className="investmentstPageTitle">
                <img alt="sectionBackground" className="sectionBackground" src={investmentsTitleBg} />
                <h1>
                    Conoce las
                    <font color="#004DFF">oportunidades inmobiliarias</font>
                </h1>
            </section>
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
                {/* <div className="investmentsPageProjectsList">
                    {investmentsCards}
                </div> */}
            </section>
        </main>
    )
}