const express = require('express')
const router = express.Router()
const productsController = require ('../contollers/productsController')


router.get('/:id', productsController.products)
router.get('/productAdd/:producto',productsController.productAdd)
router.get('/searchResults/:producto',productsController.searchResults)


module.exports = router
