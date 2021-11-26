
    import ReactDOM from "react-dom";
    import React from "react";
    import {
      GoogleMap,
      Marker,
      InfoWindow,
      LoadScript
    } from "@react-google-maps/api";
    import data from "../Data/data.json"
    
    const { useState } = React;
    const containerStyle = {
      width: "400px",
      height: "400px"
    };
    
    const center = { lat: 40.712775, lng: -74.005973 };
    
    function NewMap() {
      const [infoWindowID, setInfoWindowID] = useState("");
      let markers;
    
      if (data !== null) {
        markers = data.map((location, i) => {
          const marker = { lat: location.lat, lng: location.lng };
          const index = i + 1;
          return (
            <Marker
              key={index}
              position={marker}
              label={index.toString()}
              onClick={() => {
                setInfoWindowID(index);
              }}
            >
              {infoWindowID === index && (
                <InfoWindow>
                  <span>Something {index}</span>
                </InfoWindow>
              )}
            </Marker>
          );
        });
      }
      return (
        <LoadScript googleMapsApiKey="AIzaSyArcOJ8mwAgxQMC5_VEpKsPvtSXpI0XHxQ">
          <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
            {markers}
          </GoogleMap>
        </LoadScript>
      );
    }
    
    export default React.memo(NewMap);