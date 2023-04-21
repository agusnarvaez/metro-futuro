
//* Importo Hooks
import { useEffect,useState } from "react";
//* API de contentful
import { setFirstItem } from "../../utils/listFunctions"
import { getFullList } from "../../client/client";

//* Background

//* Componentes

import DegradedNavLink from "../../components/DegradedNavLink";
//* Íconos

export default function HomeOportunity({list,setList,investments,setInvestments}) {

    const [investment,setInvestment]=useState({});

    useEffect(()=>{
        getFullList(list,setList,investments,setInvestments)
        
        setFirstItem(investments,investment,setInvestment)
    },[list,setList,investments,setInvestments,investment,setInvestment])

    return (
        <section className="sectionInfo" id="homeOportunity">
            {Object.entries(investment).length!==0? <img src={investment.photos[0].fields.file.url} alt="investmentCover" title="investmentCover" className='sectionCover' loading="lazy"/>:""}
            {Object.entries(investment).length!==0?
                <div className='sectionInfo'>

                    <h2 className='section_subTitle'>Invierte en inmuebles tokenizados en <span className="degradedText">{investment.country}</span></h2> 

                    <p className="section_paragraph">Con rendimientos de más del {investment.rentProfit}% anual</p>

                    <DegradedNavLink 
                        id="homeOportunityLink"
                        text="Quiero invertir"
                        backgroundColor="white"
                        route={`/inmuebles/${investment.url}`}
                    />

                </div>
                :""}
        </section>
    )
}