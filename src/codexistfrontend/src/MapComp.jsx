import { GoogleMap,useJsApiLoader, Marker } from '@react-google-maps/api';
import React from "react";
const containerStyle = {
    width: '100%',
    height: '500px'
};

function MapComp({values, center}) {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBZlL9_8qeZwY9aaQXTVD-1cfMOJYilvqw"
    })

    return <>
        {isLoaded && (
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                mapContainerClassName="map-class"
            >
                {values && values.map((latLng, i) => (
                    <Marker key={i} position={latLng}></Marker>
                ))}
            </GoogleMap>
        )}
    </>
}
export default React.memo(MapComp)