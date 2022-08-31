// Importo React
import {useState, useEffect} from "react";

// Importo useParams para obtener los parametros de la url
import {useParams} from "react-router-dom";

// Hoja de estilos


// Mapa de google
import Map from "../components/Map";

export default function InvestmentDetail({investmentsList}) {
    const params = useParams();
    const [investmentId,setInvestmentId] = useState(params.id);
    const investment = investmentsList[investmentId];
    useEffect(() => {
        console.log(investment);
    }, [investmentId]);

    return (
        <main className="investmentDetailPage">

            <section className="investmentDetailPageTitle">
                <div className="investmentDetailPageTitleInfo">
                    <h1>{investment.title}</h1>
                    <h2>Dirección, Localidad</h2>
                </div>
                <div className="investmentDetailPageTitleShare">

                </div>
            </section>

            <section className="investmentDetailPageMedia">
                <div className="investmentDetailPageMediaImage"></div>
                <div className="investmentDetailPageMediaVideo"></div>
                <div className="investmentDetailPageMedia360"></div>
                <div className="investmentDetailPageMediaPano"></div>
                <div className="investmentDetailPageMediaSelect"></div>
            </section>

            <section className="investmentDetailPageInfo">

            </section>

            <section className="investmentDetailPageResume">

            </section>
            
            <Map/>
        </main>
    )
}