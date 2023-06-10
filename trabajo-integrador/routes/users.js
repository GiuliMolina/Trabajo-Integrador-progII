const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController')

router.get('/login',usersController.login)
//router.post('/login',usersController.checkUser)

router.get('/register',usersController.register)
router.post('/register',usersController.create)

router.get('/profile', usersController.profile)
// router.get('/profileEdit', usersController.profileEdit)
//no se si hay que agregar una ruta para cuando tocas el boton de cerrar sesion

module.exports = router;
   