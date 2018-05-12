import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import config from '../config'; // For Keeping API Keys private during development

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 41.3088033, 
      lng: -72.9184877
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '60vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: config.MAPS_API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={41.3088033}
            lng={-72.9184877}
            text={'Test Place'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
