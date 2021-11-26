import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import AddNewEvent from './inputForm';

class MainMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
        add: "",
      markers: [
        {
          title: "The marker`s title will appear as a tooltip.",
          name: "SOMA",
          position: { lat: 37.778519, lng: -122.40564 }
        }
      ]
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(t, map, coord) {
    const { latLng } = coord;
    const lat = latLng.lat();
    const lng = latLng.lng();

    const address = this.getReverseGeocodingData(lat, lng)

    console.log("address")


    this.setState(previousState => {
       
      return {
        markers: [
          ...previousState.markers,
          {
            title: address,
            name: "hi",
            position: { lat, lng }
          }
        ]
      };
    });
  }

   getReverseGeocodingData =(lat, lng) => {
    var latlng = new window.google.maps.LatLng(lat, lng);
    var add 
    // This is making the Geocode request
    var geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ 'latLng': latlng },  (results, status) =>{
        if (status !== window.google.maps.GeocoderStatus.OK) {
            alert(status);
        }
        // This is checking to see if the Geoeode Status is OK before proceeding
        if (status == window.google.maps.GeocoderStatus.OK) {
            console.log(results);
            var address = (results[0].formatted_address);
           
            this.setState({
                add: address
            })
        }
    });
    return this.state.add
}

  render() {

       
    return (
      <div>
        <h1 className="text-center">My Maps</h1>
        <AddNewEvent/> 
        <Map
          google={this.props.google}
          style={{ width: "80%", margin: "auto" }}
          className={"map"}
          zoom={14}
          onClick={this.onClick}
        >
          {this.state.markers.map((marker, index) => (
           
           <Marker
              key={index}
              title={marker.title}
              name={marker.name}
              position={marker.position}
              label={marker.title}
           />
        
                
              
            
            
          ))}
        </Map>
    
      </div>
      
    ); 
}
}

const FunctionalMap = GoogleApiWrapper({
  apiKey: "AIzaSyArcOJ8mwAgxQMC5_VEpKsPvtSXpI0XHxQ"
})(MainMap);

export default FunctionalMap