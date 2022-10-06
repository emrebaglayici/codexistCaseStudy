import { GoogleMap,useJsApiLoader } from '@react-google-maps/api';
import React from "react";
const containerStyle = {
    width: '100%',
    height: '500px'
};

const center = {
    lat: 38.49156648842372,
    lng: 26.94799187287517,
};
function MapComp() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBZlL9_8qeZwY9aaQXTVD-1cfMOJYilvqw"
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            { /* Child components, such as markers, info windows, etc. */ }
            <></>
        </GoogleMap>
    ) : <></>
}
export default React.memo(MapComp)