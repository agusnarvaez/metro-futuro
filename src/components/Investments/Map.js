import React, { useEffect, useState } from "react";
import {GoogleMap,withScriptjs,withGoogleMap} from "react-google-maps";


const Map=(props)=> {
    
    {/* <div className="MapComponent">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.0943792484954!2d-5.987771585269565!3d37.387600242114246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126c1dcb5af321%3A0x5f8a1612fb83212d!2sAv.%20de%20Men%C3%A9ndez%20Pelayo%2C%2035%2C%2041003%20Sevilla%2C%20Espa%C3%B1a!5e0!3m2!1ses-419!2sar!4v1656124506406!5m2!1ses-419!2sar" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div> */}
    return (
        <div>
            <GoogleMap
                defaultZoom={15}
                defaultCenter={{lat: 37.387600242114246, lng: 5.987771585269565}}
            />
        </div>
          
    )
}

export default withScriptjs(withGoogleMap(Map));