import React, {Component} from 'react';
import Header from './Header';
// import Footer from './Footer';
import UserSearch from './UserSearch';
import GamesList from './GamesList';
import ShareList from './ShareList';
import LoginForm from './LoginForm';
import tf2 from './assets/images/tf2.jpg'

class App extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleDeselect = this.handleDeselect.bind(this);
    this.handleShare = this.handleShare.bind(this);

    this.state = {
      games: [
        {
          "title": "Team Fortress 2",
          "hours": 411,
          "img": tf2,
          "url": "http://zombo.com"
        }, {
          "title": "Rocket League",
          "hours": 297,
          "img": tf2,
          "url": "http://zombo.com"
        }, {
          "title": "Terraria",
          "hours": 82,
          "img": tf2,
          "url": "http://zombo.com"
        }
      ],
      friends: ['Excess Blam', 'Bowflex Stairmaster'],
      isLoggedIn: false
    }
  }

  handleSubmit(fetched) {
    var games = fetched.map(x => {
      x.selected = 'false';
      return x;
    });
    this.setState({games: games});
  }

  handleSelect(item) {
    let games = this.state.games
    games.map(game => {
      if (game.title === item.title) {
        game.selected = true;
      }
      return game;
    })
    this.setState({games: games})
  }

  handleDeselect(item) {
    let games = this.state.games
    games.map(game => {
      if (game.title === item.title) {
        game.selected = false;
      }
      return game;
    })
    this.setState({games: games})
  }

  handleShare() {
    let shares = this.state.games.filter(game => game.selected)
    console.log(shares);
  }

  render() {
    const games = this.state.games.filter(game => {
      return !game.selected;
    })
    const selected = this.state.games.filter(game => {
      return game.selected;
    });
    const isLoggedIn = this.state.isLoggedIn;
    let page = null;

    if (isLoggedIn) {
      page = <div>
        <UserSearch onSubmit={this.handleSubmit}
          friends={this.state.friends}/>

        <GamesList games={games} onSelect={this.handleSelect}/>

        <ShareList items={selected}
          onDeselect={this.handleDeselect}
          onShareSubmit={this.handleShare}/>
      </div>
    } else {
      page = <div>
        <LoginForm/>
      </div>
    }

    return (
      <div>
        <Header/>
        <div className="jumbotron">
          <div className="container">
            <h1>HEY THERE KIDS</h1>
            This is some content
          </div>
        </div>

        {page}

      </div>
    );
  }
}

export default App;
