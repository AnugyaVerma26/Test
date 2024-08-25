exports.postData = (req, res) => {
    // Handle POST request logic
    res.send('Data received');
  };
  
  exports.getData = (req, res) => {
    // Handle GET request logic
    res.json({ message: 'Hello World' });
  };
  