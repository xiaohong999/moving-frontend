import React, { Component } from "react";

export default class Footer extends Component {
	render() {
		const style = {
			root: {
				left: 0,
				bottom: 0,
				position: "fixed",
				width: "100%",
				height: 30,
				background: "var(--colorMain)",
				padding: 10,
				fontSize: 20,
				color: "var(--colorYellow)"
			}
		};
		return <div style={style.root}>This is Footer</div>;
	}
}
