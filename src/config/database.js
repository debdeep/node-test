require('dotenv').config();
const mongoose = require('mongoose');

const connectionString = process?.env?.MONGODB_URI;

const connectToDB = async () => {
    await mongoose.connect(connectionString);
}

module.exports = connectToDB