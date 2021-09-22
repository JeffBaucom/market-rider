const express = require('express');
// const winston = require('winston'),
    // expressWinston = require('express-winston');
// const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

const dbUrl = 'mongodb://localhost/waxy-bird';
const PORT = process.env.PORT || 8080;

const Score = require('./score');

const app = express();

// app.use(cors({
//     origin: '*',
// }));

// app.use(expressWinston.logger({
//   transports: [
//     new winston.transports.Console()
//   ],
//   format: winston.format.combine(
//     winston.format.colorize(),
//     winston.format.json()
//   ),
//   meta: true, // optional: control whether you want to log the meta data about the request (default to true)
//   msg: 'HTTP {{req.method}} {{req.url}}', // optional: customize the default logging message. E.g. "{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}"
//   expressFormat: true, // Use the default Express/morgan request formatting. Enabling this will override any msg if true. Will only output colors with colorize set to true
//   colorize: true, // Color the text and status code, using the Express/morgan color palette (text: gray, status: default green, 3XX cyan, 4XX yellow, 5XX red).
//   ignoreRoute: function (req, res) { return false; } // optional: allows to skip some log messages based on request and/or response
// }));

app.use(express.static(__dirname + 'client/public'));

// add middlewares
app.use(express.static(path.join(__dirname, "client/build")));
app.use(express.static("client"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(dbUrl);


/* 
* -------------
* ROUTING -----  
* ------------- 
*/ 

app.get('/api', (req, res) => {
  res.json({ message: 'hello from server!'});
});

app.post('/api/score', (req, res, next) => {
  // req.body = {
  //   WalletId: '',
  //   Score: ''
  // }
  console.log(req.body);
  let score = new Score({
    walletId: req.body.WalletID,
    score: req.body.Score
  });
  score.save((err, data) => {
    if (err) {
      console.log(err);
      res.json({error: err});
    } else {
      res.json({success: data});
    }
  })
});

app.get('/api/scores', function(req, res){
  Score.find({}).sort({score: "desc"}).exec(function(err, data) {
      if (err) {
          console.log(err);
          res.json({error: err});
      } else {
          res.json(data);
      }
  });
});

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});