import React, { Component } from "react";
import { connect } from "react-redux";
import { setStep } from "../../redux/actions";
import {
	CardElement,
	Elements,
	StripeProvider,
	injectStripe
} from "react-stripe-elements";

class Checkout extends Component {
	constructor(props) {
		super(props);
		this.submit = this.submit.bind(this);
	}

	componentWillMount() {
		this.props.setStep(6);
		const { bookData } = this.props;
		let price =
			bookData.selectedVehicle && bookData.selectedLocation
				? Number(
						bookData.selectedVehicle.pricePerKm *
							Number.parseFloat(bookData.selectedLocation.distance / 1000)
				  ).toFixed(2)
				: 0;
		this.setState({
			price: price
		});
	}

	async submit(ev) {
		// User clicked submit
	}

	render() {
		return (
			<StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
				<Elements>
					<div className="checkout">
						<p>Would you like to complete the purchase?</p>
						<CardElement />
						<button onClick={this.submit}>Purchase</button>
					</div>
				</Elements>
			</StripeProvider>
		);
	}
}

const mapStateToProps = state => ({
	bookData: state
});

const mapDispatchToProps = dispatch => ({
	setStep: value => dispatch(setStep(value))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(injectStripe(Checkout));
