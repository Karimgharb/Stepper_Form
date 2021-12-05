import React, { useEffect, useState } from "react";
import ReactMapGL, { Marker, NavigationControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import RoomIcon from "@mui/icons-material/Room";

const navControlStyle = {
  right: 10,
  bottom: 30,
};

export default function Map() {
  const [markerCoord, setMarkerCoord] = useState(null);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: 500,
    latitude: 35.0354,
    longitude: 9.4839,
    zoom: 4,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setViewport({
        width: "100%",
        height: 500,
        zoom: 7,
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      });
    });
  }, []);

  return (
    <div className="mapview__container">
      <h2 className="section__title">Locate your house</h2>
      <ReactMapGL
        className="mapview__map"
        mapStyle={process.env.REACT_APP_MAP_STYLE} // Mapbox map style from mapbox studio
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN} //Mapbox access token
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        onClick={(click) => {
          setMarkerCoord({
            lng: click.lngLat[0],
            lat: click.lngLat[1],
          });
        }}
      >
        <NavigationControl style={navControlStyle} />
        {markerCoord && (
          <Marker
            latitude={markerCoord.lat}
            longitude={markerCoord.lng}
            offsetLeft={-30}
            offsetTop={-50}
          >
            <RoomIcon
              style={{
                color: "#e00190",
                width: 50,
                height: 50,
              }}
            />
          </Marker>
        )}
      </ReactMapGL>
    </div>
  );
}
