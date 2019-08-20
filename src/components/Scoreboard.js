import React, { Component } from 'react';
import Player from './Player';
import AddPlayer from './AddPlayer'

import './Scoreboard.css';

export default class Scoreboard extends Component {
	state = {
		players: [
			{ id: 1, name: 'Arien', score: 2 },
			{ id: 2, name: 'David', score: 5 },
			{ id: 3, name: 'Mimi', score: 4 }
		]
	};

	renderPlayer = (player) => {
		return (
			<Player
				id={player.id}
				name={player.name}
				score={player.score}
				key={player.id}
				incrementScore={this.incrementScoreOfPlayer}
			/>
		);
	};

	incrementScoreOfPlayer = (id) => {
		const updatedPlayers = this.state.players.map((player) => {
			if (player.id === id) {
				return { ...player, score: player.score + 1 };
			} else {
				return player;
			}
		});
		this.setState({ players: updatedPlayers });
  };
  
  addPlayer = (name) => {
    const { players } = this.state
    this.setState({players: [ ...players, {id: players.length + 1, name, score: 0}]})
  }
  

	render() {
		return (
			<div className="scoreboard">
				<h1>Scoreboard</h1>
				<ul> {[ ...this.state.players ]
                .sort((a, b) => b.score - a.score)
                .map(this.renderPlayer)}
                <AddPlayer addPlayer={this.addPlayer}/>
        </ul>
			</div>
		);
	}
}
