const indexControllers={
    index:(req,res)=>{
       if(req.session.loggedin){
           res.render('index',{
               login:true,
               name:req.session.name
           })
       }else{
           res.render('index',{
               login:false,
               name:'debe iniciar sesion '
           })
       }
    },
    sessionDestroy:(req,res)=>{
        req.session.destroy(()=>{
            res.redirect('/')
        })
    }
}

module.exports=indexControllers