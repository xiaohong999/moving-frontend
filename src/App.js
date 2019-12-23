import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import CategorySelect from "./pages/CategorySelect";
import LocationSelect from "./pages/LocationSelect";
import VehicleSelect from "./pages/VehicleSelect";
import TimeSelect from "./pages/TimeSelect";

import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./redux/reducers";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PricePreview from "./pages/PricePreview";

const store = createStore(reducer);

function App() {
	return (
		<Provider store={store}>
			<div>
				<Header />
				<BrowserRouter>
					<Switch>
						<Route exact path="/" component={CategorySelect} />
						<Route exact path="/location" component={LocationSelect} />
						<Route exact path="/vehicle" component={VehicleSelect} />
						<Route exact path="/time" component={TimeSelect} />
						<Route exact path="/preview" component={PricePreview} />
					</Switch>
				</BrowserRouter>
				<div style={{ height: 50 }} />
			</div>
			<Footer />
		</Provider>
	);
}

export default App;
