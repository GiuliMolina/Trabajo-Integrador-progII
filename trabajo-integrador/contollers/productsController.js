const zapatos = require('../data/data')
const db = require('../database/models/Producto');
const bcrypt = require('bcryptjs')

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
        let id = req.params.id;
        db.Producto.findByPk(id,{
            raw: true,
            nested:true,include:[
            {association: "user"},
            {association: "comentario"}
        ]
        })
            .then(function(data){
                res.render('products.ejs',{
                    idProducto:req.params.id,
                    catalogoZapatos:zapatos,
                    // userLogueado: [false,true]
                })
            })
            .catch(function(error){
                console.log(error)
            })
    },
    productAdd: function(req,res){
        if(req.session.user != undefined){
            res.render('product-add.ejs',{
                catalogoZapatos:zapatos,
                userLogueado: true
            })
        }else{
            res.redirect('/')
        }
    },
    create: function(req,res){
        let {imagen,nombre,text,date} = req.body

        db.Producto.create({
            imagen: imagen,
            nombre:nombre,
            descripcion:text,
            fechaDeCarga: date,
        })
        .then(function(data){
            console.log(data.id)
            res.redirect('/zapatos/productAdd')
        })
    },
    edit: function(req,res){
        let id = req.params.id
        let errors = {}

        if(userLogueado == user){
            db.Producto.findByPk(id)
                .then(function(data){
                    res.redirect('product-edit.ejs',{
                        userLogueado:true,
                        user:user,
                    })
                })
                .catch(function(error){
                    console.log(error)
                })
        }else{
            errors.message = "No puedes editar este producto";
            res.locals.errors = errors;
            return res.render('products')
        }
        
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