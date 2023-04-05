const express = require('express')
const router = express.Router()
const indexController = require ('../contollers/indexController')


router.get('/', indexController.controladorIndex.index)

module.exports = router;
