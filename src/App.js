/* Contains the state for the App and routes to the pages */
import React, { Component } from 'react';
import {Route, Link, Switch, withRouter} from 'react-router-dom';
import './App.css';
import SearchResultsPage from './components/SearchResultsPage';
import IntroBox from './components/IntroBox';

class App extends Component {
  constructor(props) {
    super(props);
		this.getPlaces = this.getPlaces.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearchBoxChange = this.handleSearchBoxChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
		this.getLatLng = this.getLatLng.bind(this);
		this.onGoogleApiLoaded = this.onGoogleApiLoaded.bind(this);
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

  handleCategoryChange(event) {
	getLatLng() {
		fetch(
			`https://maps.googleapis.com/maps/api/geocode/json?address=${
				this.props.searchLocation
			}&key=AIzaSyAAsyfic2Tbd2rLhlvIFR0DrUT1MTzzW9M`
		)
			.then(function(response) {
				return response.json();
			})
			.then(myJson => {
				return myJson.results[0].geometry.location;
			})
			.then(({ lat, lng }) => this.props.dispatch(setCenterLatLng(lat, lng)))
			.then(this.props.dispatch(clearSearchResults()))
			.then(this.getPlaces)
			.catch(err => console.error(err));
	}

	onGoogleApiLoaded(map) {
		let service = new map.maps.places.PlacesService(map.map);
		// ! Putting Service in State seems like a bad idea,
		// ! but for now it's the best way I know to get it working and passed around easily.
		// ! Fix this before going to 'production'.
		this.setState({ service }, this.getPlaces);
	}

	getPlaces() {
		let currentReviewList = reviewlist.filter(
			item => item.category === this.props.category
		);
		currentReviewList.map(place =>
			this.state.service.textSearch(
				{
					location: this.props.centerLatLng,
					radius: 500,
					query: place.searchTerms
				},
				(results, status) => this.parseSearchResults(results, status, place)
			)
		);
  }

	parseSearchResults(results, status, bestReview) {
		if (status === window.google.maps.places.PlacesServiceStatus.OK) {
			this.props.dispatch(addSearchResult(results[0], bestReview));
		}
	}

  render() {
    return (
      <Switch>
      <Route exact path='/' render={(props) => <IntroBox 
       {...props}
        handleSubmit={this.handleSubmit} 
        handleCategoryChange={this.handleCategoryChange}
        handleSearchBoxChange={this.handleSearchBoxChange} 
        searchRequest={this.state.searchRequest}
        searchCategory={this.state.searchCategory}
        showVideo={this.state.showVideo}
        handleVideoToggle={this.handleVideoToggle}
        />} />
      <Route
        path='/search'
        render={(props) => <SearchResultsPage 
        {...props}
        handleSubmit={this.handleSubmit} 
        handleSearchBoxChange={this.handleSearchBoxChange}
        searchRequest={this.state.searchRequest}
        handleCategoryChange={this.handleCategoryChange}
        searchCategory={this.state.searchCategory}
        showVideo={this.state.showVideo}
        handleVideoToggle={this.handleVideoToggle}
        />}
      />
    </Switch>
    );
  }
}

export default withRouter(App);
