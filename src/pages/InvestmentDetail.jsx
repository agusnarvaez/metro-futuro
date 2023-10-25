// Importo React
//* Importo Hooks y ReactGA (Google Anlytics)
import {useState, useEffect} from "react";

//* Importo useParams para obtener los parametros de la url
import {useParams,useNavigate} from "react-router-dom"

//* API de contentful

//* ### SECCIONES ###
import InvestmentDetailTitle from "../sections/InvestmentDetail/InvestmentDetailTitle";
import InvestmentDetailMedia from "../sections/InvestmentDetail/InvestmentDetailMedia";
import InvestmentDetailInfo from "../sections/InvestmentDetail/InvestmentDetailInfo";
import InvestmentDetailResume from "../sections/InvestmentDetail/InvestmentDetailResume";
import InvestmentDetailDownloads from "../sections/InvestmentDetail/InvestmentDetailDownloads";
import InvestmentDetailValue from "../sections/InvestmentDetail/InvestmentDetailValue";
import DegradedLink from "../components/DegradedLink";
// Mapa de google
import Map from "../components/GoogleMapReact";

import HelmetData from "../components/HelmetData"
import {itemHasEntries, handleListItems} from "../utils/listFunctions"
export default function InvestmentDetail({list,setList,metaData,investments,setInvestments}) {
    const params = useParams();
    const investmentId =params.id;

    let navigate = useNavigate()

    const [investment,setInvestment]=useState({});
    const [newMetaData,setNewMetaData] = useState(metaData)

    useEffect(() => {

        handleListItems(list,setList,investments,setInvestments,investmentId,investment,setInvestment,newMetaData,setNewMetaData,navigate)

    }, [list,setList,investmentId,investment,setInvestment,investments,setInvestments,newMetaData,setNewMetaData,navigate]);

    return (
        <main className="investmentDetailPage">

            <HelmetData metaData={newMetaData}/>

            <InvestmentDetailTitle investment={investment}/>

            <InvestmentDetailMedia investment={investment}/>

            <InvestmentDetailInfo investment={investment}/>

            <InvestmentDetailResume investment={investment}/>

            <InvestmentDetailDownloads investment={investment}/>

            <InvestmentDetailValue investment={investment}/>

            {/* <DegradedLink  text="¡Quiero invertir!" route={investment.platformLink} backgroundColor="" id={degLinkId} /> */}

            {itemHasEntries(investment)?<Map coordinates={investment.mapCoordinates}/>:""}

        </main>
    )
}