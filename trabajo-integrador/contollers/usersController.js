const zapatos = require('../data/data')


const controladorUsers = {
    profile: function(req,res){
        res.render('profile.ejs',{catalogoZapatos:zapatos})
    },
    profileEdit:function(req,res){
        res.render('profile-edit.ejs',{catalogoZapatos:zapatos})
    },
    login: function(req,res){
        res.render('login.ejs',{catalogoZapatos:zapatos})
    },
    register:function(req,res){
        res.render('register.ejs',{catalogoZapatos:zapatos})
    }
}


    
module.exports = {controladorUsers}


  