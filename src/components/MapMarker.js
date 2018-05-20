import React, { Component } from 'react';
import mapMarker from "../img/mapmarker.svg";
import yelp0 from "../img/y-0.png";
import yelp1 from "../img/y-1.png";
import yelp2 from "../img/y-2.png";
import yelp3 from "../img/y-3.png";
import yelp4 from "../img/y-4.png";
import yelp5 from "../img/y-5.png";
import dave0 from "../img/d-0.png";
import dave1 from "../img/d-1.png";
import dave2 from "../img/d-2.png";
import dave3 from "../img/d-3.png";
import dave4 from "../img/d-4.png";
import dave5 from "../img/d-5.png";

class MapMarker extends Component {
  infoWindow() {
      return(
        <div className="info-popup">
      {this.props.bestReview.precedingPhrase}  {this.props.placeName} {this.props.bestReview.connectingPhrase} 
      {" THE BEST,".repeat(this.props.bestReview.bestRepetitions).slice(0, -1)} 
      {" "} 
      {this.props.bestReview.endingPhrase}
      {this.starRating(5, "dave")}
        <p onClick={this.props.handleCloseFunction}>X</p>
    </div>
      )
  }

  starRating(rating, brand) {
    const starCount = Math.round(rating);
    let starImage = {}
    if (brand === "dave") {
      const daveImages = [dave0, dave1, dave2, dave3, dave4, dave5];
      starImage = daveImages[starCount];
    } else {
      const yelpImages = [yelp0, yelp1, yelp2, yelp3, yelp4, yelp5];
      starImage = yelpImages[starCount];
    }
    return(
        <img src={starImage} alt={`Rating: ${starCount} Stars`}  width="150px"/>
    )
  }

  render() {
  return (
  <div>
        {(this.props.selectedMarker == this.props.index) && this.infoWindow()}
    <img src={mapMarker} alt={this.props.placeName} id={this.props.index} className="map-marker" onClick={this.props.handleClickFunction}/>
        </div>
    )
  }
  }
export default MapMarker;