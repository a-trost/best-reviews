import React, { Component } from "react";
import dave0 from "../img/d-0.png";
import dave1 from "../img/d-1.png";
import dave2 from "../img/d-2.png";
import dave3 from "../img/d-3.png";
import dave4 from "../img/d-4.png";
import dave5 from "../img/d-5.png";
import twitterLogo from "../img/Twitter.svg";
import facebookLogo from "../img/Facebook.svg";
import closeImage from "../img/close.png";
import daveIcon from "../img/daveIcon.svg";
import peopleIcon from "../img/peopleIcon.svg";
import shareIcon from "../img/shareIcon.svg";
import Badge from "@material-ui/core/Badge";
import "./InfoWindow.css";
import Swal from "sweetalert2";
import Animated from "react-animated-transitions";

class InfoWindow extends Component {
	constructor(props) {
		super(props);
		this.state = {
			viewInfoWindow: 1,
			foursquareReviews: []
		};
	}

	/*
	Using Foursquare because they allow CORS. 
	First we search Foursquare for the matching place based on similar LatLng and placeName.
	Then we use venueURL to get the information Foursquare has about that venue.
	*/
	searchURL() {
		return `https://api.foursquare.com/v2/venues/search?client_id=${
			process.env.REACT_APP_FOURSQUARE_CLIENT_ID
		}&client_secret=${process.env.REACT_APP_FOURSQUARE_CLIENT_SECRET}&ll=${
			this.props.lat
		},${this.props.lng}&query=${this.props.placeName}&v=20180610`;
	}

	venueURL(venue_id) {
		return `https://api.foursquare.com/v2/venues/${venue_id}/tips?client_id=${
			process.env.REACT_APP_FOURSQUARE_CLIENT_ID
		}&client_secret=${
			process.env.REACT_APP_FOURSQUARE_CLIENT_SECRET
		}&v=20180610`;
	}

	/*
	We do two calls to the API, so we have a fetch within a fetch.
	We only want the tips, and we only need them for this component,
	so we put them in the component state, rather than the Redux store.
	If there's an error we alert the user.
	*/

	componentDidMount() {
		fetch(this.searchURL())
			.then(response => response.json())
			.then(json => {
				json.response.venues[0] &&
          fetch(this.venueURL(json.response.venues[0].id))
          	.then(response => response.json())
          	.then(json =>
          		this.setState({ foursquareReviews: json.response.tips.items })
          	);
			})
			.catch(() =>
				Swal("Oops...", "There was an error with Foursquare!", "error")
			);
	}

	/*
		A slightly complicated way of doing this to allow for animation flexiblity in the near future.
	*/
	createTheBestSpans(repetitions = 4) {
		let spans = [];
		for (let i = 1; i < repetitions; i++) {
			spans.push(<span key={i}> THE BEST,</span>);
		}
		spans.push(<span key={5}> THE BEST </span>);
		return spans;
	}

	daveWindow() {
		return (
			<div className="review-container">
				{this.props.bestReview.precedingPhrase} {this.props.placeName}
				<span className="connecting-phrase">
					{" "}
					{this.props.bestReview.connectingPhrase}
				</span>
				{this.createTheBestSpans()}
				{this.props.bestReview.endingPhrase}
				<br />
				{this.starRating(5, "dave")}
			</div>
		);
	}

	renderReviews() {
		if (this.state.foursquareReviews.length) {
			let reviews = [];
			this.state.foursquareReviews.slice(0, 4).map((review, index) => {
				reviews.push(
					<React.Fragment key={index}>
						<p className="review-text">
							{index + 1}. "{review.text}"
						</p>
						<p className="review-author">
              - {review.user.firstName && review.user.firstName}{" "}
							{review.user.lastName && review.user.lastName[0]}.
						</p>
						<hr />
					</React.Fragment>
				);
			});
			reviews.push(
				<a
					href="https://foursquare.com"
					rel="noopener noreferrer"
					className="foursquare-credit"
					target="_blank"
					key={"foursquare"}
				>
          Tips by FourSquare
				</a>
			);
			return reviews;
		} else {
			return (
				<p className="review-text">
          Huh. No one on Foursquare has reviewed this place. Let's call this a
          Grohl exclusive.
				</p>
			);
		}
	}

	foursquareWindow() {
		return (
			<div>
				<h3>Less Cool People Say...</h3>
				{this.renderReviews()}
			</div>
		);
	}

	/*
		Share links for social media sites
	*/
	shareWindow() {
		return (
			<div className="share-window">
				<h3>Share with Friends</h3>
				<br />
				<a
					rel="noopener noreferrer"
					target="_blank"
					href="https://www.facebook.com/sharer/sharer.php?u=https%3A//bestreviews.atrost.com/"
				>
					<img src={facebookLogo} className="share-logo" alt="Share on Facebook"/>
				</a>
				<a
					rel="noopener noreferrer"
					target="_blank"
					href={`https://twitter.com/home?status=${this.props.bestReview.precedingPhrase}%20${this.props.placeName}%20${this.props.bestReview.connectingPhrase}%20THE%20BEST,%20THE%20BEST,%20THE%20BEST,%20THE%20BEST%20${this.props.bestReview.endingPhrase}%0a-%20Dave%20Grohl%0ahttps%3A//bestreviews.atrost.com`}
				>
					<img src={twitterLogo} className="share-logo"  alt="Share on Twitter"/>
				</a>
			</div>
		);
	}

	windowSwitch() {
		const selectedWindow = this.state.viewInfoWindow;
		if (selectedWindow === 1) return this.daveWindow();
		if (selectedWindow === 2) return this.foursquareWindow();
		if (selectedWindow === 3) return this.shareWindow();
	}

	starRating(rating, brand) {
		const starCount = Math.round(rating);
		let starImage = {};
		if (brand === "dave") {
			const daveImages = [dave0, dave1, dave2, dave3, dave4, dave5];
			starImage = daveImages[starCount];
		}
		return (
			<img src={starImage} alt={`Rating: ${starCount} Stars`} width="150px" />
		);
	}

	render() {
		const viewInfoWindow = this.state.viewInfoWindow;
		return (
			<Animated enter="flipInX">
				<div className="info-popup-container">
					<div className="info-popup">
						<img
							alt="Close Window"
							src={closeImage}
							onClick={this.props.handleCloseFunction}
							className="close"
						/>

						{this.windowSwitch()}
					</div>
					<div
						onClick={() => this.setState({ viewInfoWindow: 1 })}
						className={`info-popup-tab tab-top ${viewInfoWindow === 1 &&
              "selected"}`}
					>
						<img src={daveIcon} alt="Dave Grohl" className="info-window-icon" />
					</div>
					<div
						onClick={() => this.setState({ viewInfoWindow: 2 })}
						className={`info-popup-tab tab-mid ${viewInfoWindow === 2 &&
              "selected"}`}
					>
						{this.state.foursquareReviews.length !== 0 && (
							<Badge
								badgeContent={this.state.foursquareReviews.length}
								color="secondary"
								className="review-count-badge"
								children={false}
							/>
						)}
						<img src={peopleIcon} alt="Users" className="info-window-icon" />
					</div>
					<div
						onClick={() => this.setState({ viewInfoWindow: 3 })}
						className={`info-popup-tab tab-bot ${viewInfoWindow === 3 &&
              "selected"}`}
					>
						<img src={shareIcon} alt="Share" className="info-window-icon" />
					</div>
				</div>
			</Animated>
		);
	}
}

export default InfoWindow;
