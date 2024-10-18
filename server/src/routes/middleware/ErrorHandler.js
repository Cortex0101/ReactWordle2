const { stack } = require("../api/users");

const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.json({ 
        error: err.message,
        stack: err.stack
    });
    //res.status(500).json({ error: 'Internal Server Error' });
};

module.exports = errorHandler;