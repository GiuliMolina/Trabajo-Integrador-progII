const express = require('express')
const router = express.Router()
const zapatosController = require ('../contollers/zapatosController')


router.get('/', zapatosController.controladorIndex.index)

module.exports = router;
