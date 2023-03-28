const zapatos = require('../db/index')
const express = require('express')
const router = express.Router()

router.get('/', zapatosController.index)

router.get('/:id', zapatosController.details)

router.get('/marca/:marca', zapatosController.porMarca)

router.get('/color/:color', zapatosController.porColor)

router.get('/talle/:talle', zapatosController.porTalle)

router.get('/sexo/:sexo', zapatosController.porSexo)


module.exports = router