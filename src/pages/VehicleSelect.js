import React, { Component } from "react";
import { Grid, withStyles, Button, Box } from "@material-ui/core";
import Vehicle from "../components/Vehicle";
import Header from "../components/Header";

const styles = {
	root: {
		display: "inline-flex",
		maxWidth: 960,
		padding: 20
	},
	button: {
		background: "var(--colorYellow)",
		maxWidth: 910,
		padding: 16
	}
};

class VehicleSelect extends Component {
	state = {
		vehicles: [
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
		]
	};
	render() {
		const { classes } = this.props;
		const { vehicles } = this.state;
		return (
			<div>
				<Header title="Select a vehicle" index={3} />
				<div>
					<Grid container justify="center" spacing={2} className={classes.root}>
						{vehicles.map(vehicle => (
							<Grid key={vehicle.id} sm={6} xs={12} item>
								<Vehicle vehicle={vehicle} />
							</Grid>
						))}
					</Grid>
				</div>
				<div>
					<Box px={3}>
						<Button fullWidth className={classes.button}>
							Continue
						</Button>
					</Box>
				</div>
			</div>
		);
	}
}
export default withStyles(styles)(VehicleSelect);
