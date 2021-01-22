const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { Instructor } = require('../../db/models');

/* Write an  get route to '/' that...
    1. Uses the asyncHandler middleware from 'express-async-handler'
    3. Finds all of the instructors
    4. Send a json response of all instructors you found               TODO 6 */

router.get(
    '/',
    asyncHandler(async (_req, res) => {
        const instructors = await Instructor.findAll();
        res.json(instructors);
    })
);

module.exports = router;
