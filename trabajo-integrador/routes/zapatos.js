const express = require('express')
const router = express.Router()
const zapatosController = require ('../contollers/zapatosController')


router.get('/', zapatosController.controladorIndex.index)

router.get('/:id', zapatosController.controladorProducts.products)


module.exports = router
