import React, { Component } from 'react';
import mapMarker from "../img/mapmarker.svg";

class MapMarker extends Component {
  infoWindow() {
      return(
        <div className="info-popup">
      {this.props.bestReview.precedingPhrase}  {this.props.placeName} {this.props.bestReview.connectingPhrase} THE BEST, THE BEST, THE BEST, THE BEST {this.props.bestReview.endingPhrase}
        <p onClick={this.props.handleCloseFunction}>X</p>
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