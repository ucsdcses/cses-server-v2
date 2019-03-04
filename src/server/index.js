const express = require('express');
const logger = require('./logger');

const app = express();

// Initialiaze API routes

/* /: default route  */
app.get('/', (req, res) => {
  res.send({ cses: 'Website will be sicc' });
});

/* /api/board: Get the details of the board members from a .json file stored in data/ folder and send it as a response */


// Serve the app on a localhost port
logger.info('Server started at port 5000');
app.listen(5000);