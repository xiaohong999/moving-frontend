import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Grid } from "@material-ui/core";
import Header from "../layouts/Header";
import Category from "../components/Category";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from "../layouts/Footer";
import { categorySelected } from "../redux/actions";

class Home extends Component {
	onClickCategory = category => {
		this.props.history.push("/book/location");
		this.props.categorySelected(category);
	};
	render() {
		const { categories } = this.props;
		return (
			<div
				style={{
					background:
						"no-repeat, linear-gradient(-180deg, rgba(40, 48, 96, 0.3) 2%, rgba(39, 47, 96, 0.6) 49%, rgb(40, 48, 96)), url('bg.jpg')",
					height: 600
				}}
				className="home"
			>
				<Header />
				<div className="title">Move anything</div>
				<div className="subtitle">with the push of a button</div>
				<Container maxWidth="md" style={{ marginTop: 20 }}>
					<Carousel
						autoPlay
						infiniteLoop={true}
						showThumbs={false}
						showArrows={false}
						showStatus={false}
						emulateTouch={true}
						swipeable={true}
					>
						<div className="banner">
							<div className="title">
								<img
									className="icon"
									src="https://image.flaticon.com/icons/png/512/145/145867.png"
								/>
								Hong
							</div>
							<div className="description">
								"This website is such a fast, easy, and convenient service! I've
								used them twice now and both moves have been amazing. I highly
								recommend this service to anyone who has no other way to
								transport big items!"
							</div>
						</div>
						<div className="banner">
							<div className="title">
								<img
									className="icon"
									src="https://image.flaticon.com/icons/png/512/145/145862.png"
								/>
								Mei
							</div>
							<div className="description">
								"I bought a very large and heavy dresser and was worried about
								how to get it home. Lugg really saved my day! Brett and Tamas
								were super helpful and easy to communicate with. Definitely a
								five star experience!"
							</div>
						</div>
					</Carousel>
				</Container>
				<Grid container justify="center" style={{ marginTop: 20 }}>
					<Grid item md={9} sm={10} xs={12}>
						<Grid container justify="center" spacing={3}>
							{categories.map(category => (
								<Grid key={category.id} sm={4} xs={12} item>
									<div onClick={this.onClickCategory.bind(this, category)}>
										<Category category={category} />
									</div>
								</Grid>
							))}
						</Grid>
					</Grid>
				</Grid>
				<div className="how-works">
					<div className="title">How it works</div>
					<div className="subtitle">Anything moved in 3 easy steps</div>
					<div className="image">
						<img src="https://lugg.com/static/media/hand-with-couch.db21deb9.png" />
					</div>
					<div className="step">
						<div className="title">1. Request to us</div>
						<div className="subtitle">
							Set your pickup location and destination, choose the size of
							vehicle that is right for you, and when you would like us to
							arrive.
						</div>
					</div>
					<div className="step">
						<div className="title">2. Request to us</div>
						<div className="subtitle">
							Set your pickup location and destination, choose the size of
							vehicle that is right for you, and when you would like us to
							arrive.
						</div>
					</div>
					<div className="step">
						<div className="title">3. Request to us</div>
						<div className="subtitle">
							Set your pickup location and destination, choose the size of
							vehicle that is right for you, and when you would like us to
							arrive.
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

const mapStateToProps = state => ({
	categories: state.categories
});
const mapDispatchToProps = dispatch => ({
	categorySelected: category => dispatch(categorySelected(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
