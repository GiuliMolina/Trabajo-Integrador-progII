const zapatos = require('../data/data')



const controladorProducts = {
    products: function(req, res){
        res.render('products.ejs',{
            idProducto:req.params.id,
            catalogoZapatos:zapatos,
            userLogueado: false
        })
    },
    productAdd: function(req,res){
        res.render('products-add.ejs',{
            catalogoZapatos:zapatos,
            userLogueado: true
        })
    },
    searchResults:function(req,res){
        res.render('search-results.ejs',{
            catalogoZapatos:zapatos,
            userLogueado: false,
            id: req.params.id
        })
    }

}    
    
module.exports = {controladorProducts}


  