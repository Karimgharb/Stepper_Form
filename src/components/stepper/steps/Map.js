import React, { useEffect, useState } from "react";
import ReactMapGL, { Marker, FullscreenControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import RoomIcon from "@mui/icons-material/Room";

const fullscreenControlStyle = {
  right: 10,
  top: 10,
  zIndex: 1200,
};

export default function Map() {
  const [markerCoord, setMarkerCoord] = useState(null);

  const [viewport, setViewport] = useState({
    width: 500,
    height: 500,
    latitude: 35.0354,
    longitude: 9.4839,
    zoom: 4,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setViewport({
        zoom: 7,
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      });
      console.log(pos);
    });
  }, []);

  console.log(markerCoord, viewport);

  return (
    <div className="mapview__container">
      <h2 className="section__title">Locate your house</h2>
      <ReactMapGL
        className="mapview__map"
        mapStyle="mapbox://styles/mapbox/streets-v11"
        {...viewport}
        width="85vw"
        height="66vh"
        mapboxApiAccessToken="pk.eyJ1Ijoiam9lb3J0ZWdhIiwiYSI6ImNrd3NxOW5iajAxaDAycW1pdXkwNWRtN2kifQ.m0tiBv3hipP-XFcVeG6Jdw"
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        onClick={(e) =>
          setMarkerCoord({
            lng: e.lngLat[0],
            lat: e.lngLat[1],
          })
        }
      >
        <FullscreenControl style={fullscreenControlStyle} />
        {markerCoord && (
          <Marker
            latitude={markerCoord.lat}
            longitude={markerCoord.lng}
            offsetLeft={-30}
            offsetTop={-50}
          >
            <RoomIcon style={{ color: "red", width: 50, height: 50 }} />
          </Marker>
        )}
      </ReactMapGL>
    </div>
  );
}
