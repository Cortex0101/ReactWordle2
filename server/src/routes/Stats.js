const express = require('express');

const router = express.Router();

const db = require('../database/db');

const { GetPlayerStats } = require('../database/PlayerStats');

router.get('/users/:UserID/stats', async (req, res) => {
    const userId = parseInt(req.params.UserID, 10);

    // Validate UserID
    if (isNaN(userId)) {
        return res.status(400).json({ error: 'Invalid UserID parameter.' });
    }

    try {
        // Check if the user exists
        const [users] = await db.query('SELECT * FROM Users WHERE UserID = ?', [userId]);
        if (users.length === 0) {
            return res.status(404).json({ error: 'User not found.' });
        }

        // Fetch all games played by the user
        const [games] = await db.query('SELECT * FROM Games WHERE UserID = ?', [userId]);

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

        let gamesWon = 0;
        let totalGuessesForWins = 0;
        const guessDistribution = {};
        const gameResults = [];

        function isWinningFeedback(feedback, wordLength) {
            return feedback === 'y'.repeat(wordLength);
        }

        for (const game of games) {
            const wordLength = game.WordLength;

            // Fetch all guesses for the game
            const [guesses] = await db.query(
                'SELECT * FROM Guesses WHERE GameID = ? ORDER BY GuessNumber ASC',
                [game.GameID]
            );

            let gameWon = false;
            for (const guess of guesses) {
                if (isWinningFeedback(guess.Feedback, wordLength)) {
                    gameWon = true;
                    gamesWon += 1;

                    // Update total guesses for average calculation
                    totalGuessesForWins += guess.GuessNumber;

                    // Update guess distribution
                    const guessNumStr = guess.GuessNumber.toString();
                    if (guessDistribution[guessNumStr]) {
                        guessDistribution[guessNumStr] += 1;
                    } else {
                        guessDistribution[guessNumStr] = 1;
                    }
                    break; // No need to check further guesses in this game
                }
            }

            // Record the result for streak calculations
            gameResults.push({
                date: new Date(game.CreatedAt),
                won: gameWon
            });
        }

        // Compute win percentage and average guesses
        const gamesPlayed = games.length;
        const winPercentage = (gamesWon / gamesPlayed) * 100;
        const averageGuesses = gamesWon > 0 ? totalGuessesForWins / gamesWon : 0;

        // Compute streaks
        gameResults.sort((a, b) => a.date - b.date);

        let longestStreak = 0;
        let currentStreak = 0;
        let tempStreak = 0;
        let previousDate = null;

        for (const result of gameResults) {
            if (result.won) {
                if (previousDate) {
                    const diffInDays = Math.floor((result.date - previousDate) / (1000 * 60 * 60 * 24));
                    if (diffInDays === 1) {
                        tempStreak += 1;
                    } else {
                        tempStreak = 1;
                    }
                } else {
                    tempStreak = 1;
                }
                if (tempStreak > longestStreak) {
                    longestStreak = tempStreak;
                }
                previousDate = result.date;
            } else {
                tempStreak = 0;
                previousDate = null;
            }
        }

        // Determine current streak
        const lastGame = gameResults[gameResults.length - 1];
        if (lastGame.won) {
            currentStreak = tempStreak;
        } else {
            currentStreak = 0;
        }

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
        console.error('Database error:', error);
        return res.status(500).json({ error: 'Internal server error.' });
    }
});

router.get('/test', async (req, res) => {
    res.status(200).json({ message: 'Test route' });
});

module.exports = router;