const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

// Use CORS middleware to allow requests from localhost:8080
app.use(cors({
  origin: 'http://localhost:8080'
}));

// Serve locales (translations) from "client/public/locales"
app.use('/locales', express.static(path.join(__dirname, '../../client/public/locales')));

// Serve index.html on any unmatched route (for React Router support)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

/*
Summary of API Endpoints:
Method	Endpoint	        Description
GET	    /api/game/today	  Get today's game state and user guesses
POST	  /api/game/guess	  Submit a guess and get feedback
GET	    /api/game/history	Get user's game history (optional)
POST	  /api/game/reset	  Reset today's game (optional)
*/