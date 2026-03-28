const express = require('express');
const app = express();
// checking admin auth utility function
const adminAuthCheck = require('./middlewares/auth').adminAuthCheck;
// Middleware 1- Making sure only admin can access the routes under /admin
app.use('/admin', adminAuthCheck);

// Middleware 2 - admin can access all routes under /admin, but we can have different handlers for different user groups
app.get('/admin/userGroupOne', (req, res, next) => {
    console.log('Data from user group one');
    res.send('Response from user group one');
});

// Middleware 3 - admin can access all routes under /admin, but we can have different handlers for different user groups
app.get('/admin/userGroupTwo', (req, res, next) => {
    console.log('Data from user group two');
    res.send('Response from user group two');
});

// Middleware 4 - admin can access all routes under /admin, but we can have different handlers for different user groups
app.delete('/admin/delete', (req, res, next) => {
    console.log('Data from delete route');
    res.send('Response from delete route');
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});