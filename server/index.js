const express = require('express');
const winston = require('winston'),
      expressWinston = require('express-winston');
const cors = require('cors');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(cors({
    origin: '*',
}));

app.use(expressWinston.logger({
    transports: [
      new winston.transports.Console()
    ],
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.json()
    ),
    meta: true, // optional: control whether you want to log the meta data about the request (default to true)
    msg: 'HTTP {{req.method}} {{req.url}}', // optional: customize the default logging message. E.g. "{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}"
    expressFormat: true, // Use the default Express/morgan request formatting. Enabling this will override any msg if true. Will only output colors with colorize set to true
    colorize: true, // Color the text and status code, using the Express/morgan color palette (text: gray, status: default green, 3XX cyan, 4XX yellow, 5XX red).
    ignoreRoute: function (req, res) { return false; } // optional: allows to skip some log messages based on request and/or response
  }));

/* 
 * -------------
 * ROUTING -----  
 * ------------- 
*/ 

app.get('/api', (req, res) => {
    res.json({ message: 'hello from server!'});
});


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});