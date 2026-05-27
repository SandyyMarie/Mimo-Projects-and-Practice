const express = require('express');
const app = express();
const port = 3000;

app.listen(port, function() {
  console.log(`App is listening on port ${port}`);
});

app.get('/coinFlip', function(req, res) {
  const flip = Math.floor(Math.random() * 2);
  const times = req.query.times || 1;
  const results = [];

  for (let i = 0; i < times; i++) {
    results.push(flip === 0 ? 'Heads' : 'Tails');
  }

  res.status(200).json({
    result: results
  });
});

app.get('/diceRoll', function(req, res) {
  const times = req.query.times || 1;
  let results = [];

  for (let i = 0; i < times; i++) {
    results.push(Math.floor(Math.random() * 6) + 1);
  }

  res.status(200).json({
    result: results
  });
});

app.get('/randomNumber', function(req, res) {
  const min = parseInt(req.query.min) || 1;
  const max = parseInt(req.query.max) || 100;
  if (min >= max) {
    return res.status(400).json({
      error: 'Min should be less than max.'
    });
  }
  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  res.status(200).json({
    result: result
  });
});
