const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController')

router.get('/login',usersController.login)
router.post('/login',usersController.checkUser)

router.get('/register',usersController.register)
router.post('/register',usersController.create)

// router.get('/profile', usersController.profile)
// router.get('/profile-edit', usersController.profileEdit)


module.exports = router;
   