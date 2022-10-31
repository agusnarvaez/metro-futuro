// Importo React
import {useState, useEffect} from "react";

// Importo useParams para obtener los parametros de la url
import {useParams} from "react-router-dom";

// API de contentful
import {reqApi,filterItems} from "../services/getArticles";

//* ### SECCIONES ###
import InvestmentDetailTitle from "../sections/InvestmentDetail/InvestmentDetailTitle";
import InvestmentDetailInfo from "../sections/InvestmentDetail/InvestmentDetailInfo";
// Mapa de google
import Map from "../components/Map";

export default function InvestmentDetail({list,setList,metaData,investments,setInvestments}) {
    const params = useParams();
    const investmentId =params.id;
    
    const [investment,setInvestment]=useState({});

    useEffect(() => {
        reqApi(list,setList)
        if(investments.length===0){
            filterItems(list,setInvestments)
        }
        investments.length > 0 ? setInvestment(investments[investmentId].fields) : console.log("No hay datos");
        
        console.log(investment)
    }, [list,setList,investmentId,investment,setInvestment,investments,setInvestments]);

    return (
        <main className="investmentDetailPage">
            
            <InvestmentDetailTitle investment={investment}/>
            

            <InvestmentDetailInfo investment={investment}/>



            <Map/>

        </main>
    )
}