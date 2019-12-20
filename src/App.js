import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import LocationSelect from "./pages/LocationSelect";
import VehicleSelect from "./pages/VehicleSelect";
import TimeSelect from "./pages/TimeSelect";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/location" component={LocationSelect} />
					<Route exact path="/vehicle" component={VehicleSelect} />
					<Route exact path="/time" component={TimeSelect} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
