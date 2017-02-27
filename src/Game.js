import React, { Component } from 'react';

class Game extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="game">
        <img src={this.props.detail.img} alt={this.props.detail.title}/>
        <div className="gameDetail">
          <ul>
            <li>Title: {this.props.detail.title}</li>
            <li>Hours: {this.props.detail.hours}</li>
            <li><a href={this.props.detail.link}>Store Page</a></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Game;
