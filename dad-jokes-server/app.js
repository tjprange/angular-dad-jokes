const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Serving hilarious dad jokes soon...');
});

app.get('*', (req, res) => {
  res.send('No funnies here!');
});

app.listen(port, () => {
  console.log(`Serving super hilarious dad jokes on port ${port}`);
});
