import * as Types from "./types";

const titles = [
	"Select a category and we'll get you moving!",
	"Enter your pickup and destination",
	"Select a vehicle",
	"Select a time",
	"Preview the price"
];

const initialCategories = [
	{
		id: 1,
		name: "Store Delivery",
		icon: "https://image.flaticon.com/icons/png/512/1077/1077976.png"
	},
	{
		id: 2,
		name: "Small Move",
		icon: "https://image.flaticon.com/icons/png/512/1519/1519034.png"
	},
	{
		id: 3,
		name: "Storage Move",
		icon: "https://image.flaticon.com/icons/png/512/755/755912.png"
	},
	{
		id: 4,
		name: "Craigslist Pickup",
		icon: "https://image.flaticon.com/icons/png/512/1786/1786971.png"
	},
	{
		id: 5,
		name: "Donations",
		icon: "https://image.flaticon.com/icons/png/512/101/101976.png"
	},
	{
		id: 6,
		name: "Junk Removal",
		icon: "https://image.flaticon.com/icons/png/512/2165/2165371.png"
	}
];

const initialVehicles = [
	{
		id: 1,
		name: "Pickup",
		luggers: 1,
		description: "Single item deliveries, small moves and smaller loads.",
		price: 47,
		additionalPrice: 0.8,
		icon: "https://lugg.com/static/media/large-lite.7ea517c6.png"
	},
	{
		id: 2,
		name: "Pickup",
		luggers: 2,
		description: "Single item deliveries, small moves and smaller loads.",
		price: 63,
		additionalPrice: 1.4,
		icon: "https://lugg.com/static/media/large-pickup.a14710e4.png"
	},
	{
		id: 3,
		name: "Van",
		luggers: 2,
		description: "Multi-item deliveries and small moves.",
		price: 100,
		additionalPrice: 1.75,
		icon: "https://lugg.com/static/media/large-van.1015d727.png"
	},
	{
		id: 4,
		name: "XL",
		luggers: 2,
		description: "Bulk furniture purchases, home staging and bigger moves.",
		price: 149,
		additionalPrice: 2,
		icon: "https://lugg.com/static/media/large-xl.2e464cd1.png"
	}
];

const initialState = {
	categories: initialCategories,
	vehicles: initialVehicles,
	selectedCategory: null,
	selectedLocation: null,
	selectedVehicle: null,
	selectedDate: null,
	title: titles[0],
	step: 1
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case Types.CATEGORY_SELECTED: {
			return {
				...state,
				selectedCategory: action.category
			};
		}
		case Types.LOCATION_SELECTED: {
			return {
				...state,
				selectedLocation: action.location
			};
		}
		case Types.VEHICLE_SELECTED: {
			return {
				...state,
				selectedVehicle: action.vehicle
			};
		}
		case Types.DATE_SELECTED: {
			return {
				...state,
				selectedVehicle: action.vehicle,
				selectedDate: action.date
			};
		}
		case Types.SET_STEP: {
			return {
				...state,
				title: titles[action.value - 1],
				step: action.value
			};
		}
		default:
			return state;
	}
}
