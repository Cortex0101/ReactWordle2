const express = require('express');
const cors = require('cors');
const path = require('path');
const { compress, decompress } = require("express-compress");

const { pool } = require('./database/db');

const app = express();

// Use CORS middleware to allow requests from localhost:8080
app.use(cors({
    origin: 'http://localhost:8080'
}));

// Use compression middleware to compress responses
app.use(compress());

// Serve locales (translations) from "client/public/locales"
app.use('/locales', express.static(path.join(__dirname, '../../client/public/locales')));
app.use('/icons', express.static(path.join(__dirname, '../../client/public/icons')));

// Serve static files from "client/dist"
app.use(express.static(path.join(__dirname, '../../client/dist')));

// Serve index.html on any unmatched route (for React Router support)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});