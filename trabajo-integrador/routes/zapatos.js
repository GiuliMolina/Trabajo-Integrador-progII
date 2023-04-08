const express = require('express')
const router = express.Router()
const productsController = require ('../contollers/productsController')


router.get('/:id', productsController.controladorProducts.products)
router.get('/productAdd/:producto',productsController.controladorProducts.productAdd)
router.get('/searchResults/Zapatillasceleste',productsController.controladorProducts.searchResults)


module.exports = router
