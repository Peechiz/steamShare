import React, { Component } from 'react';
import Header from './Header';
// import Footer from './Footer';
import UserSearch from './UserSearch';
import GamesList from './GamesList';
import ShareBox from './ShareBox';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
          <div className="jumbotron">
            <div className="container">
              <h1>HEY THERE KIDS</h1>
                This is some content
            </div>
          </div>

          <UserSearch/>
          <GamesList/>
          <ShareBox/>

      </div>
    );
  }
}

export default App;
