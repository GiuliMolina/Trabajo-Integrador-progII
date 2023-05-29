const zapatos = require('../data/data')


const controladorUsers = {
    profile: function(req,res){
        res.render('profile.ejs',{
            catalogoZapatos:zapatos,
            userLogueado: true
        })
    },
    profileEdit:function(req,res){
        res.render('profile-edit.ejs',{
            catalogoZapatos:zapatos,
            userLogueado: true
        })
    },
    login: function(req,res){
        res.render('login.ejs',{
            catalogoZapatos:zapatos,
            userLogueado: false
        })
    },
    register:function(req,res){
        res.render('register.ejs',{
            catalogoZapatos:zapatos,
            userLogueado: false
        })
    }
}


    
module.exports = controladorUsers


  