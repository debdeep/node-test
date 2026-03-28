const express = require('express');
const app = express();

// Middleware 1
app.use((req, res, next) => {
    console.log('Middleware 1');
    req.step = 1;
    next();
});

// Middleware 2
app.use((req, res, next) => {
    console.log('Middleware 2');
    req.step++;
    next();
});

// Middleware 3
app.use((req, res, next) => {
    console.log('Middleware 3');
    req.step++;
    next();
});

// Final route handler
app.get('/', (req, res) => {
    res.send(`Total steps: ${req.step}`);
});

app.listen(3000);