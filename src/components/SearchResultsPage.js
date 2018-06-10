import React, { Component } from "react";
import reviewlist from "../reviewList";
import Map from "./Map";
import SearchForm from "./SearchForm";
import PlaceList from "./PlaceList";
import Header from "./Header";
import VideoPlayer from './VideoPlayer'

export default class SearchResultsPage extends Component {
  constructor(props) {
    super(props);
    this.clearPlaces = this.clearPlaces.bind(this);
    this.handleMapMarkerClose = this.handleMapMarkerClose.bind(this);
    this.handleMapMarkerClick = this.handleMapMarkerClick.bind(this); 
    this.handleListFilterChange = this.handleListFilterChange.bind(this);
    this.handleListItemClick = this.handleListItemClick.bind(this);
    }

  handleMapMarkerClick(event) {
    this.setState({selectedMarker:event.target.id})
  }

  handleMapMarkerClose(event) {
    this.setState({selectedMarker:null})
  }

  handleListFilterChange(event) {
    this.setState({listFilter: event.target.value})
  }

  handleListItemClick(place, index) {
    let lat=place.geometry.location.lat() 
    let lng=place.geometry.location.lng()
    // Open that specific item's popup window
    this.setState({centerLatLng: {lat: lat+.01,
      lng: lng}}) 
    this.setState({selectedMarker:index})
  }

  clearPlaces() {
		this.props.dispatch(clearSearchResults());
  }

  getLatLng() {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.searchRequest}&key=AIzaSyAAsyfic2Tbd2rLhlvIFR0DrUT1MTzzW9M`)
  .then(function(response) {
    return response.json();
  })
  .then((myJson) => {
    return myJson.results[0].geometry.location;}).then((centerLatLng) => this.setState({centerLatLng}))
    .then(this.clearPlaces).then(this.getPlaces).catch((err)=>console.error(err));
  }


  render() {
  return (
    <div className="App">
      <Header />
      <SearchForm {...this.props} />
      <PlaceList {...this.props} />
      <Map {...this.props} onGoogleApiLoaded={this.onGoogleApiLoaded} />
      <footer className="footer">
      <VideoPlayer handleVideoToggle={this.props.handleVideoToggle}
          showVideo={this.props.showVideo}/>
      Copyright © Alex Trost 2018</footer>
    </div>
  )
}
}