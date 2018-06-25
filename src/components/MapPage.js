import React, { Component } from "react";
import { connect } from "react-redux";
import Map from "./Map";
import SearchForm from "./SearchForm";
import PlaceList from "./PlaceList";
import Header from "./Header";
import VideoPlayer from "./VideoPlayer";
import Footer from "./Footer";
import "./MapPage.css";
import {
	setSelectedMarker,
	setListFilter,
	setCenterLatLng,
	clearSearchResults
} from "../actions/actions";

class MapPage extends Component {
	constructor(props) {
		super(props);
		this.clearPlaces = this.clearPlaces.bind(this);
		this.handleMapMarkerClose = this.handleMapMarkerClose.bind(this);
		this.handleMapMarkerClick = this.handleMapMarkerClick.bind(this);
		this.handleListFilterChange = this.handleListFilterChange.bind(this);
		this.handleListItemClick = this.handleListItemClick.bind(this);
	}

	handleMapMarkerClick(event) {
		this.props.dispatch(setSelectedMarker(event.target.id));
	}

	handleMapMarkerClose(event) {
		this.props.dispatch(setSelectedMarker());
	}

	handleListFilterChange(event) {
		this.props.dispatch(setListFilter(event.target.value));
	}

	handleListItemClick(place, index) {
		let lat = place.geometry.location.lat();
		let lng = place.geometry.location.lng();
		this.props.dispatch(setSelectedMarker(index));
		this.props.dispatch(setCenterLatLng(lat, lng));
	}

	clearPlaces() {
		this.props.dispatch(clearSearchResults());
	}

	getLatLng() {
		fetch(
			`https://maps.googleapis.com/maps/api/geocode/json?address=${
				this.state.searchRequest
			}&key=AIzaSyAAsyfic2Tbd2rLhlvIFR0DrUT1MTzzW9M`
		)
			.then(function(response) {
				return response.json();
			})
			.then(myJson => {
				return myJson.results[0].geometry.location;
			})
			.then(({ lat, lng }) => this.props.dispatch(setCenterLatLng(lat, lng)))
			.then(this.clearPlaces)
			.then(this.getPlaces)
			.catch(err => console.error(err));
	}

	render() {
		return (
			<div className="App">
				<Header />
				<SearchForm {...this.props} />
				<PlaceList
					{...this.props}
					handleListFilterChange={this.handleListFilterChange}
					handleListItemClick={this.handleListItemClick}
				/>
				<Map
					{...this.props}
					onGoogleApiLoaded={this.props.onGoogleApiLoaded}
					handleMapMarkerClick={this.handleMapMarkerClick}
					handleMapMarkerClose={this.handleMapMarkerClose}
				/>
				<Footer />
			</div>
		);
	}
}

export default connect()(MapPage);
