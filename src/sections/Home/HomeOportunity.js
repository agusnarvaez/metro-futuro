
//* Importo Hooks
import { useEffect,useState } from "react";
import {reqApi,filterItems} from "../../services/getArticles";

import {useNavigate} from "react-router-dom";
//* Background

//* Componentes
/* import DegradedLink from "../DegradedLink"; */
import DegradedNavLink from "../../components/DegradedNavLink";
//* Íconos

export default function HomeOportunity({list,setList,investments,setInvestments}) {

    const [investment,setInvestment]=useState({});

    let navigate = useNavigate()

    useEffect(()=>{
        if(list.length===0){
            reqApi(list,setList)
        }else{
            if(investments.length===0){
                filterItems(list,setInvestments)
            }
            else if(investments.length>0){
                    if(investments[0]===undefined){
                        navigate("/error")
                    }else{
                        if(investment!==investments[0].fields){
                            setInvestment(investments[0].fields)
                        }else{
                            console.log(investment.photos[0].fields.file.url)
                        }
                    }
            }
        }
    },[list,setList,investments,setInvestments,investment,setInvestment,navigate ])

    return (
        <section className="sectionInfo" id="homeOportunity">
            {Object.entries(investment).length!==0? <img src={investment.photos[0].fields.file.url} alt="investmentCover" title="investmentCover" className='sectionCover'/>:""}
            {Object.entries(investment).length!==0?
                <div className='sectionInfo'>

                    <h2 className='section_subTitle'>Invierte en inmuebles tokenizados en <span className="degradedText">{investment.country}</span></h2> 

                    <p className="section_paragraph">Con rendimientos de más del {investment.rentProfit}% anual</p>

                    <DegradedNavLink 
                        id="homeOportunityLink"
                        text="Quiero invertir"
                        backgroundColor="white"
                        route="/inmuebles/0" 
                    />

                </div>
                :""}
        </section>
    )
}