import React, { Component } from 'react';
import Header from './Header';
// import Footer from './Footer';
import UserSearch from './UserSearch';
import GamesList from './GamesList';
import ShareBox from './ShareBox';
import tf2 from './assets/images/tf2.jpg'



class App extends Component {


  render() {
    const games = [
      {
        img: tf2,
        title: "Team Fortress 2",
        hours: 212,
        link: "http://mrpeech.com"
      },
      {
        img: tf2,
        title: "Splatoon",
        hours: 50,
        link: "http://mrpeech.com"
      }
    ]
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
          <GamesList games={games}/>
          <ShareBox/>

      </div>
    );
  }
}

export default App;
