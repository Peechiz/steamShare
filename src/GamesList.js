import React, { Component } from 'react';
import Game from './Game';

class GamesList extends Component {
  render() {
    console.log(this.props.games);
    const games = this.props.games.map((game, id) =>
      <Game detail={game} key={id}/>
      )
    return (
      <div className="col-sm-5">
        <div className="well">
          <h2>My Games</h2>
          <p>Click to share!</p>
          <hr />
          <label>Filter: </label>
          <input type="text" className="form-control"/>
          <div>{games}</div>
        </div>
      </div>)
  }
}

export default GamesList;
