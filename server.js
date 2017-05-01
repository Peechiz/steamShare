const express = require('express');
const session = require('express-session');
const path = require('path');
const passport = require('passport');
const SteamStrategy = require('passport-steam').Strategy;
const scrape = require('./scrape/getGames');
const bodyParser = require('body-parser')
require('dotenv').config();

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

// Use the SteamStrategy within Passport.
//   Strategies in passport require a `validate` function, which accept
//   credentials (in this case, an OpenID identifier and profile), and invoke a
//   callback with a user object.
passport.use(new SteamStrategy({
    returnURL: 'http://localhost:9001/index.html',
    realm: 'http://localhost:9001/',
    apiKey: process.env.STEAM_KEY
  },
  function(identifier, profile, done) {
    // asynchronous verification, for effect...
    process.nextTick(function () {

      // To keep the example simple, the user's Steam profile is returned to
      // represent the logged-in user.  In a typical application, you would want
      // to associate the Steam account with a user record in your database,
      // and return that user instead.
      profile.identifier = identifier;
      return done(null, profile);
    });
  }
));

let app = express();

app.use(session({
    secret: 'your secret',
    name: 'name of session id',
    resave: true,
    saveUninitialized: true}));

app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'build')));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

app.post('/scrape/:user', (req,res) => {
  console.log('Scraping from ' + req.params.user);
  scrape(req.params.user)
    .then(games => {
      res.send(games)
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    })
})


const mailgun = require('./config/mailgun')
app.post('/send', (req,res) => {
  console.log(`Sending to ${req.body.to}`);

  const data = {
    from: 'SteamShare Bot <bot@mrpeech.com>',
    to: `${req.body.to}`,
    subject: `${req.body.subject}`,
    text: `${req.body.games}`
  };

  res.send('sending a mail')

  // mailgun.messages().send(data, function (error, body) {
  //   console.log(body);
  // });
})

var port = process.env.PORT || 9001
app.listen(port,() => {
  console.log('The Server is running on ' + port);
});
