const express = require('express');
const router = express.Router();

const indexControllers = require('../controllers/indexControllers')
const adminDashboard =require('../middlewares/adminDashboard')

router.get('/',indexControllers.index)
router.get('/logout',indexControllers.sessionDestroy)
router.get('/dashboard',adminDashboard,indexControllers.dashboard)

module.exports=router
