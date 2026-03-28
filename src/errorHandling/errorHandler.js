const e = require('express');
const express = require('express');
const app = express();

app.use('/', (err, req, res, next) => {
    console.log('Default route handler');
    if (!err) {
        next();
    }else {
        console.error('Error:', err);
        res.status(500).send('Internal Server Error');
    }
});

// Middleware 1 
app.get('/user/address', (req, res, next) => {
    console.log('User address details');
    res.send('Response from Middleware 1');
});

// Middleware 2
app.get('/user/bankDetails', (req, res, next) => {
    console.log('user bank details');
    res.send('Response from Middleware 2');
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});