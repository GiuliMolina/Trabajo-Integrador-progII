const express = require('express')
const router = express.Router()
const indexController = require ('../contollers/indexController')
const usersController = require ('../contollers/usersController')
const productsController = require ('../contollers/productsController')


router.get('/:id', productsController.controladorProducts.products)
router.get('/productAdd',productsController.controladorProducts.productAdd)
router.get('/searchResults',productsController.controladorProducts.searchResults)


module.exports = router
