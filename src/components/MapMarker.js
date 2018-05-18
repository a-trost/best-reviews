import React, { Component } from 'react';
import mapMarker from "../img/mapmarker.svg";

class MapMarker extends Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
    this.handleClick = this.handleClick.bind(this);
    super(props);
    this.state = {
      isSelected: false
      };
  }

  handleClick() {
    this.setState({isSelected:true})
  }

  handleClose() {
    this.setState({isSelected:false})
  }

  infoWindow() {
      return(
        <div className="info-popup">
      {this.props.bestReview.precedingPhrase}  {this.props.placeName} {this.props.bestReview.connectingPhrase} THE BEST, THE BEST, THE BEST, THE BEST {this.props.bestReview.endingPhrase}
        <p onClick={this.handleClose}>X</p>
    </div>
      )
  }
  // desiredResult:"DSW sells THE BEST, THE BEST, THE BEST, THE BEST BLUE SHOES",
  // searchTerms:["shoe store"],
  // precedingPhrase: "",
  // connectingPhrase:"sells",
  // bestRepetitions:4,
  // endingPhrase:"BLUE SHOES.",
  // category:"shopping"


  render() {
  return (
  <div>
        {this.state.isSelected && this.infoWindow()}
    <img src={mapMarker} alt={this.props.placeName} className="map-marker" onClick={this.handleClick}/>
        </div>
    )
  }
  }
export default MapMarker;