const express = require('express');
const userRoutes = require('./userRoutes');
const houseRoutes = require('./houseRoutes');
const courseRoutes = require('./courseRoutes');
const enrollmentRoutes = require('./enrollmentRoutes');

const router = express.Router();

router.use('/users', userRoutes);
router.use('/houses', houseRoutes);
router.use('/courses', courseRoutes);
router.use('/enrollments', enrollmentRoutes);

module.exports = router;
