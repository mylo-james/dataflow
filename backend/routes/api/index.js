/* No need to open this file for lecture. */
const router = require('express').Router();
const groupRoutes = require('./groups');
const instructorRoutes = require('./instructors');

router.use('./groups', groupRoutes);
router.use('./instructors', instructorRoutes);

module.exports = router;
