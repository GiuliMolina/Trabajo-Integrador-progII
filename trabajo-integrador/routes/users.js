const express = require('express');
const router = express.Router();
const usersController = require ('../contollers/usersController')

router.get('/profile',usersController.controladorUsers.profile)
router.get('/profileEdit',usersController.controladorUsers.profileEdit)
router.get('/login',usersController.controladorUsers.login)
router.get('/register',usersController.controladorUsers.register)

module.exports = router;
