const express = require('express')
const router = express.Router()
const zapatosController = require ('../contollers/zapatosController')

router.get('/', zapatosController.index)

router.get('/:id', zapatosController.details)



module.exports = router
