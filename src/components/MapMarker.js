import React from 'react';
import mapMarker from "../img/mapmarker.svg";

function MapMarker(props) {

  return (
  <div>
        <div className="info-popup">
        Mystic Aquarium is THE BEST, THE BEST, THE BEST, THE BEST FISH ZOO.
        - Dave Grohl
    </div>
    <img src={mapMarker} alt="Alt" className="map-marker"/>
        </div>
    )
  }
export default MapMarker;