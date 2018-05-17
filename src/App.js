import React, { Component } from 'react';
import './App.css';
import SimpleMap from './components/SimpleMap';
import SearchBox from './components/SearchBox';
import CategoryButtons from './components/CategoryButtons';

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
        searchRequest:"",
        searchCategory:"",
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
    this.setState({searchCategory});
  }

  // Trying to use this to wipe the places clean when we change map locations
  clearPlaces() {
    let placeResults = []
    this.setState({placeResults})
  }

  parseSearchResults(results, status, line) {
    if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        let prevPlaceResults = this.state.placeResults;
        let place = results[0]
        place.endingPhrase= line;
        prevPlaceResults.push(place);
        this.setState({placeResults:prevPlaceResults})
    }
  }

  getPlaces() {
    // This is a temporary array just for early development. Soon we'll get this from the list in reviewList.js
    let placesArray = [
      ['private investigator', 'GUMSHOE.'],
      ['aquarium', 'FISH ZOO.'],
      ['thai food', 'THAI FOOD.'],
      ['train station', 'CHOO CHOOS.'],
      ['laser tag', 'PEW PEW.'],
    ];
    placesArray.map((place) => this.state.service.textSearch({
      location: this.state.centerLatLng,
      radius: 50,
      query: place[0]
    }, (results, status) => this.parseSearchResults(results, status, place[1])))
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
    .then(this.clearPlaces).then(this.getPlaces);
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">The Best Reviews</h1>
        </header>
  <SearchBox handleSubmit={this.handleSubmit} handleChange={this.handleChange} searchRequest={this.state.searchRequest} />
  <CategoryButtons clickHandler={this.handleCategoryButtonClick} />
  <SimpleMap centerLatLng={this.state.centerLatLng} onGoogleApiLoaded={this.onGoogleApiLoaded} placeResults={this.state.placeResults}/>
      </div>
    );
  }
}

export default App;
