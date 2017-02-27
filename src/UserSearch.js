import React, { Component } from 'react';
import FriendsList from './FriendsList'

class UserSearch extends Component {
  constructor(props){
    super(props);
    this.state = {user: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({user: event.target.value})
  }

  handleSubmit(event) {
    var self = this;
    function reqRes(){
      //console.log(this.responseText);
      self.props.onSubmit(JSON.parse(this.responseText))
    }
    var fetchGames = new XMLHttpRequest();
    fetchGames.addEventListener('load', reqRes);
    fetchGames.open('POST', `/scrape/${this.state.user}`);
    fetchGames.send();

    event.preventDefault();
  }

  render() {
    return (
      <div className="col-sm-3">
        <div className="well">
          <h3>Enter your Steam handle</h3>
          <form onSubmit={this.handleSubmit}>
            <label>User: </label>
            <input type="text" className="form-control" value={this.state.user} onChange={this.handleChange}/>
            <input type="submit" value="Submit" className="btn btn-success"/>
          </form>

          <FriendsList />
        </div>
      </div>
    );
  }
}

export default UserSearch;
