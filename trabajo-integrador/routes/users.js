const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController')

router.get('/login',usersController.login)
router.post('/login',usersController.checkUser)

router.get('/register',usersController.register)
router.post('/register',usersController.create)

router.get('/profile/:id', usersController.profile)
router.get('/profile-edit/:id', usersController.profileEdit)
router.post('/profile-edit/:id',usersController.update)

router.get('/search-usuarios',usersController.searchUsuarios)

module.exports = router;
   