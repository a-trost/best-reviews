import React from 'react';
import mapMarker from "../img/mapmarker.svg";

function MapMarker(props) {

  return (
  <div>
        <div className="info-popup">
        "This place has THE BEST, THE BEST, THE BEST, THE BEST REVIEWS."
    </div>
    <img src={mapMarker} alt="Alt" className="map-marker"/>
        </div>
    )
  }
export default MapMarker;