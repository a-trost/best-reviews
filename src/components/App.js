/* Contains the state for the App and routes to the pages */
import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Swal from "sweetalert2";
import { connect } from "react-redux";
import { animateScroll as scroll } from "react-scroll";
import "animate.css";
import "./App.css";
import MapPage from "./MapPage";
import IntroPage from "./IntroPage";
import reviewlist from "../reviewList";
import NotFoundPage from "./NotFoundPage";
import {
	addSearchResult,
	setSearchLocation,
	setCategory,
	setCenterLatLng,
	clearSearchResults,
	setSelectedMarker,
	setFormError,
	setMapLoaded
} from "../actions/actions";

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

	/*
	Form submit handler for Go button. Only submits if entered zipcode is 5 digits. 
	Updates URL with search location and category for linkability.
	Scrolls to map to give better experience on mobile.
	*/
	handleSubmit(event) {
		event.preventDefault();
		this.props.dispatch(setSelectedMarker());
		if (this.props.searchLocation.length === 5) {
			this.props.history.push(
				`/search/${this.props.searchLocation}/${this.props.category}`
			);
			scroll.scrollTo(330);
			if (this.props.mapLoaded) {this.getLatLng();}
		} else {
			this.props.dispatch(setFormError("Please enter a 5 digit zipcode!"));
		}
	}

	handleSearchBoxChange(event) {
		const zipcode = event.target.value;
		if (!zipcode || zipcode.match(/^\d{1,5}$/)) {
			this.props.dispatch(setSearchLocation(zipcode));
		}
	}

	handleCategoryChange(event) {
		this.props.dispatch(setCategory(event.target.value));
	}

	/*
	Google Maps API Fetch
	Passes in user's zipcode as address.
	Gives user Alert if they enter invalid zipcode or Google fails
	*/
  async getLatLng() {
    try {
      const response = await fetch(
			`https://maps.googleapis.com/maps/api/geocode/json?address=${
				this.props.searchLocation
			}&key=AIzaSyAAsyfic2Tbd2rLhlvIFR0DrUT1MTzzW9M`
      );
      if (response.status !== 200) {
        throw Error("Connection Issue!");
      }
      let data = await response.json();
      if (!data.results[0]) {
        throw Error("Invalid Zipcode!");
      }
      let location = data.results[0].geometry.location;
      this.props.dispatch(setCenterLatLng(location.lat, location.lng));
      this.props.dispatch(clearSearchResults());
      this.getPlaces();
    } catch (err) {
      Swal(
        "Oops...",
        `There was an error with Google Maps!<br/>${err}`,
        "error"
			);
	}
  }

	/*
	When google-map-react loads, this function is called.
	We instantiate a PlacesService object and pass it to state for easy calling later
	*/
	onGoogleApiLoaded(map) {
		let service = new map.maps.places.PlacesService(map.map);
		this.props.dispatch(setMapLoaded());
		this.setState({ service }, this.getLatLng);
	}

	/*
	Run text searches for each search terms in reviewList.js
	Filters out search terms based on user's selected category.
	*/
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

	/*
	Simple helper function to add the first result from the search if successful.
	*/
	parseSearchResults(results, status, bestReview) {
		if (status === window.google.maps.places.PlacesServiceStatus.OK) {
			this.props.dispatch(addSearchResult(results[0], bestReview));
		}
	}

	render() {
		return (
			<Switch>
				<Route
					exact
					path="/"
					render={props => (
						<IntroPage
							{...props}
							handleSubmit={this.handleSubmit}
							handleCategoryChange={this.handleCategoryChange}
							handleSearchBoxChange={this.handleSearchBoxChange}
							searchRequest={this.props.searchRequest}
							category={this.props.category}
							showVideo={this.props.showVideo}
						/>
					)}
				/>
				<Route
					path="/search/:searchLocation/:category"
					render={props => (
						<MapPage
							{...props}
							handleSubmit={this.handleSubmit}
							handleSearchBoxChange={this.handleSearchBoxChange}
							searchRequest={this.props.searchRequest}
							handleCategoryChange={this.handleCategoryChange}
							category={this.props.category}
							showVideo={this.props.showVideo}
							getPlaces={this.getPlaces}
							onGoogleApiLoaded={this.onGoogleApiLoaded}
						/>
					)}
				/>
				<Route component={NotFoundPage} />
			</Switch>
		);
	}
}

const mapStateToProps = state => {
	return {
		searchLocation: state.searchLocation,
		category: state.category,
		centerLatLng: state.centerLatLng,
		mapLoaded: state.mapLoaded,
	};
};

export default withRouter(connect(mapStateToProps)(App));
