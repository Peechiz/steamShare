import React, { Component } from 'react';
import ShareListItem from './ShareListItem'
import ShareButton from './ShareButton'

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
          <ShareButton onClick={this.props.onShareSubmit} />
        </div>
      </div>
    )
  }
}

export default ShareList;
