const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { User } = require('../../db/models');

router.get(
    `/:id(\\d+)`,
    asyncHandler(async (req, res) => {
        const id = Number.parseInt(req.params.id);
        // console.log(id);
        const user = await User.findOne({ where: id });
        res.json(user);
    })
);

module.exports = router;
