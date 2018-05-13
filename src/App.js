import React, { Component } from 'react';
import './App.css';
import SimpleMap from './components/SimpleMap';
import SearchBox from './components/SearchBox';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      centerLatLng: {lat: 43.373346,
        lng: -71.9532523},
        searchRequest:"18940"
      };
  }

  getLatLng(address=this.state.searchRequest) {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.searchRequest}&key=AIzaSyAAsyfic2Tbd2rLhlvIFR0DrUT1MTzzW9M`)
  .then(function(response) {
    return response.json();
  })
  .then((myJson) => {
    return myJson.results[0].geometry.location;}).then((centerLatLng) => this.setState({centerLatLng}));
  }

  
  componentDidMount() {
    this.getLatLng();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">The Best Reviews</h1>
        </header>
  <SimpleMap centerLatLng={this.state.centerLatLng} />
      </div>
    );
  }
}

export default App;
