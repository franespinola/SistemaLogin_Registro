const express = require('express');
const router = express.Router();

const apiControllers=require('../controllers/apiControllers')
const adminDashboard =require('../middlewares/adminDashboard')

router.get('/users',adminDashboard,apiControllers.totalUsers)
router.post('/editar',apiControllers.edit)
router.get('/borrar/:id',apiControllers.delete)

module.exports=router