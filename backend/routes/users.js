var express = require('express');
var router = express.Router();
const auth = require('../middleware/authentification')

const userUseCase = require('../useCase/users');

router.post('/signup', userUseCase.signup);
router.post('/login', userUseCase.login);
router.put('/prefs/:id',auth, userUseCase.updatePrefs)
router.get('/prefs/:id',auth, userUseCase.prefs)


module.exports = router;