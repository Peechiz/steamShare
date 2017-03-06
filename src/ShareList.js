import React, { Component } from 'react';
import ShareListItem from './ShareListItem'

class ShareList extends Component {

  render() {
    const items = this.props.items.map((item, id) =>
      <ShareListItem game={item} key={id} onDeselect={this.props.onDeselect}/>
      )
    return (
      <div className="col-sm-4">
        <div className="well">
          <ul>
            <li>{items}</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default ShareList;
