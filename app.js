//Library Imports
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

//Relative Imports
const { environment } = require('./config');
const routes = require('./routes');

//Definitions
const inProduction = environment === 'production';

// App Definition
const app = express();

//Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());

// Routes
app.use('/api', routes);

// Catch unhandled requests and forward to error handler.
app.use((req, res, next) => {
    const err = new Error("The requested resource couldn't be found.");
    err.status = 404;
    err.errors = ['Could not find string of resource'];
    next(err);
});

// Generic error handler.
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        title: err.title || 'Server Error',
        message: err.message,
        errors: err.errors,
        stack: inProduction ? null : err.stack,
    });
});

module.exports = app;
