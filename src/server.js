const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const dataRoutes = require('./routes/dataRoutes');
app.use('/api/data', dataRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
