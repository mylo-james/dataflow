/* No need to open this file for lecture. */
const router = require('express').Router;
const apiRoutes = require('./api');

router.use('./api', apiRoutes);

module.exports = router;
