/*global google*/
import React, { Component } from "react";
import { connect } from "react-redux";
import { setStep } from "../../redux/actions";
import { Container, Grid } from "@material-ui/core";
import Map from "../../components/Map";
import { FiCalendar, FiDollarSign } from "react-icons/fi";
import { getDateString } from "../../utils/Utils";

class PricePreview extends Component {
	state = {
		pickup: null,
		destination: null,
		directions: null,
		distance: 0
	};

	componentWillMount() {
		this.props.setStep(5);
	}

	componentDidMount() {
		const { bookData } = this.props;

		if (bookData.selectedLocation) {
			this.setState({
				pickup: bookData.selectedLocation.pickup,
				destination: bookData.selectedLocation.destination
			});
			this.showDirection(
				bookData.selectedLocation.pickup.coordinate,
				bookData.selectedLocation.destination.coordinate
			);
		}
	}

	showDirection = (pickup, destination) => {
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

	render() {
		const { bookData } = this.props;
		const { pickup, destination, distance, directions } = this.state;
		return (
			<Container maxWidth="md" style={{ marginBottom: 10 }}>
				<Map
					pickup={pickup ? pickup.coordinate : null}
					destination={destination ? destination.coordinate : null}
					directions={directions}
					width="100%"
					height="calc(100vh - 550px)"
				/>
				<div className="preview">
					<Grid container>
						<Grid item sm={6} xs={12} style={{ paddingTop: 10 }}>
							<div className="preview-location">
								<img className="icon" src="../pin-up.png" alt="icon" />
								<div className="info">
									<div className="label">Pickup address:</div>
									<div className="address">
										{pickup ? pickup.address : "Not selected"}
									</div>
								</div>
							</div>
							<div className="preview-location">
								<img className="icon" src="../pin-down.png" alt="icon" />
								<div className="info">
									<div className="label">Destination:</div>
									<div className="address">
										{destination ? destination.address : "Not selected"}
									</div>
								</div>
							</div>
							{/* <div className="preview-distance">
								<span
									style={{
										color: "var(--colorMain)",
										paddingRight: 5,

										fontSize: 12,
										fontWeight: 400
									}}
								>
									Distance :
								</span>
								<span>{Number.parseFloat(distance / 1000).toFixed(2)}km</span>
							</div> */}
						</Grid>
						<Grid item sm={6} xs={12}>
							<div className="preview-time-price">
								<div className="label">
									<FiCalendar className="icon" />
									<div className="text">Start time:</div>
								</div>
								<div className="info">
									<div className="date">
										{bookData.selectedDate
											? getDateString(bookData.selectedDate.date)
											: "Not selected"}
									</div>
									<div className="time">
										{bookData.selectedDate
											? `Arrive between ${bookData.selectedDate.time.from} - ${bookData.selectedDate.time.to}`
											: "Not selected"}
									</div>
								</div>
							</div>
							<div className="preview-time-price">
								<div className="label">
									<FiDollarSign className="icon" />
									<div className="text">Price:</div>
								</div>
								<div className="info value">
									{bookData.selectedVehicle ? (
										<div>
											$
											{Number(
												bookData.selectedVehicle.pricePerKm *
													Number.parseFloat(
														bookData.selectedLocation.distance / 1000
													)
											).toFixed(2)}
											{/* <span
												style={{
													paddingLeft: 5,
													fontSize: 14,
													fontWeight: 400
												}}
											>
												(${bookData.selectedVehicle.pricePerKm} * $
												{bookData.selectedLocation.distance}km)
											</span> */}
										</div>
									) : (
										"Not selected"
									)}
								</div>
							</div>
						</Grid>
					</Grid>
				</div>
				<div className="payment-method">
					<div className="label">Payment method</div>
					<div className="kind">
						<img className="item" src="../pay-01.png" alt="master card" />
						<img className="item" src="../pay-02.png" alt="visa" />
						<img className="item" src="../pay-03.png" alt="paypal" />
						<img className="item" src="../pay-04.png" alt="bitcoin" />
					</div>
				</div>
			</Container>
		);
	}
}

const mapStateToProps = state => ({
	bookData: state
});

const mapDispatchToProps = dispatch => ({
	setStep: value => dispatch(setStep(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(PricePreview);
