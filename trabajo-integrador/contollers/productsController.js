// const zapatos = require('../data/data')

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
//     searchResults:function(req,res){
//         res.render('search-results.ejs',{
//             catalogoZapatos:zapatos,
//             userLogueado: false,
//             nombre: req.params.nombre,
//         })
//     }

// }    
    
// module.exports = controladorProducts

const db = require('../database/models');

db.Producto.findAll({
    include:[
        {association: 'user'},
        {association: 'comentario'}
    ]
    .then(function(data){

    })
    .catch(function(error){
        console.log(error)
    })
})

const controladorProducts = {
    products: function(req, res){
        db.Producto.findAll({
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
}
