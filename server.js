const express = require('express');
const path = require('path');
const scrape = require('./scrape/getGames');
const bodyParser = require('body-parser')
require('dotenv').config();

let app = express();

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


  // mailgun.messages().send(data, function (error, body) {
  //   console.log(body);
  // });
})

var port = process.env.PORT || 9001
app.listen(port,() => {
  console.log('The Server is running on ' + port);
});
