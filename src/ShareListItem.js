import React, { Component } from 'react'

class ShareListItem extends Component {

  handleDeselect(game){
    this.props.onDeselect(game)
  }

  render() {
    return (
      <div>
        {this.props.game.title}
        <button className="btn btn-danger btn-xs"
          onClick={this.handleDeselect.bind(this, this.props.game)}>remove</button>
      </div>
    )
  }
}

export default ShareListItem;
