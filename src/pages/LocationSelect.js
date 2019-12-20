/*global google*/
import React, { Component } from "react";
import { withStyles, Button, Divider, Box } from "@material-ui/core";
import Header from "../components/Header";
import LocationField from "../components/LocationField";
import Map from "../components/Map";

const styles = {
	topPanel: {
		height: 200
	},
	panel: {
		background: "var(--colorWhite)",
		padding: 10,
		display: "inline-flex",
		alignItems: "center"
	},
	divider: {
		height: 30,
		marginRight: 20,
		background: "var(--colorLightGray)"
	},
	button: {
		background: "var(--colorYellow)"
	}
};

class LocationSelect extends Component {
	state = {
		directions: null,
		distance: 0,
		pickup: null,
		destination: null
	};

	showDirection = () => {
		const { pickup, destination } = this.state;
		if (pickup && destination) {
			this.getDistance(pickup, destination);
			const directionsService = new google.maps.DirectionsService();
			directionsService.route(
				{
					origin: pickup,
					destination: destination,
					travelMode: google.maps.TravelMode.DRIVING
				},
				(result, status) => {
					if (status === google.maps.DirectionsStatus.OK) {
						this.setState({
							directions: result
						});
					} else {
						console.error(`error fetching directions ${result}`);
					}
				}
			);
		}
	};

	getDistance = (pickup, destination) => {
		const latLong1 = new google.maps.LatLng(pickup.lat, pickup.lng);
		const latLong2 = new google.maps.LatLng(destination.lat, destination.lng);
		const distance = google.maps.geometry.spherical.computeDistanceBetween(
			latLong1,
			latLong2
		);
		this.setState({
			distance: distance
		});
	};

	buttonClicked = () => {
		this.props.history.push("/vehicle");
	};

	pickupSelected = coordinate => {
		this.setState({
			pickup: coordinate
		});
		this.showDirection();
	};

	destinationSelected = coordinate => {
		this.setState({
			destination: coordinate
		});
		this.showDirection();
	};

	render() {
		const { classes } = this.props;
		const { directions, pickup, destination, distance } = this.state;

		return (
			<div>
				<div className={classes.topPanel}>
					<Header title="Enter your pickup and destination" index={2} />
					<div className={classes.panel}>
						<LocationField direction={0} placeSelected={this.pickupSelected} />
						<Divider orientation="vertical" className={classes.divider} />
						<LocationField
							direction={1}
							placeSelected={this.destinationSelected}
						/>
						<Button
							className={classes.button}
							size="large"
							onClick={() => this.buttonClicked()}
						>
							Continue
						</Button>
					</div>
					<Box mt={1}>
						distance : {Number.parseFloat(distance / 1000).toFixed(2)}km
					</Box>
				</div>
				<Map
					pickup={pickup}
					destination={destination}
					directions={directions}
					width="100%"
					height="calc(100vh - 200px)"
				/>
			</div>
		);
	}
}

export default withStyles(styles)(LocationSelect);
