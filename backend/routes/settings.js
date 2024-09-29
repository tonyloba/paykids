const express = require('express');
const settings = express.Router();

// Access all settings
settings.get('/', function(req, res, next) {
  res.json({});
});

module.exports = settings;
