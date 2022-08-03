// Importo React y Component para hacerlo componente de clase
import React, {Component} from "react";
// Importo Google Maps
import GoogleMaps from "simple-react-google-maps";
// Importo credenciales
import credentials from "../../credentials";

export default class Map extends Component {
    render() {
        return(
            <div className="MapComponent">
                <GoogleMaps
                    style={{width: "100%", height: "100%"}}
                    apiKey={credentials.mapsKey}
                    center={{lat: 37.388685, lng:-5.983617}}
                    zoom={15}
                    markers={[{lat: 37.388685, lng:-5.983617}]}
                />
            </div>
        )
    }
}
