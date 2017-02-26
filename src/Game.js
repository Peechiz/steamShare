import React, { Component } from 'react';
import tf2 from './assets/images/tf2.jpg'

class Game extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="game" key={id}>
        <img src={this.props.img} alt={this.props.title}/>
        <div className="gameDetail">
          <ul>
            <li>Title: {this.props.title}</li>
            <li>Hours: {this.props.hours}</li>
            <li><a href={this.props.link}>Store Page</a></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Game;
