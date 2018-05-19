import React, { Component } from 'react';
import mapMarker from "../img/mapmarker.svg";
import grayStar from "../img/grayStar.svg";
import goldStar from "../img/goldStar.svg";

class MapMarker extends Component {
  infoWindow() {
      return(
        <div className="info-popup">
      {this.props.bestReview.precedingPhrase}  {this.props.placeName} {this.props.bestReview.connectingPhrase} 
      {" THE BEST,".repeat(this.props.bestReview.bestRepetitions).slice(0, -1)} 
      {" "} 
      {this.props.bestReview.endingPhrase}
      {this.starRating(5)}
        <p onClick={this.props.handleCloseFunction}>X</p>
    </div>
      )
  }

  starRating(rating) {
    let stars = [grayStar, grayStar, grayStar, grayStar, grayStar];
    const goldStars = Math.floor(rating);
    for (let i=0; i<goldStars; i++){
      stars[i] = goldStar;
    };
    return(
        <div class="stars-outer">
        {stars.map((star)=><img src={star} width="20px" />)}
        </div>
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