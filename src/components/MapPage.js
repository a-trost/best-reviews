import React, { Component } from "react";
import { connect } from "react-redux";
import Map from "./Map";
import SearchForm from "./SearchForm";
import PlaceList from "./PlaceList";
import Header from "./Header";
import Footer from "./Footer";
import "./MapPage.css";
import {
	setSelectedMarker,
	setListFilter,
	setCenterLatLng,
	clearSearchResults
} from "../actions/actions";
import { Element, scroller } from "react-scroll";

class MapPage extends Component {
	constructor(props) {
		super(props);
		this.clearPlaces = this.clearPlaces.bind(this);
		this.handleMapMarkerClose = this.handleMapMarkerClose.bind(this);
		this.handleListFilterChange = this.handleListFilterChange.bind(this);
		this.handlePlaceClick = this.handlePlaceClick.bind(this);
	}

	handleMapMarkerClose(event) {
		this.props.dispatch(setSelectedMarker());
	}

	handleListFilterChange(event) {
		this.props.dispatch(setListFilter(event.target.value));
	}

	handlePlaceClick(place) {
		let lat = place.geometry.location.lat() + 0.035;
		let lng = place.geometry.location.lng();
		this.props.dispatch(setSelectedMarker(place.place_id));
		this.props.dispatch(setCenterLatLng(lat, lng));
		scroller.scrollTo("map-scroll", {
			duration: 500,
			smooth: true
		});
	}

	clearPlaces() {
		this.props.dispatch(clearSearchResults());
	}

	render() {
		return (
			<div className="App">
				<Header />
				<SearchForm {...this.props} />
				<PlaceList
					{...this.props}
					handleListFilterChange={this.handleListFilterChange}
					handlePlaceClick={this.handlePlaceClick}
				/>
				<Element name="map-scroll" />
				<Map
					{...this.props}
					onGoogleApiLoaded={this.props.onGoogleApiLoaded}
					handlePlaceClick={this.handlePlaceClick}
					handleMapMarkerClose={this.handleMapMarkerClose}
				/>
				<Footer />
			</div>
		);
	}
}

export default connect()(MapPage);
