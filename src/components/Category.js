import React, { Component } from "react";
import { MdArrowForward } from "react-icons/md";
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
			color: "var(--colorBg)"
		}
	},
	icon: {
		height: 120,
		margin: "auto",
		padding: "1em",
		display: "block"
	},

	name: {
		textAlign: "center",
		fontSize: "larger",
		fontWeight: 600
	},
	arrow: {
		margin: "auto",
		padding: "1em",
		display: "block"
	}
};

class Category extends Component {
	render() {
		const { classes, category } = this.props;
		return (
			<div className={classes.root}>
				<img className={classes.icon} src={category.icon} alt="icon" />
				<div className={classes.name}>{category.name}</div>
				<MdArrowForward className={classes.arrow} />
			</div>
		);
	}
}
export default withStyles(styles)(Category);
