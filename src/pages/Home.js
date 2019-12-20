import React, { Component } from "react";
import { Grid, withStyles } from "@material-ui/core";
import Category from "../components/Category";
import Header from "../components/Header";
import RatingBar from "../components/RatingBar";

const styles = {
	root: {
		display: "inline-flex",
		maxWidth: 960,
		padding: "1em"
	}
};

class Home extends Component {
	state = {
		categories: [
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
		]
	};

	categorySelected = () => {
		this.props.history.push("/location");
	};
	render() {
		const { classes } = this.props;
		const { categories } = this.state;
		return (
			<div>
				<Header title="Select a category and we'll get you moving!" index={1} />
				<Grid container justify="center" spacing={2} className={classes.root}>
					{categories.map(category => (
						<Grid key={category.id} sm={4} xs={12} item>
							<div onClick={this.categorySelected}>
								<Category category={category} />
							</div>
						</Grid>
					))}
				</Grid>
				<RatingBar />
			</div>
		);
	}
}
export default withStyles(styles)(Home);
