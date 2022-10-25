// Importo React y Component para hacerlo componente de clase
import React, {Component} from "react";
// Importo Google Maps
import GoogleMaps from "simple-react-google-maps";
// Importo credenciales
import credentials from "../credentials";

export default class Map extends Component {
    render() {
        return(
            <div className="MapComponent">
                <GoogleMaps
                    style={{width: "100%", height: "100%"}}
                    apiKey={credentials.mapsKey}
                    center={{lat: -34.55104311413929, lng:-58.56219387334089}}
                    zoom={15}
                    markers={[{lat: -34.55104311413929, lng:-58.56219387334089}]}
                />
            </div>
        )
    }
}
