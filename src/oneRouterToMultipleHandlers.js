const express = require('express');
const app = express();

// 3 handlers for ONE route
app.get('/multi-handler',
  (req, res, next) => {
    console.log('Handler 1');
    req.data = 'Hello';   // pass data forward to next handler as no send() called
    next();
  },
  (req, res, next) => {
    console.log('Handler 2');
    req.data += ' World';
    next(); // pass data forward to next handler as no send() called after merging data
  },
  (req, res) => {
    console.log('Handler 3');
    res.send(req.data);   // final response
  }
);

app.listen(3000);