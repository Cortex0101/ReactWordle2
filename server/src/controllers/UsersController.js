const pool = require('../database/db');

exports.getUserStats = async (req, res, next) => {
  const userId = parseInt(req.params.UserID, 10);

  // Validate UserID
  if (isNaN(userId)) {
    return res.status(400).json({ error: 'Invalid UserID parameter.' });
  }

  try {
    // Check if the user exists
    const [users] = await pool.query('SELECT * FROM Users WHERE UserID = ?', [userId]);
    if (users.length === 0) {
      return res.status(404).json({ error: 'User not found.' });
    }

    // Fetch all games played by the user
    const [games] = await pool.query('SELECT * FROM Games WHERE UserID = ?', [userId]);

    if (games.length === 0) {
      // User has no games; return default stats
      return res.json({
        gamesPlayed: 0,
        gamesWon: 0,
        winPercentage: 0,
        currentStreak: 0,
        longestStreak: 0,
        averageGuesses: 0,
        guessDistribution: {}
      });
    }

    // Compute statistics (same as previous implementation)
    // ... (Include the computation code here)

    // Return the computed statistics
    return res.json({
      gamesPlayed,
      gamesWon,
      winPercentage: parseFloat(winPercentage.toFixed(2)),
      currentStreak,
      longestStreak,
      averageGuesses: parseFloat(averageGuesses.toFixed(2)),
      guessDistribution
    });
  } catch (error) {
    next(error); // Pass error to error handling middleware
  }
};