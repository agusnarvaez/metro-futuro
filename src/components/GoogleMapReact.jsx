import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import credentials from '../credentials';

const containerStyle = {
  width: '100%',
  height: '100%'
}


function Map({coordinates}) {
    const center = {
        lat: coordinates.lat,
        lng: coordinates.lon // Aquí asignas el valor correcto a lng
      }
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: credentials.mapsKey
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <div className="MapComponent" style={{width: "100%", height: "60vh"}}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        onLoad={onLoad}
        onUnmount={onUnmount}
        zoom={10}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <Marker
          position={{ lat: coordinates.lat, lng: coordinates.lon }}
          // Aquí puedes añadir más opciones al marcador si es necesario
        />
      </GoogleMap>
      </div>
  ) : <></>
}

export default React.memo(Map)