import React, { Component } from 'react';

import './addPlayer.css';

export default class AddPlayer extends Component {
	state = { name: '' };

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.addPlayer(this.state.name);
	};

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	render() {
		return (
			<div className="add-player">
				<form onSubmit={this.handleSubmit}>
					<label>
						Name:
						<input type="text" name="name" onChange={this.handleChange} value={this.state.name} />
					</label>
					<input type="submit" value="Add" />
				</form>
			</div>
		);
	}
}
