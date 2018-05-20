import React from 'react';
import mapMarker from "../img/mapmarker.svg";
import InfoWindow from "./InfoWindow";


function MapMarker(props) {
  return(
  <div>
        {(props.selectedMarker == props.index) && 
        <InfoWindow 
          bestReview={props.bestReview} 
          placeName={props.placeName}
          index={props.index}
          handleCloseFunction={props.handleCloseFunction}
        />
        }
    <img src={mapMarker} alt={props.placeName} id={props.index} className="map-marker" onClick={props.handleClickFunction}/>
        </div>
    )
  }
export default MapMarker;