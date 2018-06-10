import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import MapMarker from "./MapMarker";
import { connect } from "react-redux";

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 41.373346,
      lng: -71.9532523
    },
    zoom: 12
  };

  render() {
    return (
      <div className="map" style={{ height: "80vh", width: "100%" }}>
        <GoogleMapReact
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
          {this.props.placeResults &&
            this.props.placeResults.map((place, index) => (
              <MapMarker
                handleMapMarkerClose={this.props.handleMapMarkerClose}
                handleMapMarkerClick={this.props.handleMapMarkerClick}
                selectedMarker={this.props.selectedMarker}
                key={index}
                index={index}
                lat={place.geometry.location.lat()}
                lng={place.geometry.location.lng()}
                placeName={place.name}
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
    selectedMarker: state.selectedMarker
  };
};

export default connect(mapStateToProps)(Map);
