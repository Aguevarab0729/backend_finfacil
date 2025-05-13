//LOCAL
const router = require('express').Router();
const verifyToken = require('../../middlewares/authMiddleware');

router.use('/user',require('./user'))

module.exports = router;
