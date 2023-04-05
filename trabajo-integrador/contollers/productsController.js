const zapatos = require('../data/index')



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
    
module.exports = {controladorProducts}


  