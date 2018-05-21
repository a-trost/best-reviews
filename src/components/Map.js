import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MapMarker from './MapMarker';

class Map extends Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      selectedMarker: null,
      };
  }

  handleClick(e) {
    this.setState({selectedMarker:e.target.id})
  }

  handleClose(e) {
    this.setState({selectedMarker:null})
  }

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
      <div className="map" 
      style={{ height: '80vh', width: '100%' }}
      >
        <GoogleMapReact
          yesIWantToUseGoogleMapApiInternals={true}
          bootstrapURLKeys={{ key: "AIzaSyAAsyfic2Tbd2rLhlvIFR0DrUT1MTzzW9M&v=3.32", region:'US', libraries: ['places'] }}
          onGoogleApiLoaded={(map) => this.props.onGoogleApiLoaded(map)}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          center={this.props.centerLatLng}
        >
      {this.props.placeResults &&
        this.props.placeResults.map((place, index)=> 
        <MapMarker 
            handleCloseFunction={this.handleClose}
            handleClickFunction={this.handleClick}
            selectedMarker={this.state.selectedMarker}
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

export default Map;