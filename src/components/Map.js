import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import MapMarker from "./MapMarker";
import { connect } from "react-redux";
import mapStyles from "../mapStyles.json";

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 41.373346,
      lng: -71.9532523
    },
    zoom: 12
  };

  createMapOptions = maps => ({
    panControl: false,
    mapTypeControl: false,
    scrollwheel: false,
    styles: mapStyles,
    clickableIcons: false
  });

  render() {
    let filteredPlaceResults = this.props.placeResults
      ? this.props.placeResults.filter(place =>
          place.name.toLowerCase().includes(this.props.listFilter.toLowerCase())
        )
      : [];
    return (
      <div className="map">
        <GoogleMapReact
          options={this.createMapOptions}
          yesIWantToUseGoogleMapApiInternals={true}
          bootstrapURLKeys={{
            key: "AIzaSyCaeLhqay8EKp4I64XZcOrSqfVmv6VCZck",
            region: "US",
            libraries: ["places"]
          }}
          onGoogleApiLoaded={map => {
            this.props.onGoogleApiLoaded(map);
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          center={this.props.centerLatLng}
        >
          {filteredPlaceResults &&
            filteredPlaceResults.map((place, index) => (
              <MapMarker
                handleMapMarkerClose={this.props.handleMapMarkerClose}
                handlePlaceClick={this.props.handlePlaceClick}
                selectedMarker={this.props.selectedMarker}
                key={index}
                index={index}
                place={place}
                lat={place.geometry.location.lat()}
                lng={place.geometry.location.lng()}
                bestReview={place.bestReview}
              />
            ))}
        </GoogleMapReact>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    placeResults: state.placeResults,
    category: state.category,
    searchLocation: state.searchLocation,
    centerLatLng: state.centerLatLng,
    selectedMarker: state.selectedMarker,
    listFilter: state.listFilter
  };
};

export default connect(mapStateToProps)(Map);
