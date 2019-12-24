import React, { Component } from "react";
import { Container } from "@material-ui/core";
import { Link } from "react-router-dom";

export default class Header extends Component {
	render() {
		return (
			<Container>
				<div className="main-header">
					<Link className="logo" to="/">
						App Logo
					</Link>
					<Link className="menu" to="/">
						Services
					</Link>
					<Link className="menu" to="/">
						Get an estimate
					</Link>
					<Link className="menu" to="/">
						About us
					</Link>
					<Link className="menu book" to="/book">
						Book now
					</Link>
				</div>
			</Container>
		);
	}
}
