const express = require('express');
const path = require('path');
const scrape = require('./scrape/getGames')

let app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.post('/scrape/:user', (req,res) => {
  scrape(req.params.user)
    .then(games => {
      res.send(games)
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    })
})

var port = process.env.PORT || 9001
app.listen(port,() => {
  console.log('The Server is running on ' + port);
});
