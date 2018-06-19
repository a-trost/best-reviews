import React, { Component } from "react";
import dave0 from "../img/d-0.png";
import dave1 from "../img/d-1.png";
import dave2 from "../img/d-2.png";
import dave3 from "../img/d-3.png";
import dave4 from "../img/d-4.png";
import dave5 from "../img/d-5.png";
import closeImage from "../img/close.png";
import daveIcon from "../img/daveIcon.svg";
import peopleIcon from "../img/peopleIcon.svg";
import shareIcon from "../img/shareIcon.svg";

class InfoWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
			viewInfoWindow: 1,
    };
  }


	createTheBestSpans(repetitions = 4) {
    let spans = [];
    for (let i = 1; i < repetitions; i++) {
			spans.push(<span key={i}> THE BEST,</span>);
    }
		spans.push(<span key={5}> THE BEST </span>);
    return spans;
	}

  davesReview() {
    return (
      <div>
        <h3>{this.props.placeName}</h3>
        {this.props.bestReview.precedingPhrase} {this.props.placeName}
        <span className="connecting-phrase">
          {" "}
          {this.props.bestReview.connectingPhrase}
        </span>
        {this.createTheBestSpans()}
        {this.props.bestReview.endingPhrase}
        <br />
        {this.starRating(5, "dave")}
        <br />
        <Button
          color="primary"
          variant="outlined"
          onClick={() => this.setState({ viewDavesReview: false })}
        >
          More Reviews
        </Button>
      </div>
    );
  }

	shareWindow() {
    return (
      <div>
				<h3>Share Window</h3>
        Share with friends.
        <br />
        Facebook, Twitter, Other stuff.
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
    return (
      <div className="info-popup" key={this.props.key}>
        <img
          alt="Close Window"
          src={closeImage}
          onClick={this.props.handleCloseFunction}
          className="close"
        />
					{this.windowSwitch()}

      </div>
    );
  }
}

export default InfoWindow;
