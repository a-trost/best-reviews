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
    this.getPlaces = this.getPlaces.bind(this);
    this.onGoogleApiLoaded = this.onGoogleApiLoaded.bind(this);    
    this.parseSearchResults = this.parseSearchResults.bind(this);
    this.handleMapMarkerClose = this.handleMapMarkerClose.bind(this);
    this.handleMapMarkerClick = this.handleMapMarkerClick.bind(this); 
    this.handleListFilterChange = this.handleListFilterChange.bind(this);
    this.handleListItemClick = this.handleListItemClick.bind(this);
    this.state={
      centerLatLng: {lat: 41.373346,
        lng: -71.9532523},
        placeResults:[],
        selectedMarker: null,
        listFilter:"",
    }
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
    let placeResults = []
    this.setState({placeResults})
  }

  parseSearchResults(results, status, bestReview) {
    if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        let prevPlaceResults = this.state.placeResults;
        let place = results[0];
        place.bestReview= bestReview;
        prevPlaceResults.push(place);
        this.setState({placeResults:prevPlaceResults})
    }
  }

  getPlaces() {
    let currentReviewList = reviewlist.filter((item) => item.category === this.state.searchCategory)
    currentReviewList.map((place) => this.state.service.textSearch({
      location: this.state.centerLatLng,
      radius: 500,
      query: place.searchTerms
    }, (results, status) => this.parseSearchResults(results, status, place)))
  }

  onGoogleApiLoaded(map) {
    let service = new map.maps.places.PlacesService(map.map);
    // ! Putting Service in State seems like a bad idea, 
    // ! but for now it's the best way I know to get it working and passed around easily.
    // ! Fix this before going to 'production'.
    this.setState({service}, this.getPlaces)
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