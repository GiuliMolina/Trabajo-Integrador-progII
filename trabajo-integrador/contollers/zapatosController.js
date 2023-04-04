const zapatos = require('../data/index')

const controladorIndex = {
    index : function(req, res){
        res.render('index.ejs',{catalogoZapatos:zapatos})
    },
}

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

const controladorProducts = {
    products: function(req, res){
        res.render('products.ejs',{idProducto:req.params.id, catalogoZapatos:zapatos})
    },
    productAdd: function(req,res){
        res.render('products-add.ejs',{catalogoZapatos:zapatos})
    },
    searchResults:function(req,res){
        res.render('search-results.ejs',{catalogoZapatos:zapatos})
    }

}    
    
module.exports = {controladorIndex,controladorProducts,controladorUsers}


  