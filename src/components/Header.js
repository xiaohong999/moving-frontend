import React, { Component } from "react";
import { withStyles } from "@material-ui/core";

const styles = {
	root: {
		padding: 10,
		fontSize: "larger",
		color: "var(--colorWhite)",
		background: "var(--colorMain)",
		boxShadow: "0 1px 1px grey",
		marginBottom: 30
	},
	index: {
		display: "inline-block",
		padding: 5,
		width: 30,
		height: 30,
		marginRight: 10,
		borderRadius: "50%",
		background: "var(--colorWhite)",
		color: "var(--colorMain)"
	}
};

class Header extends Component {
	render() {
		const { classes, title, index } = this.props;
		return (
			<div className={classes.root}>
				<span className={classes.index}>{index}</span>
				{title}
			</div>
		);
	}
}

export default withStyles(styles)(Header);
