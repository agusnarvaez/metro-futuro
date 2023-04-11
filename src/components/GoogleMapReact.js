// Importo React y Component para hacerlo componente de clase
// Importo Google Maps

import GoogleMapReact from 'google-map-react';
import Marker from 'google-map-react'
import locationIcon from "../assets/img/icons/locationIcon.png";
// Importo credenciales
import credentials from "../credentials";
import React from "react";

export default function Map ({coordinates}) {
    console.log(coordinates)
    return(
        <div className="MapComponent" style={{width: "100%", height: "60vh"}}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: credentials.mapsKey }}
                defaultCenter={{lat: coordinates.lat, lng:coordinates.lon}}
                defaultZoom={16}
                yesIWantToUseGoogleMapApiInternals
            >
            </GoogleMapReact>
        </div>
    )
}
