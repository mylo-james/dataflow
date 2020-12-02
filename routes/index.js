//Define router
const router = require('express').Router();

//Import Routers
const userRoutes = require('./userRoutes');

// Use Routers
router.use('/users', userRoutes);

// Export Router
module.exports = router;
