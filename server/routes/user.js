const express = require('express');
const router = express.Router();
const user = require('../controllers/user');

router.post('/register', user.signup);
router.post('/login', user.login);

module.exports = router;
