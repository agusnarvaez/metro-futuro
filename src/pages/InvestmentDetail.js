// Importo React
import React, {useState, useEffect} from "react";
// Importo useParams para obtener los parametros de la url
import {useParams} from "react-router-dom";

// Hoja de estilos
import "../assets/css/investmentDetail.css"

// Mapa de google
import Map from "../components/Investments/Map";

function InvestmentDetail(props) {
    const params = useParams();
    const investmentsList= props.investmentsList;
    const investment = investmentsList[params.id];
    
    useEffect(() => {
        console.log(investment);
    }, [params]);

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

export default InvestmentDetail;