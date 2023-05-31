const zapatos = require('../data/data')
const db = require('../database/models/Producto');

// const controladorProducts = {
//     products: function(req, res){
//         res.render('products.ejs',{
//             idProducto:req.params.id,
//             catalogoZapatos:zapatos,
//             userLogueado: false
//         })
//     },
//     productAdd: function(req,res){
//         res.render('product-add.ejs',{
//             catalogoZapatos:zapatos,
//             userLogueado: true
//         })
//     },
    // searchResults:function(req,res){
    //     res.render('search-results.ejs',{
    //         catalogoZapatos:zapatos,
    //         userLogueado: false,
    //         nombre: req.params.nombre,
    //     })
    // }
// }    
    
const controladorProducts = {
    products: function(req, res){
        db.Producto.findAll({
            raw: true,
            nested:true,
            include:[
                {association: "user"},
                {association: "comentario"}
            ]
            .then(function(data){
                res.render('products.ejs',{
                    idProducto:req.params.id,
                    catalogoZapatos:zapatos,
                    userLogueado: false
                })
            })
            .catch(function(error){
                console.log(error)
            })
        })
    },   
    productAdd: function(req,res){
        res.render('product-add.ejs',{
            catalogoZapatos:zapatos,
            userLogueado: true
        })
    },
    searchResults:function(req,res){
        res.render('search-results.ejs',{
            catalogoZapatos:zapatos,
            userLogueado: false,
            nombre: req.params.nombre,
        })
    }
}

module.exports = controladorProducts