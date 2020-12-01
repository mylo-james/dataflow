const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const { environment } = require('./config');
const routes = require('./routes');
const isProduction = environment === 'production';

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

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
        stack: isProduction ? null : err.stack,
    });
});

module.exports = app;
