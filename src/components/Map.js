import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MapMarker from './MapMarker';

export default class Map extends Component {

  // TODO move these default props out of here 
  static defaultProps = {
    center: {
      lat: 41.373346,
      lng: -71.9532523
    },
    zoom: 12
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="map" 
      style={{ height: '80vh', width: '100%' }}
      >
        <GoogleMapReact
          yesIWantToUseGoogleMapApiInternals={true}
          bootstrapURLKeys={{ key: "AIzaSyBmdPMZL4hLi5jC35sw6ziLe97HIt1vVvA&v=3.32", region:'US', libraries: ['places'] }}
          onGoogleApiLoaded={(map) => {this.props.onGoogleApiLoaded(map)}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          center={this.props.centerLatLng}
        >
      {this.props.placeResults &&
        this.props.placeResults.map((place, index)=> 
        <MapMarker 
        handleMapMarkerClose={this.props.handleMapMarkerClose}
        handleMapMarkerClick={this.props.handleMapMarkerClick}
        selectedMarker={this.props.selectedMarker}
            key={index} 
            index={index}
            lat={place.geometry.location.lat()} 
            lng={place.geometry.location.lng()} 
            placeName={place.name} 
            bestReview={place.bestReview}/> 
          )
      }
        </GoogleMapReact>
      </div>
    );
  }
}
