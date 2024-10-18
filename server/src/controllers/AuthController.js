const pool = require('../database/db');
const jwt = require('jsonwebtoken');

const { v4: uuidv4 } = require('uuid');
/*
async function getUserByIP(ipAddress) {
    try {
        const [rows, fields] = await pool.promise().execute('SELECT UserID, IPAddress FROM Users WHERE IPAddress = ?', [ipAddress]);

        if (rows.length > 0) {
            // User exists, return user ID and IP address
            return { userID: rows[0].UserID, ipAddress: rows[0].IPAddress };
        } else {
            // Insert a new user with a placeholder display name
            const [insertResult] = await pool.promise().execute(
                'INSERT INTO Users (IPAddress, DisplayName) VALUES (?, ?)',
                [ipAddress, 'Placeholder']
            );

            // Update the user's display name based on their UserID
            await pool.promise().execute(
                'UPDATE Users SET DisplayName = ? WHERE UserID = ?',
                ['Bruger' + insertResult.insertId, insertResult.insertId]
            );

            // Retrieve the newly created user
            const [newUserResult] = await pool.promise().execute(
                'SELECT UserID, IPAddress FROM Users WHERE UserID = ?',
                [insertResult.insertId]
            );

            return { userID: newUserResult[0].UserID, ipAddress: newUserResult[0].IPAddress };
        }
    } catch (error) {
        logger.debug('Error:', { message: error.message, stack: error.stack });
        return null;
    }
}
    */

/*
Endpoint: POST /api/auth/guest
Description: Generates a UUID for a new guest user.
Response:
{
  "token": "jwt_token",
  "user": {
    "UserID": 123,
    "DisplayName": "Guest123",
    "IsGuest": true
  }
}
*/
exports.generateGuestUser = async (req, res, next) => {
    try {
        // Create a new guest user in the database
        const uuid = uuidv4();

        /*
        const [result] = await pool.execute(
            'INSERT INTO Users (IPAddress, DisplayName) VALUES (?, ?)',
            [uuid, 'Placeholder']
        ); 
        */
        const [result] = await pool.query(
            'INSERT INTO Users (IPAddress, DisplayName) VALUES (?, ?)',
            [uuid, 'Placeholder']
        );

        const userId = result.insertId;

        // Generate JWT token
        const token = jwt.sign({ userId, isGuest: true }, process.env.JWT_SECRET_KEY);

        res.json({
            token,
            user: {
                UserID: userId,
                DisplayName: `Guest${userId}`,
                IsGuest: true
            }
        });
    } catch (error) {
        next(error);
    }
};