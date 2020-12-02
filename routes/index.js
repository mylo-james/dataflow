//Define router
const router = require('express').Router();

//Import Routers
const userRoutes = require('./userRoutes');
const houseRoutes = require('./houseRoutes');

// Use Routers
router.use('/users', userRoutes);
router.use('/houses', houseRoutes);

// Export Router
module.exports = router;
