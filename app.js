//Library Imports
const express = require('express');
const cors = require('cors');
const asyncHandler = require('express-async-handler');
const morgan = require('morgan');
const createError = require('http-errors');

//Relative Imports
const { User } = require('./db/models');

// App Definition
const app = express();

//Middleware
app.use(cors({ origin: true }));

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// Define Routes   
/*   TO DO     */

// catch 404 and forward to error handler
app.use(function (_req, _res, next) {
    next(createError(404));
});

app.use(function (err, _req, res, _next) {
    res.status(err.status || 500);
    if (err.status === 401) {
        res.set('WWW-Authenticate', 'Bearer');
    }
    res.json({
        message: err.message,
        error: JSON.parse(JSON.stringify(err)),
    });
});

module.exports = app;
