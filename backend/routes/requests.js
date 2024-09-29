const express = require('express');
const requests = express.Router();

// Access all transactions
requests.get('/', function(req, res, next) {
  res.json({});
});

module.exports = requests;
