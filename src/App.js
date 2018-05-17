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
    this.handleCategoryButtonClick = this.handleCategoryButtonClick.bind(this);
    this.state = {
      centerLatLng: {lat: 41.373346,
        lng: -71.9532523},
        searchRequest:"",
        searchCategory:""
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

  getLatLng() {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.searchRequest}&key=AIzaSyAAsyfic2Tbd2rLhlvIFR0DrUT1MTzzW9M`)
  .then(function(response) {
    return response.json();
  })
  .then((myJson) => {
    return myJson.results[0].geometry.location;}).then((centerLatLng) => this.setState({centerLatLng}));
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
