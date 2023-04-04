// Importo React y Component para hacerlo componente de clase
// Importo Google Maps

import GoogleMapReact from 'google-map-react';
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
                markers={[{lat: coordinates.lat, lng:coordinates.lon}]}
            >
                
            </GoogleMapReact>
        </div>
    )
}
