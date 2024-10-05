const express = require('express');
const cors = require('cors');
const path = require('path');
const {compress, decompress} = require("express-compress");
/* text compression */
//const compression = require('compression');
const app = express();
const PLAYER_DATA = [
  {
      "name": "Sarah Jones",
      "games": 77,
      "avgGuesses": "5.61",
      "rating": 35
  },
  {
      "name": "John Brown",
      "games": 5,
      "avgGuesses": "3.39",
      "rating": 67
  },
  {
      "name": "Katie Brown",
      "games": 1,
      "avgGuesses": "3.19",
      "rating": 79
  },
  {
      "name": "Emily Smith",
      "games": 97,
      "avgGuesses": "1.62",
      "rating": 32
  },
  {
      "name": "Emily Jones",
      "games": 11,
      "avgGuesses": "5.07",
      "rating": 61
  },
  {
      "name": "Alex Martinez",
      "games": 50,
      "avgGuesses": "3.89",
      "rating": 57
  },
  {
      "name": "Chris Martinez",
      "games": 26,
      "avgGuesses": "1.41",
      "rating": 69
  },
  {
      "name": "Chris Smith",
      "games": 95,
      "avgGuesses": "1.86",
      "rating": 93
  },
  {
      "name": "Jane Brown",
      "games": 100,
      "avgGuesses": "4.04",
      "rating": 7
  },
  {
      "name": "John Martinez",
      "games": 15,
      "avgGuesses": "5.25",
      "rating": 69
  },
  {
      "name": "Sarah Brown",
      "games": 83,
      "avgGuesses": "1.89",
      "rating": 91
  },
  {
      "name": "Chris Johnson",
      "games": 29,
      "avgGuesses": "5.44",
      "rating": 95
  },
  {
      "name": "John Davis",
      "games": 21,
      "avgGuesses": "5.97",
      "rating": 34
  },
  {
      "name": "Laura Johnson",
      "games": 94,
      "avgGuesses": "1.28",
      "rating": 52
  },
  {
      "name": "Laura Johnson",
      "games": 17,
      "avgGuesses": "3.02",
      "rating": 82
  },
  {
      "name": "Alex Brown",
      "games": 76,
      "avgGuesses": "5.39",
      "rating": 89
  },
  {
      "name": "Jane Davis",
      "games": 72,
      "avgGuesses": "1.39",
      "rating": 56
  },
  {
      "name": "John Davis",
      "games": 37,
      "avgGuesses": "5.22",
      "rating": 33
  },
  {
      "name": "David Garcia",
      "games": 62,
      "avgGuesses": "5.32",
      "rating": 59
  },
  {
      "name": "Laura Williams",
      "games": 72,
      "avgGuesses": "1.15",
      "rating": 97
  },
  {
      "name": "Chris Martinez",
      "games": 31,
      "avgGuesses": "1.46",
      "rating": 23
  },
  {
      "name": "Alex Brown",
      "games": 1,
      "avgGuesses": "2.12",
      "rating": 83
  },
  {
      "name": "Chris Smith",
      "games": 70,
      "avgGuesses": "5.94",
      "rating": 46
  },
  {
      "name": "Sarah Garcia",
      "games": 10,
      "avgGuesses": "3.56",
      "rating": 31
  },
  {
      "name": "David Hernandez",
      "games": 31,
      "avgGuesses": "1.29",
      "rating": 29
  },
  {
      "name": "Katie Davis",
      "games": 74,
      "avgGuesses": "4.08",
      "rating": 79
  },
  {
      "name": "Sarah Smith",
      "games": 46,
      "avgGuesses": "1.76",
      "rating": 2
  },
  {
      "name": "Jane Brown",
      "games": 6,
      "avgGuesses": "5.58",
      "rating": 99
  },
  {
      "name": "Katie Garcia",
      "games": 92,
      "avgGuesses": "1.59",
      "rating": 62
  },
  {
      "name": "Chris Davis",
      "games": 59,
      "avgGuesses": "2.46",
      "rating": 38
  },
  {
      "name": "Laura Williams",
      "games": 35,
      "avgGuesses": "5.00",
      "rating": 87
  },
  {
      "name": "Emily Smith",
      "games": 71,
      "avgGuesses": "3.03",
      "rating": 37
  },
  {
      "name": "Michael Davis",
      "games": 2,
      "avgGuesses": "4.82",
      "rating": 63
  },
  {
      "name": "Sarah Garcia",
      "games": 3,
      "avgGuesses": "4.22",
      "rating": 20
  },
  {
      "name": "Michael Smith",
      "games": 32,
      "avgGuesses": "3.14",
      "rating": 47
  },
  {
      "name": "Laura Williams",
      "games": 9,
      "avgGuesses": "4.53",
      "rating": 57
  },
  {
      "name": "Michael Jones",
      "games": 22,
      "avgGuesses": "4.78",
      "rating": 68
  },
  {
      "name": "Sarah Smith",
      "games": 70,
      "avgGuesses": "1.90",
      "rating": 44
  },
  {
      "name": "Alex Jones",
      "games": 94,
      "avgGuesses": "2.03",
      "rating": 80
  },
  {
      "name": "Michael Johnson",
      "games": 46,
      "avgGuesses": "3.14",
      "rating": 80
  },
  {
      "name": "Jane Smith",
      "games": 91,
      "avgGuesses": "1.64",
      "rating": 72
  },
  {
      "name": "Michael Smith",
      "games": 78,
      "avgGuesses": "5.05",
      "rating": 66
  },
  {
      "name": "Katie Jones",
      "games": 83,
      "avgGuesses": "3.37",
      "rating": 11
  },
  {
      "name": "Sarah Martinez",
      "games": 84,
      "avgGuesses": "3.86",
      "rating": 3
  },
  {
      "name": "Alex Garcia",
      "games": 75,
      "avgGuesses": "2.99",
      "rating": 37
  },
  {
      "name": "Michael Davis",
      "games": 34,
      "avgGuesses": "2.53",
      "rating": 97
  },
  {
      "name": "John Miller",
      "games": 38,
      "avgGuesses": "5.48",
      "rating": 99
  },
  {
      "name": "Sarah Brown",
      "games": 69,
      "avgGuesses": "3.58",
      "rating": 57
  },
  {
      "name": "Sarah Brown",
      "games": 11,
      "avgGuesses": "3.40",
      "rating": 59
  },
  {
      "name": "Katie Smith",
      "games": 80,
      "avgGuesses": "4.21",
      "rating": 56
  },
  {
      "name": "Alex Martinez",
      "games": 76,
      "avgGuesses": "5.08",
      "rating": 86
  },
  {
      "name": "Emily Johnson",
      "games": 80,
      "avgGuesses": "2.03",
      "rating": 47
  },
  {
      "name": "Michael Hernandez",
      "games": 54,
      "avgGuesses": "1.78",
      "rating": 30
  },
  {
      "name": "John Brown",
      "games": 48,
      "avgGuesses": "4.24",
      "rating": 55
  },
  {
      "name": "Michael Miller",
      "games": 76,
      "avgGuesses": "1.03",
      "rating": 12
  },
  {
      "name": "John Hernandez",
      "games": 5,
      "avgGuesses": "3.98",
      "rating": 67
  },
  {
      "name": "Michael Davis",
      "games": 88,
      "avgGuesses": "2.15",
      "rating": 22
  },
  {
      "name": "Emily Smith",
      "games": 10,
      "avgGuesses": "2.22",
      "rating": 35
  },
  {
      "name": "Chris Brown",
      "games": 17,
      "avgGuesses": "1.55",
      "rating": 5
  },
  {
      "name": "John Smith",
      "games": 19,
      "avgGuesses": "4.57",
      "rating": 64
  },
  {
      "name": "Emily Davis",
      "games": 89,
      "avgGuesses": "2.36",
      "rating": 79
  },
  {
      "name": "Katie Smith",
      "games": 84,
      "avgGuesses": "2.67",
      "rating": 62
  },
  {
      "name": "David Martinez",
      "games": 8,
      "avgGuesses": "4.53",
      "rating": 54
  },
  {
      "name": "Jane Miller",
      "games": 65,
      "avgGuesses": "3.08",
      "rating": 12
  },
  {
      "name": "Katie Jones",
      "games": 9,
      "avgGuesses": "2.70",
      "rating": 76
  },
  {
      "name": "David Martinez",
      "games": 82,
      "avgGuesses": "4.47",
      "rating": 98
  },
  {
      "name": "Emily Brown",
      "games": 79,
      "avgGuesses": "5.25",
      "rating": 53
  },
  {
      "name": "Sarah Jones",
      "games": 21,
      "avgGuesses": "5.46",
      "rating": 51
  },
  {
      "name": "Michael Williams",
      "games": 87,
      "avgGuesses": "2.35",
      "rating": 56
  },
  {
      "name": "John Martinez",
      "games": 12,
      "avgGuesses": "3.48",
      "rating": 44
  },
  {
      "name": "Chris Jones",
      "games": 9,
      "avgGuesses": "3.25",
      "rating": 43
  },
  {
      "name": "John Davis",
      "games": 86,
      "avgGuesses": "4.44",
      "rating": 70
  },
  {
      "name": "Laura Martinez",
      "games": 83,
      "avgGuesses": "3.33",
      "rating": 98
  },
  {
      "name": "Jane Brown",
      "games": 76,
      "avgGuesses": "1.66",
      "rating": 26
  },
  {
      "name": "Jane Garcia",
      "games": 65,
      "avgGuesses": "1.31",
      "rating": 74
  },
  {
      "name": "Chris Martinez",
      "games": 32,
      "avgGuesses": "2.62",
      "rating": 34
  },
  {
      "name": "Katie Johnson",
      "games": 7,
      "avgGuesses": "1.00",
      "rating": 47
  },
  {
      "name": "Michael Miller",
      "games": 47,
      "avgGuesses": "3.91",
      "rating": 19
  },
  {
      "name": "Katie Smith",
      "games": 67,
      "avgGuesses": "4.56",
      "rating": 81
  },
  {
      "name": "David Williams",
      "games": 51,
      "avgGuesses": "3.37",
      "rating": 1
  },
  {
      "name": "Michael Smith",
      "games": 18,
      "avgGuesses": "3.07",
      "rating": 82
  },
  {
      "name": "Michael Garcia",
      "games": 19,
      "avgGuesses": "1.23",
      "rating": 91
  },
  {
      "name": "Jane Williams",
      "games": 47,
      "avgGuesses": "2.64",
      "rating": 22
  },
  {
      "name": "Alex Smith",
      "games": 78,
      "avgGuesses": "5.38",
      "rating": 35
  },
  {
      "name": "John Williams",
      "games": 45,
      "avgGuesses": "3.12",
      "rating": 14
  },
  {
      "name": "Sarah Miller",
      "games": 88,
      "avgGuesses": "3.12",
      "rating": 41
  },
  {
      "name": "Emily Johnson",
      "games": 16,
      "avgGuesses": "4.31",
      "rating": 49
  },
  {
      "name": "Katie Brown",
      "games": 65,
      "avgGuesses": "5.16",
      "rating": 99
  },
  {
      "name": "Chris Johnson",
      "games": 51,
      "avgGuesses": "5.75",
      "rating": 80
  },
  {
      "name": "David Hernandez",
      "games": 79,
      "avgGuesses": "2.59",
      "rating": 49
  },
  {
      "name": "Alex Garcia",
      "games": 39,
      "avgGuesses": "4.48",
      "rating": 90
  },
  {
      "name": "John Davis",
      "games": 27,
      "avgGuesses": "2.07",
      "rating": 70
  },
  {
      "name": "Michael Williams",
      "games": 43,
      "avgGuesses": "2.23",
      "rating": 51
  },
  {
      "name": "Sarah Jones",
      "games": 30,
      "avgGuesses": "4.06",
      "rating": 87
  },
  {
      "name": "Jane Williams",
      "games": 94,
      "avgGuesses": "2.45",
      "rating": 30
  },
  {
      "name": "David Miller",
      "games": 12,
      "avgGuesses": "5.67",
      "rating": 68
  },
  {
      "name": "Alex Brown",
      "games": 85,
      "avgGuesses": "1.04",
      "rating": 24
  },
  {
      "name": "Chris Hernandez",
      "games": 19,
      "avgGuesses": "3.03",
      "rating": 71
  },
  {
      "name": "Jane Hernandez",
      "games": 36,
      "avgGuesses": "5.29",
      "rating": 11
  },
  {
      "name": "Chris Johnson",
      "games": 94,
      "avgGuesses": "2.62",
      "rating": 96
  }
]

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

// Endpoint to fetch player data
app.get('/api/players', (req, res) => {
  const { page = 1, sort = 'rating', order = 'desc' } = req.query; // Default: sort by rating, descending
  const limit = 20; // Limit to 20 players per page

  const players = PLAYER_DATA;

    // Sort players based on the query parameters
    players.sort((a, b) => {
      if (sort === 'avgGuesses') {
        return order === 'desc' ? b.avgGuesses - a.avgGuesses : a.avgGuesses - b.avgGuesses;
      } else {
        return order === 'desc' ? b[sort] - a[sort] : a[sort] - b[sort];
      }
    });

    // Paginate the results
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const paginatedPlayers = players.slice(startIndex, endIndex);

    // Return the paginated and sorted data
    res.json({
      players: paginatedPlayers,
      currentPage: parseInt(page),
      totalPages: Math.ceil(players.length / limit),
    });
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