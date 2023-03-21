// Importo React
//* Importo Hooks y ReactGA (Google Anlytics)
import {useState, useEffect} from "react";

//* Importo useParams para obtener los parametros de la url
import {useParams,useNavigate} from "react-router-dom";

//* API de contentful
import {reqApi,filterItems} from "../services/getArticles";

//* ### SECCIONES ###
import InvestmentDetailTitle from "../sections/InvestmentDetail/InvestmentDetailTitle";
import InvestmentDetailMedia from "../sections/InvestmentDetail/InvestmentDetailMedia";
import InvestmentDetailInfo from "../sections/InvestmentDetail/InvestmentDetailInfo";
import InvestmentDetailResume from "../sections/InvestmentDetail/InvestmentDetailResume";
import InvestmentDetailDownloads from "../sections/InvestmentDetail/InvestmentDetailDownloads";
import InvestmentDetailValue from "../sections/InvestmentDetail/InvestmentDetailValue";
import DegradedLink from "../components/DegradedLink";
// Mapa de google
import Map from "../components/Map";

import HelmetData from "../components/HelmetData"

export default function InvestmentDetail({list,setList,metaData,investments,setInvestments}) {
    const params = useParams();
    const investmentId =params.id;
    
    let navigate = useNavigate()
    
    const [investment,setInvestment]=useState({});
    const [newMetaData,setNewMetaData] = useState(metaData)
    const degLinkId="degradedLink--inverted"

    useEffect(() => {
        if(isNaN(params.id)){
			navigate("/error")
		}else {
            reqApi(list,setList)
            if(investments.length===0){
                filterItems(list,setInvestments)
            }
            else if(investments.length>0){
                if(investments[investmentId]===undefined){
                    navigate("/error")
                }else{
                    setInvestment(investments[investmentId].fields)
                    if(Object.entries(investment).length>0&&newMetaData.title===""){
                        setNewMetaData({
                            ...newMetaData,
                            title: investment.title,
                            description:investment.shortDescription,
                    })
                    }
                }
            }
        }   
    }, [list,setList,investmentId,investment,setInvestment,investments,setInvestments,newMetaData,setNewMetaData,navigate,params.id]);

    return (
        <main className="investmentDetailPage">
            
            <HelmetData metaData={newMetaData}/>

            <InvestmentDetailTitle investment={investment}/>

            <InvestmentDetailMedia investment={investment}/>
            
            <InvestmentDetailInfo investment={investment}/>

            <InvestmentDetailResume investment={investment}/>

            <InvestmentDetailDownloads investment={investment}/>

            <InvestmentDetailValue investment={investment}/>

            <DegradedLink  text="¡Quiero invertir!" route={investment.platformLink} backgroundColor="" id={degLinkId} /* onFocus={changeDegLink} onBlur={changeDegLink} *//>
            
            {Object.entries(investment).length>0?<Map coordinates={investment.mapCoordinates}/>:""}

        </main>
    )
}