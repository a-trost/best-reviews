import reducer from "../../reducers/reducer";
import reviewList from "../../reviewList";

const currentState = {
	centerLatLng: { lat: 41.373346, lng: -71.9532523 },
	placeResults: [],
	selectedMarker: null,
	listFilter: "",
	searchLocation: "",
	category: "shopping",
	formError: "",
	mapLoaded: false,
};
test("should setup default state", () => {
	const state = reducer(undefined, { type: "@@INIT" });
	expect(state).toEqual(currentState);
});

test("should set search location", () => {
	const action = {
		type: "SET_SEARCH_LOCATION",
		payload: { searchLocation: "54321" },
	};
	const state = reducer(currentState, action);
	expect(state.searchLocation).toBe("54321");
});

test("should clear search location", () => {
	currentState.searchLocation = "56789";
	const action = {
		type: "SET_SEARCH_LOCATION",
		payload: { searchLocation: "" },
	};
	const state = reducer(currentState, action);
	expect(state.searchLocation).toBe("");
});

test("should set search category", () => {
	const action = {
		type: "SET_SEARCH_CATEGORY",
		payload: { category: "funPlaces" },
	};
	const state = reducer(currentState, action);
	expect(state.category).toBe("funPlaces");
});

test("should add search result with best review value", () => {
	const place = { name: "Bob's Burgers", address: "123 Main Street" };
	const bestReview = reviewList[0];
	const action = {
		type: "ADD_SEARCH_RESULT",
		payload: { place, bestReview },
	};
	const state = reducer(currentState, action);
	const newPlace = { ...place, bestReview: reviewList[0] };
	const wrongBestReview = { ...place, bestReview: reviewList[1] };
	expect(state.placeResults[0]).toMatchObject(newPlace);
	expect(state.placeResults[0]).not.toMatchObject(wrongBestReview);
});

test("should clear search results", () => {
	currentState.placeResults = ["place1", "place2", "place3"];
	const action = { type: "CLEAR_SEARCH_RESULTS" };
	const state = reducer(currentState, action);
	expect(state.placeResults).toEqual([]);
});

test("should set list filter", () => {
	const listFilter = "sports";
	const action = { type: "SET_LIST_FILTER", payload: { listFilter } };
	const state = reducer(currentState, action);
	expect(state.listFilter).toEqual("sports");
});

test("should set selected marker", () => {
	const markerId = "2J34932J0MR423J0RJ";
	const action = { type: "SET_SELECTED_MARKER", payload: { markerId } };
	const state = reducer(currentState, action);
	expect(state.selectedMarker).toEqual(markerId);
});

test("should set selected marker", () => {
	const lat = 55;
	const lng = 39;
	const centerLatLng = { lat, lng };
	const action = { type: "SET_CENTER_LAT_LNG", payload: { centerLatLng } };
	const state = reducer(currentState, action);
	expect(state.centerLatLng).toMatchObject(centerLatLng);
});

test("should set form error", () => {
	const error = "This didn't work!";
	const action = { type: "SET_FORM_ERROR", payload: { formError: error } };
	const state = reducer(currentState, action);
	expect(state.formError).toEqual(error);
});

test("should change map loaded to true", () => {
	expect(currentState.mapLoaded).toBe(false);
	const action = { type: "SET_MAP_LOADED", payload: { mapLoaded: true } };
	const state = reducer(currentState, action);
	expect(state.mapLoaded).toBe(true);
});

test("should change map loaded to false", () => {
	currentState.mapLoaded = true;
	expect(currentState.mapLoaded).toBe(true);
	const action = { type: "SET_MAP_LOADED", payload: { mapLoaded: false } };
	const state = reducer(currentState, action);
	expect(state.mapLoaded).toBe(false);
});
