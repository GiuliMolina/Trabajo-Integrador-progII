const express = require('express')
const router = express.Router()
const productsController = require ('../controllers/productsController')


router.get('/:id', productsController.products)

router.get('/productAdd',productsController.productAdd)
router.post('/productAdd',productsController.productAdd)

router.get('/searchResults',productsController.searchResults)
// router.post('/delete/:id',productsController.delete)
// router.get('/editProduct/:id',productsController.edit)

module.exports = router
