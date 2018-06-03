import React, { Component } from 'react';
import {Route, Link, Switch, withRouter} from 'react-router-dom';
import './App.css';
import Map from './components/Map';
import SearchBox from './components/SearchBox';
import CategoryButtons from './components/CategoryButtons';
import PlaceList from './components/PlaceList';
import IntroBox from './components/IntroBox';
import reviewlist from './reviewList';


class App extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearchBoxChange = this.handleSearchBoxChange.bind(this);
    this.onGoogleApiLoaded = this.onGoogleApiLoaded.bind(this);
    this.parseSearchResults = this.parseSearchResults.bind(this);
    this.clearPlaces = this.clearPlaces.bind(this);
    this.getPlaces = this.getPlaces.bind(this);
    this.handleListItemClick = this.handleListItemClick.bind(this);
    this.handleCategoryButtonClick = this.handleCategoryButtonClick.bind(this);
    this.handleMapMarkerClose = this.handleMapMarkerClose.bind(this);
    this.handleMapMarkerClick = this.handleMapMarkerClick.bind(this);
    this.handleListFilterChange = this.handleListFilterChange.bind(this);
    this.state = {
      centerLatLng: {lat: 41.373346,
        lng: -71.9532523},
        searchRequest:"06355",
        searchCategory:"shopping",
        placeResults:[],
        selectedMarker: null,
        listFilter:"",
      };
  }
  handleMapMarkerClick(e) {
    console.log(e.target.id)
    this.setState({selectedMarker:e.target.id})
  }

  handleMapMarkerClose(e) {
    this.setState({selectedMarker:null})
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.props.location.pathname === "/search") {
      console.log("We're at the search page!")
    } else if (this.props.location.pathname === "/") {
      this.props.history.push('/search');
    }
    // this.getLatLng();
  }

  handleSearchBoxChange(event) {
    this.setState({searchRequest: event.target.value});
  }

  handleListFilterChange(event) {
    this.setState({listFilter: event.target.value})
  }

  handleCategoryButtonClick(searchCategory) {
    this.setState({searchCategory}, this.getLatLng);
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
    // Putting Service in State seems like a bad idea, but for now it's the best way I know to get it working and passed around easily.
    // Fix this before going to 'production'.
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

  // return (<IntroBox 
  //   handleSubmit={this.handleSubmit} 
  //   handleSearchBoxChange={this.handleSearchBoxChange} 
  //   searchRequest={this.state.searchRequest}
  // />)

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">The Best Reviews</h1>
        </header>
        <SearchBox handleSubmit={this.handleSubmit} handleSearchBoxChange={this.handleSearchBoxChange} searchRequest={this.state.searchRequest} />
        <CategoryButtons clickHandler={this.handleCategoryButtonClick} searchCategory={this.state.searchCategory}/>
        <PlaceList 
          placeResults={this.state.placeResults} 
          handleListItemClick={this.handleListItemClick} 
          listFilter={this.state.listFilter}
          handleListFilterChange={this.handleListFilterChange}
          />
        <Map centerLatLng={this.state.centerLatLng} 
        onGoogleApiLoaded={this.onGoogleApiLoaded} 
        placeResults={this.state.placeResults} 
        handleMapMarkerClose={this.handleMapMarkerClose}
        handleMapMarkerClick={this.handleMapMarkerClick}
        selectedMarker={this.state.selectedMarker}
        />
      <footer className="footer">Copyright © Alex Trost 2018</footer>
      </div>
    );
  }
}

export default withRouter(App);
