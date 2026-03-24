const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('hey there, welcome to my website! i have used different tools to create this website, such as docker, nodejs, express and more. i hope you like it!using jenkins');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
