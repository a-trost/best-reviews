import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MapMarker from './MapMarker';

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 41.373346,
      lng: -71.9532523
    },
    zoom: 13
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '80vh', width: '100%' }}>
        <GoogleMapReact
          yesIWantToUseGoogleMapApiInternals={true}
          bootstrapURLKeys={{ key: "AIzaSyAAsyfic2Tbd2rLhlvIFR0DrUT1MTzzW9M&v=3.32", region:'US', libraries: ['places'] }}
          onGoogleApiLoaded={(map) => this.props.onGoogleApiLoaded(map)}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          center={this.props.centerLatLng}
        >
      {this.props.placeResults &&
        this.props.placeResults.map((place)=> 
        <MapMarker key={place.name} lat={place.geometry.location.lat()} lng={place.geometry.location.lng()} placeName={place.name} endingPhrase={place.endingPhrase}/> )}
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;