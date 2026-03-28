const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.use('/user', (req, res, next) => {
  console.log('User Page Handler 1');
  next();
  //res.send('User Page Response Handler 1');

},
  (req, res) => {
    console.log('User Page Handler 2');
    res.send('User Page Response Handler 2');
  }, (req, res) => {
    console.log('User Page Handler 3');
    res.send('User Page Response Handler 3');
  }
);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});