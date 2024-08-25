const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  // Handle POST request
  res.send('Data received');
});

router.get('/', (req, res) => {
  // Handle GET request
  res.json({ message: 'Hello World' });
});

module.exports = router;
