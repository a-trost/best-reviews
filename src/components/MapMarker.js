import React from "react";
import mapMarker from "../img/mapmarker.svg";
import InfoWindow from "./InfoWindow";

function MapMarker(props) {
	const selected = props.selectedMarker === props.place.place_id;
	return (
		<div>
			{selected && (
				<InfoWindow
					bestReview={props.place.bestReview}
					placeName={props.place.name}
					handleCloseFunction={props.handleMapMarkerClose}
					lat={props.lat}
					lng={props.lng}
				/>
			)}
			<img
				src={mapMarker}
				alt={props.place.name}
				id={props.index}
				className={selected ? "map-marker selected" : "map-marker"}
				onClick={() => props.handlePlaceClick(props.place)}
			/>
		</div>
	);
}
export default MapMarker;
