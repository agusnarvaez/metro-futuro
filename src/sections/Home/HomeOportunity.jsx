
//* Importo Hooks
import { useEffect,useState } from "react";
//* API de contentful
import { setLastItem } from "../../utils/listFunctions"
import { getFullList } from "../../client/client";

//* Background

//* Componentes

import DegradedNavLink from "../../components/DegradedNavLink";
//* Íconos

export default function HomeOportunity({list,setList,investments,setInvestments}) {

    const [investment,setInvestment]=useState({});

    //Función que pase número con . a ,
    function formatNumber(num) {
        return num.toString().replace('.', ',')
    }

    useEffect(()=>{
        getFullList(list,setList,investments,setInvestments)

        setLastItem(investments,investment,setInvestment)
    },[list,setList,investments,setInvestments,investment,setInvestment])

    return (
        <section className="sectionInfo" id="homeOportunity">
            {Object.entries(investment).length!==0? <img src={investment.photos[0].fields.file.url} alt="investmentCover" title="investmentCover" className='sectionCover' loading="lazy"/>:""}
            {Object.entries(investment).length!==0?
                <div className='sectionInfo'>

                    <h2 className='section_subTitle'>Invierte en inmuebles tokenizados en <span className="degradedText">{investment.country}</span></h2>

                    <p className="section_paragraph">Genera ingresos pasivos con rendimientos de mas del {/* {formatNumber(investment.rentProfit)} */}10% anual</p>

                    <DegradedNavLink
                        id="homeOportunityLink"
                        text="Quiero invertir"
                        backgroundColor="white"
                        route={`/inmuebles`}
                    />

                </div>
                :""}
        </section>
    )
}