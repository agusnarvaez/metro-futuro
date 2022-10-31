// Importo React
import {useState, useEffect} from "react";

// Importo useParams para obtener los parametros de la url
import {useParams} from "react-router-dom";

// API de contentful
import reqApi from "../services/getArticles";

//* ### SECCIONES ###
import InvestmentDetailTitle from "../sections/InvestmentDetail/InvestmentDetailTitle";

// Mapa de google
import Map from "../components/Map";

export default function InvestmentDetail({list,setList,metaData}) {
    const params = useParams();
    const investmentId =params.id;
    
    const [investment,setInvestment]=useState({});

    useEffect(() => {
        reqApi(list,setList)
        list.length > 0 ? setInvestment(list[investmentId].fields) : console.log("No hay datos");
        
        console.log(investment)
    }, [list,setList,investmentId,investment,setInvestment]);

    return (
        <main className="investmentDetailPage">
            
            <InvestmentDetailTitle investment={investment}/>
            





            <Map/>
            
        </main>
    )
}