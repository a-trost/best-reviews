export const setSearchLocation = (searchLocation = "") => ({
	type: "SET_SEARCH_LOCATION",
	payload: {
		searchLocation
	}
});

export const setCategory = (category = "") => ({
	type: "SET_SEARCH_CATEGORY",
	payload: {
		category
	}
});

export const addSearchResult = (place, bestReview) => ({
	type: "ADD_SEARCH_RESULT",
	payload: {
		place,
		bestReview
	}
});

export const clearSearchResults = () => ({ type: "CLEAR_SEARCH_RESULTS" });

export const setListFilter = (listFilter = "") => ({
	type: "SET_LIST_FILTER",
	payload: {
		listFilter
	}
});

export const setSelectedMarker = (markerId = null) => ({
	type: "SET_SELECTED_MARKER",
	payload: {
		markerId
	}
});

export const setCenterLatLng = (lat = 41.373346, lng = -71.9532523) => ({
	type: "SET_CENTER_LAT_LNG",
	payload: {
		centerLatLng: { lat, lng }
	}
});

export const setFormError = (formError="") => ({
	type: "SET_FORM_ERROR",
	payload: {
		formError,
	}
});

export const setMapLoaded = (mapLoaded = true) => ({
	type: "SET_MAP_LOADED",
	payload: {
		mapLoaded,
	}
});