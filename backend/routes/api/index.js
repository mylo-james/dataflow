/* No need to open this file for lecture. */
const router = require('express').Router();
const groupRoutes = require('./groups');
const instructorRoutes = require('./instructors');
const userRoutes = require('./users');

router.use('/groups', groupRoutes);
router.use('/instructors', instructorRoutes);
router.use('/users', userRoutes);

module.exports = router;
