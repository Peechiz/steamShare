import React, { Component } from 'react';
import Header from './Header';
// import Footer from './Footer';
import UserSearch from './UserSearch';
import GamesList from './GamesList';
import ShareBox from './ShareBox';
import tf2 from './assets/images/tf2.jpg'



class App extends Component {

  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {games: []}
  }

  handleSubmit(fetched) {
    this.setState({games: fetched})
  }

  render() {
    const games = this.state.games;
    return (
      <div>
        <Header />
          <div className="jumbotron">
            <div className="container">
              <h1>HEY THERE KIDS</h1>
                This is some content
            </div>
          </div>

          <UserSearch onSubmit={this.handleSubmit}/>
          <GamesList games={games}/>
          <ShareBox/>

      </div>
    );
  }
}

export default App;
