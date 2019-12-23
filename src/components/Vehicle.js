import React, { Component } from "react";
import { MdInfoOutline } from "react-icons/md";

export default class Vehicle extends Component {
	render() {
		const { vehicle, selected } = this.props;
		return (
			<div className={`vehicle ${selected ? "selected" : ""}`}>
				<img className="icon" src={vehicle.icon} alt="icon" />
				<div className="title">
					<div className="name">{vehicle.name}</div>
					<div className="luggers">
						{vehicle.luggers > 1
							? `${vehicle.luggers} Luggers`
							: `${vehicle.luggers} Lugger`}
					</div>
				</div>
				<div className="description">{vehicle.description}</div>
				<div className="price">
					${vehicle.price} + ${vehicle.additionalPrice} per labor min
					<MdInfoOutline className="info" size={24} />
				</div>
			</div>
		);
	}
}
