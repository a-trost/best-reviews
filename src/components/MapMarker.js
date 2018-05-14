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
        Mystic Aquarium is THE BEST, THE BEST, THE BEST, THE BEST FISH ZOO.
        - Dave Grohl
        <p onClick={this.handleClose}>X</p>
    </div>
      )
  }



  render() {
  return (
  <div>
        {this.state.isSelected && this.infoWindow()}
    <img src={mapMarker} alt="Alt" className="map-marker" onClick={this.handleClick}/>
        </div>
    )
  }
  }
export default MapMarker;