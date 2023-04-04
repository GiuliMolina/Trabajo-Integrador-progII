const express = require('express');
const router = express.Router();
const zapatosController = require ('../contollers/zapatosController')

router.get('/users/profile',zapatosController.controladorUsers.profile)

module.exports = router;
