const express = require('express');
const router = express.Router();
const zapatosController = require ('../contollers/zapatosController')

router.get('/profile',zapatosController.controladorUsers.profile)
router.get('/profileEdit',zapatosController.controladorUsers.profileEdit)
router.get('/login',zapatosController.controladorUsers.login)
router.get('/register',zapatosController.controladorUsers.register)

module.exports = router;
