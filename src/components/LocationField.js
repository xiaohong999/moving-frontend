import React, { Component } from "react";
import { TextField, withStyles } from "@material-ui/core";
import { MdArrowUpward, MdArrowDownward } from "react-icons/md";
import PlacesAutocomplete, {
	geocodeByAddress,
	getLatLng
} from "react-places-autocomplete";

const styles = {
	root: {
		display: "inline-flex",
		alignItems: "center",
		width: 300,
		marginRight: 20
	},
	arrow: {
		margin: 15,
		marginLeft: 0,
		color: "var(--colorGray)"
	},
	input: {
		width: "100%"
	},
	dropDown: {
		position: "absolute",
		width: 330,
		marginTop: 14,
		marginLeft: -40,
		borderRadius: 6,
		zIndex: 999,
		overflow: "hidden"
	},
	itemActive: {
		padding: "10px 5px",
		background: "var(--colorMain)",
		color: "var(--colorWhite)"
	},
	itemNormal: {
		padding: "10px 5px",
		background: "var(--colorWhite)",
		color: "var(--colorBlack)"
	}
};

class LocationField extends Component {
	constructor(props) {
		super(props);
		this.state = { address: "" };
	}

	handleChange = address => {
		this.setState({ address });
	};

	handleSelect = address => {
		this.setState({
			address: address
		});
		geocodeByAddress(address)
			.then(results => getLatLng(results[0]))
			.then(latLng => {
				this.props.placeSelected({
					coordinate: latLng,
					address: address
				});
			})
			.catch(error => console.error("Error", error));
	};

	render() {
		const { classes, direction } = this.props;
		const arrow =
			direction === 0 ? (
				<MdArrowUpward className={classes.arrow} />
			) : (
				<MdArrowDownward className={classes.arrow} />
			);
		const label = direction === 0 ? "Pickup address" : "Destination";
		const placeholder = direction === 0 ? "Enter pickup" : "Enter destination";
		return (
			<div className={classes.root}>
				{arrow}

				<PlacesAutocomplete
					value={this.state.address}
					onChange={this.handleChange}
					onSelect={this.handleSelect}
				>
					{({
						getInputProps,
						suggestions,
						getSuggestionItemProps,
						loading
					}) => (
						<div className={classes.input}>
							<TextField
								{...getInputProps({
									label: label,
									placeholder: placeholder,
									className: classes.input,
									InputLabelProps: {
										shrink: true
									}
								})}
							/>
							<div className={classes.dropDown}>
								{loading && <div>Loading...</div>}
								{suggestions.map(suggestion => {
									const className = suggestion.active
										? classes.itemActive
										: classes.itemNormal;
									// inline style for demonstration purpose
									return (
										<div
											{...getSuggestionItemProps(suggestion, {
												className
											})}
										>
											<span>{suggestion.description}</span>
										</div>
									);
								})}
							</div>
						</div>
					)}
				</PlacesAutocomplete>
			</div>
		);
	}
}
export default withStyles(styles)(LocationField);
