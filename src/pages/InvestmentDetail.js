// Importo React
import React from "react";
// Hoja de estilos
import "../assets/css/investmentDetail.css"

// Mapa de google
import Map from "../components/Investments/Map";
/*
import credentials from "../components/Investments/credentials";
import {withScriptjs,withGoogleMap} from "react-google-maps"; */


function InvestmentDetail() {
    
    return (
        <main className="investmentDetailPage">
            <h1>Vista en construccion</h1>
            {/* <Map
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`}
                containerElement:<div style={{height:`100%`}}/>
            /> */}
            <Map/>
        </main>
    )
}

export default InvestmentDetail;