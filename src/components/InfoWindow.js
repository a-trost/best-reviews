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
      viewDavesReview: true
    };
  }

  createTheBestSpans = (repetitions = 4) => {
    let spans = [];
    for (let i = 1; i < repetitions; i++) {
      spans.push(<span className="the"> THE </span>);
      spans.push(<span className="best">BEST,</span>);
    }
    spans.push(<span className="the"> THE </span>);
    spans.push(<span className="best">BEST </span>);
    return spans;
  };

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

  yelpsReview() {
    return (
      <div>
        <h3>A Yelp Review</h3>
        What people on yelp think.
        <br />
        {this.starRating(3, "yelp")}
        <br />
        <Button
          color="primary"
          variant="outlined"
          onClick={() => this.setState({ viewDavesReview: true })}
        >
          Dave's Review
        </Button>
      </div>
    );
  }

  starRating(rating, brand) {
    const starCount = Math.round(rating);
    let starImage = {};
    if (brand === "dave") {
      const daveImages = [dave0, dave1, dave2, dave3, dave4, dave5];
      starImage = daveImages[starCount];
    } else {
      const yelpImages = [yelp0, yelp1, yelp2, yelp3, yelp4, yelp5];
      starImage = yelpImages[starCount];
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
        {this.state.viewDavesReview ? this.davesReview() : this.yelpsReview()}

      </div>
    );
  }
}

export default InfoWindow;
