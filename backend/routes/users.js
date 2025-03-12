var express = require('express');
var router = express.Router();

const userUseCase = require('../useCase/users');

router.post('/signup', userUseCase.signup);
router.post('/login', userUseCase.login);

module.exports = router;