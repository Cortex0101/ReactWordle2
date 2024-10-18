const express = require('express');
const cors = require('cors');
const path = require('path');
const { compress, decompress } = require("express-compress");

require('dotenv').config();


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
app.use(express.static(path.join(__dirname, '../../client/dist')));

// API Routes
const usersRoutes = require('./routes/api/users');
const authRoutes = require('./routes/api/auth');

app.use('/api/users', usersRoutes);
app.use('/api/auth', authRoutes);

// Error handling
const errorHandler = require('./routes/middleware/ErrorHandler');

app.use(errorHandler);

// Serve index.html on any unmatched route (for React Router support)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});