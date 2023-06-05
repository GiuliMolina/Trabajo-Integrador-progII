const express = require('express')
const router = express.Router()
const productsController = require ('../controllers/productsController')


router.get('/product/:id', productsController.products)

router.get('/product-add',productsController.productAdd)
router.post('/product-add/create',productsController.create)

router.get('/search-results',productsController.searchResults)
// router.post('/delete/:id',productsController.delete)

router.get('/product-edit',productsController.edit)

module.exports = router
