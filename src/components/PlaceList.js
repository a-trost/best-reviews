import React from "react";
import { connect } from "react-redux";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Input from "@material-ui/core/Input";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import ListItemText from "@material-ui/core/ListItemText";
import daveCircle1 from "../img/dave-circle-1.png";
import daveCircle2 from "../img/dave-circle-2.png";
import daveCircle3 from "../img/dave-circle-3.png";
import daveCircle4 from "../img/dave-circle-4.png";
import daveCircle5 from "../img/dave-circle-5.png";
import daveCircle6 from "../img/dave-circle-6.png";
import daveCircle7 from "../img/dave-circle-7.png";
import daveCircle8 from "../img/dave-circle-8.png";
import daveCircle9 from "../img/dave-circle-9.png";
import daveCircle10 from "../img/dave-circle-10.png";

const daveCircles = [
  daveCircle1,
  daveCircle2,
  daveCircle3,
  daveCircle4,
  daveCircle5,
  daveCircle6,
  daveCircle7,
  daveCircle8,
  daveCircle9,
  daveCircle10
];

function PlaceList(props) {
  let filteredPlaceResults = props.placeResults
    ? props.placeResults.filter(place =>
        place.name.toLowerCase().includes(props.listFilter.toLowerCase())
      )
    : [];
  return (
    <div className="place-list">
      <div className="place-list-search-box">
        <Input
          placeholder="Search Places"
          fullWidth
          inputProps={{
            "aria-label": "Description"
          }}
          value={props.listFilter}
          onChange={props.handleListFilterChange}
        />
      </div>
      <Divider />
      <List component="nav">
        {filteredPlaceResults.map((place, index) => {
          return (
            <ListItem
              button
              onClick={() => props.handleListItemClick(place, index)}
              key={index}
            >
              <img width="40px" src={daveCircles[index]} />
              <ListItemText primary={place.name} />
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}

const mapStateToProps = (state) => { 
	return { 
		placeResults: state.placeResults, 
    // category: state.category,
    // searchLocation: state.searchLocation,
    // centerLatLng: state.centerLatLng,
		selectedMarker: state.selectedMarker,
		listFilter: state.listFilter,
	};
};


export default connect(mapStateToProps)(PlaceList);

