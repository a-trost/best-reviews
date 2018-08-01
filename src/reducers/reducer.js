const reducerDefaultState = {
	centerLatLng: { lat: 41.373346, lng: -71.9532523 },
	placeResults: [],
	selectedMarker: null,
	listFilter: "",
	searchLocation: "",
	category: "shopping",
	formError: "",
	mapLoaded: false,
};

export default (state = reducerDefaultState, { type, payload }) => {
	switch (type) {
		case "SET_SEARCH_LOCATION": {
			return { ...state, searchLocation: payload.searchLocation };
		}
		case "SET_SEARCH_CATEGORY": {
			return { ...state, category: payload.category };
		}
		case "ADD_SEARCH_RESULT": {
			payload.place.bestReview = payload.bestReview;
			const newPlaceResults = state.placeResults.concat(payload.place);
			return { ...state, placeResults: newPlaceResults };
		}
		case "CLEAR_SEARCH_RESULTS": {
			return { ...state, placeResults: [] };
		}
		case "SET_LIST_FILTER": {
			return { ...state, listFilter: payload.listFilter };
		}
		case "SET_SELECTED_MARKER": {
			return { ...state, selectedMarker: payload.markerId };
		}
		case "SET_CENTER_LAT_LNG": {
			return { ...state, centerLatLng: payload.centerLatLng };
		}
		case "SET_FORM_ERROR": {
			return { ...state, formError: payload.formError };
		}
		case "SET_MAP_LOADED": {
			return { ...state, mapLoaded: payload.mapLoaded };
		}
		default: {
			return state;
		}
	}
};
