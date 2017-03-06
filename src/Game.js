import React, { Component } from 'react';

class Game extends Component {

  handleClick(game){
    this.props.onClick(game)
  }

  render() {
    return (
      <div className="game" onClick={this.handleClick.bind(this, this.props.detail)}>
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
