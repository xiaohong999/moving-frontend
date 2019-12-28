import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import { FiDollarSign } from "react-icons/fi";
import { Button } from "@material-ui/core";
import axios from "axios";

class CheckoutForm extends Component {
	constructor(props) {
		super(props);
		this.submit = this.submit.bind(this);
		this.state = {
			countries: []
		};
	}

	componentDidMount() {
		let th = this;
		this.serverRequest = axios
			.get(
				"https://raw.githubusercontent.com/zauribrahimkhalilov/json-files/master/countries.json"
			)
			.then(function(result) {
				th.setState({
					countries: result.data.countries
				});
			});
	}

	async submit(ev) {
		// User clicked submit
	}

	render() {
		const { price } = this.props;
		const { countries } = this.state;
		return (
			<div className="checkout">
				<div className="price">
					<div className="label">Price:</div>
					<div className="value">${price}</div>
				</div>

				<div className="group">
					<div className="row">
						<input
							type="email"
							pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
							placeholder="Email"
							required
						/>
					</div>
				</div>
				<div className="group">
					<div className="row">
						<input placeholder="Name on card" />
					</div>
					<div className="row card">
						<CardElement />
					</div>
				</div>
				<div className="group">
					<div className="row select">
						<select>
							{countries.map(country => (
								<option
									key={country.code}
									value={country.code}
									selected={country.code == "NZ"}
								>
									{country.name}
								</option>
							))}
						</select>
					</div>
					<div className="row">
						<input placeholder="ZIP" />
					</div>
				</div>
				<Button
					fullWidth
					style={{
						padding: 10,
						marginTop: 10,
						background: "var(--colorYellow)"
					}}
					onClick={this.submit}
				>
					Pay
				</Button>
			</div>
		);
	}
}

export default injectStripe(CheckoutForm);
