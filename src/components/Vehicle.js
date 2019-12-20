import React, { Component } from "react";
import { MdInfoOutline } from "react-icons/md";
import { withStyles } from "@material-ui/core/styles";

const styles = {
	root: {
		borderRadius: 20,
		backgroundColor: "var(--colorWhite)",
		justifyContent: "center",
		cursor: "pointer",
		boxShadow: "0.01em 0.01em 0 var(--colorGray)",
		"&:hover": {
			backgroundColor: "var(--colorMain)",
			color: "var(--colorBg)",
			"& $luggers": {
				background: "var(--colorBg)",
				color: "var(--colorMain)"
			},
			"& $description": {
				color: "var(--colorWhite)"
			}
		}
	},
	icon: {
		maxWidth: "50%",
		margin: "auto",
		padding: "4em 0 1em 0",
		display: "block"
	},
	title: {
		display: "flex",
		justifyContent: "center"
	},
	name: {
		textAlign: "center",
		fontSize: 24,
		fontWeight: 600
	},
	luggers: {
		verticalAlign: "middle",
		margin: 5,
		padding: "2px 8px",
		background: "var(--colorMain)",
		borderRadius: 2,
		color: "var(--colorWhite)",
		fontSize: 12
	},
	description: {
		color: "var(--colorGray)",
		padding: "5px 4em",
		fontSize: 15,
		minHeight: 40
	},
	price: {
		padding: "1em 3em",
		fontSize: 20,
		fontWeight: 600
	},
	info: {
		paddingLeft: 5,
		marginTop: -5,
		verticalAlign: "middle"
	}
};

class Vehicle extends Component {
	render() {
		const { classes, vehicle } = this.props;
		return (
			<div className={classes.root}>
				<img className={classes.icon} src={vehicle.icon} alt="icon" />
				<div className={classes.title}>
					<div className={classes.name}>{vehicle.name}</div>
					<div className={classes.luggers}>
						{vehicle.luggers > 1
							? `${vehicle.luggers} Luggers`
							: `${vehicle.luggers} Lugger`}
					</div>
				</div>
				<div className={classes.description}>{vehicle.description}</div>
				<div className={classes.price}>
					${vehicle.price} + ${vehicle.additionalPrice} per labor min
					<MdInfoOutline className={classes.info} size={24} />
				</div>
			</div>
		);
	}
}
export default withStyles(styles)(Vehicle);
