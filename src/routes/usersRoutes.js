const express = require('express');
const router = express.Router();

const usersControllers = require('../controllers/usersControllers')
//login routes
router.get('/login',usersControllers.login)
router.post('/auth',usersControllers.loginPost)

//register routes
router.get('/register',usersControllers.register)
router.post('/register',usersControllers.registerPost)

module.exports=router
