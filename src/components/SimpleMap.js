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
          bootstrapURLKeys={{ key: "AIzaSyAAsyfic2Tbd2rLhlvIFR0DrUT1MTzzW9M", region:'US', libraries: 'places' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          center={this.props.centerLatLng}
        >
          <MapMarker
            lat={this.props.centerLatLng.lat}
            lng={this.props.centerLatLng.lng}
            text={''}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;