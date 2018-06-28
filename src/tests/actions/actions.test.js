import {
	setSearchLocation,
	setCategory,
	addSearchResult,
	clearSearchResults,
	setListFilter,
	setSelectedMarker,
	setCenterLatLng
} from "../../actions/actions";
import reviewList from "../../reviewList";

test("should setup search location action object with provided value", () => {
	const action = setSearchLocation("12345");
	expect(action).toEqual({
		type: "SET_SEARCH_LOCATION",
		payload: {
			searchLocation: "12345"
		}
	});
});

test("should setup search location action object with no provided value", () => {
	const action = setSearchLocation();
	expect(action).toEqual({
		type: "SET_SEARCH_LOCATION",
		payload: {
			searchLocation: ""
		}
	});
});

test("should setup search category action object", () => {
	const action = setCategory("funPlaces");
	expect(action).toEqual({
		type: "SET_SEARCH_CATEGORY",
		payload: {
			category: "funPlaces"
		}
	});
});

test("should setup add search result action object with given values", () => {
	let place = { name: "Ben's Pizza" };
	let bestReview = reviewList[0];
	const action = addSearchResult(place, bestReview);
	expect(action).toEqual({
		type: "ADD_SEARCH_RESULT",
		payload: {
			place,
			bestReview
		}
	});
});

test("should setup clear search results action object", () => {
	const action = clearSearchResults();
	expect(action).toEqual({ type: "CLEAR_SEARCH_RESULTS" });
});

test("should setup set list filter action object with given value", () => {
	const action = setListFilter("sport");
	expect(action).toEqual({
		type: "SET_LIST_FILTER",
		payload: {
			listFilter: "sport"
		}
	});
});

test("should setup set list filter action object with no value", () => {
	const action = setListFilter();
	expect(action).toEqual({
		type: "SET_LIST_FILTER",
		payload: {
			listFilter: ""
		}
	});
});

test("should setup set selected marker action object with given value", () => {
	const markerId = "435HJKNJLK435JG345";
	const action = setSelectedMarker(markerId);
	expect(action).toEqual({
		type: "SET_SELECTED_MARKER",
		payload: {
			markerId
		}
	});
});

test("should setup set selected marker action object with no value", () => {
	const action = setSelectedMarker();
	expect(action).toEqual({
		type: "SET_SELECTED_MARKER",
		payload: {
			markerId: null
		}
	});
});

test("should set center lat lng action object with given values", () => {
	const lat = 55;
	const lng = 83;
	const action = setCenterLatLng(lat, lng);
	expect(action).toEqual({
		type: "SET_CENTER_LAT_LNG",
		payload: {
			centerLatLng: { lat, lng }
		}
	});
});
