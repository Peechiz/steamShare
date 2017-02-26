import React, { Component } from 'react';
import tf2 from './assets/images/tf2.jpg'

class GamesList extends Component {
  render() {
    return (
      <div className="col-sm-6">
        <div className="well">
          <h2>My Games</h2>
          <p>Click to share!</p>
          <hr />
          <img src={tf2}/>          
        </div>
      </div>
    )
  }
}

export default GamesList;
