import React, { Component } from 'react';

class FriendsList extends Component {
  render() {
    return (
      <div>
      <hr />
      <h4>Or pick from you friend's libraries!</h4>
        <ul className="friends">
          <li>Excess Blam</li>
          <li>Bowflex Stairmaster</li>
        </ul>
      </div>
    )
  }
}

export default FriendsList;
