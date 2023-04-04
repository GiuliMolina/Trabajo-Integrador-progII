const express = require('express')
const router = express.Router()
const zapatosController = require ('../contollers/zapatosController')


router.get('/:id', zapatosController.controladorProducts.products)
router.get('/productAdd',zapatosController.controladorProducts.productAdd)
router.get('/searchResults',zapatosController.controladorProducts.searchResults)


module.exports = router
