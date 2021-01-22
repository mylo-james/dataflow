const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { User } = require('../../db/models');

/* Write an  get route to '/' that...
    1. Uses the asyncHandler middleware from 'express-async-handler'
    2. Finds all the users 
    3. Send a json response of all the users you found                 TODO 6 */
router.get(
    '/',
    asyncHandler(async (_req, res) => {
        const users = await User.findAll();
        res.json(users);
    })
);

module.exports = router;
