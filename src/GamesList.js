import React, { Component } from 'react';
import Game from './Game';

class GamesList extends Component {
  const game = this.state.games.map(game =>
    <Game detail={game.detail}>
  )
  render() {
    return (
      <div className="col-sm-5">
        <div className="well">
          <h2>My Games</h2>
          <p>Click to share!</p>
          <hr />
          <Game/>
        </div>
      </div>
    )
  }
}

export default GamesList;
