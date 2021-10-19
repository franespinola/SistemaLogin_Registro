function adminDashboard(req,res,next){
    if(req.session.rol != 'admin'){
        res.redirect('/login')
    }
    
    next()

}

module.exports=adminDashboard