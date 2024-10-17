const mysql = require('mysql2');

// Create a connection pool to the remote database
const pool = mysql.createPool({
    host: '154.62.108.112',  // Remote server IP
    user: 'admin',           // MySQL user
    password: 'Agerdebedste24!', // MySQL password
    database: 'woordle_db',  // Your database
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool.promise();