const express = require('express');
const connectToDB = require('./src/config/database');
const app = express();
const port = 7777;

connectToDB().then(() => {
  console.log('Connected to the database successfully!');
  // Start the server after successful database connection
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}).catch((error) => {
  console.error('Error during database connection:', error);
});
