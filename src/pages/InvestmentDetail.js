/* import React, { useEffect, useState } from "react"; */
import "../assets/css/investmentDetail.css"
import Map from "../components/Investments/Map";
import credentials from "../components/Investments/credentials";
import {withScriptjs,withGoogleMap} from "react-google-maps";
function InvestmentDetail() {
    
    return (
        <div className="investmentDetailPage">
            <h1>Vista en construcción</h1>
            {/* <Map
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`}
                containerElement:<div style={{height:`100%`}}/>
            /> */}
        </div>
    )
}

export default InvestmentDetail;