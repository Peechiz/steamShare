import React, { Component } from 'react';

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
    console.log("User: " + this.state.user);
    event.preventDefault();
  }

  render() {
    return (
      <div className="col-sm-3">
        <div className="well">
          <form onSubmit={this.handleSubmit}>
            <label>User: </label>
            <input type="text" className="form-control" value={this.state.user} onChange={this.handleChange}/>
            <input type="submit" value="Submit" className="btn btn-success"/>
          </form>
        </div>
      </div>
    );
  }
}

export default UserSearch;
