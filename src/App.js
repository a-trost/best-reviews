import React, { Component } from 'react';
import './App.css';
import Map from './components/Map';
import SearchBox from './components/SearchBox';
import CategoryButtons from './components/CategoryButtons';
import reviewlist from './reviewList';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onGoogleApiLoaded = this.onGoogleApiLoaded.bind(this);
    this.parseSearchResults = this.parseSearchResults.bind(this);
    this.clearPlaces = this.clearPlaces.bind(this);
    this.getPlaces = this.getPlaces.bind(this);
    this.handleCategoryButtonClick = this.handleCategoryButtonClick.bind(this);
    this.state = {
      centerLatLng: {lat: 41.373346,
        lng: -71.9532523},
        searchRequest:"06355",
        searchCategory:"shopping",
        placeResults:[],
      };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.getLatLng();

  }

  handleChange(event) {
    this.setState({searchRequest: event.target.value});
  }

  handleCategoryButtonClick(searchCategory) {
    this.setState({searchCategory}, this.getLatLng);
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
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">The Best Reviews</h1>
        </header>
        <SearchBox handleSubmit={this.handleSubmit} handleChange={this.handleChange} searchRequest={this.state.searchRequest} />
        <CategoryButtons clickHandler={this.handleCategoryButtonClick} />
        <Map centerLatLng={this.state.centerLatLng} onGoogleApiLoaded={this.onGoogleApiLoaded} placeResults={this.state.placeResults}/>
      </div>
    );
  }
}

export default App;
