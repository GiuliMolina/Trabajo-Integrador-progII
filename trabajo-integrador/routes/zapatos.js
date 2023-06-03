const express = require('express')
const router = express.Router()
const productsController = require ('../controllers/productsController')


router.get('/products/:id', productsController.products)

router.get('/productAdd',productsController.productAdd)
//router.post('/productAdd',productsController.create)

router.get('/searchResults',productsController.searchResults)


module.exports = router
