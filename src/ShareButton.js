import React, { Component } from 'react';

class ShareButton extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.onClick()
  }
  render() {

    return (
      <button className="btn btn-success btn-sm" onClick={this.handleClick}>Click Meh</button>
    )

  }
}

export default ShareButton;
