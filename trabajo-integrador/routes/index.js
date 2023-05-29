const express = require('express')
const router = express.Router()
const indexController = require ('../contollers/indexController')


router.get('/', indexController.index)

module.exports = router;
 