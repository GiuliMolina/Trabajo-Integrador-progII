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
        let idProducto = req.params.id;
        // res.render('products',{
        //     catalogoZapatos:zapatos,
        //     idProducto,
        //     userLogueado: true
        // })
        db.Producto.findByPk(idProducto,{
            raw: true,
            nested:true,
            include:[
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
        // if(req.session.user.name == undefined){ 
        if(userLogueado==true){ 
            res.redirect('/')
            // res.render('product-add.ejs',{
            //     catalogoZapatos:zapatos,
            //     userLogueado: true
            // })
        }else{
            let {imagen,nombre,text,date} = req.body

            db.Producto.create({
                imagen: imagen,
                nombre: nombre,
                descripcion:text,
                fechaDeCarga: date,
            })
            .then(function(data){
                console.log(data.id)
                res.redirect('/zapatos/productAdd')
            })
            .catch(function(error){
                console.log(error)
            })
        }
    },
    // edit: function(req,res){
    //     let idProducto = req.params.id
    //     let errors = {}

    //     if(userLogueado == user){
    //         db.Producto.findByPk(id)
    //             .then(function(data){
    //                 res.redirect('product-edit.ejs',{
    //                     userLogueado:true,
    //                     user:user,
    //                 })
    //             })
    //             .catch(function(error){
    //                 console.log(error)
    //             })
    //     }else{
    //         errors.message = "No puedes editar este producto";
    //         res.locals.errors = errors;
    //         return res.render('products')
    //     }
        
    // },
    searchResults:function(req,res){
        let productoBuscado = req.query.search //falta hacer validacion de si es algo del nombre o de la descripcion
        // res.render('search-results.ejs',{
        //     catalogoZapatos:zapatos,
        //     userLogueado: false,
        //     nombre: req.params.nombre,
        // })
        db.Producto.findAll({
            where:[
                { name:{[op.like]: `%${productoBuscado}%` }} 
            ],
            order: [
                {name:DESC} //va entre comillas?
            ],
            raw:true
        })
        .then(function(resultadoBusqueda){
            let resultadosBusquedaEncontrados

            if(resultadoBusqueda.length>0){
                resultadosBusquedaEncontrados = true
            }else{
                resultadosBusquedaEncontrados = false
                console.log('No hay resultados para su criterio de búsqueda')
            }
            res.render('search-results',{
                catalogoZapatos:zapatos,
                busquedaDelUsuario:productoBuscado,
                userLogueado: false,
                resultadosDeBusqueda: resultadosBusquedaEncontrados,
                nombre: req.params.name, //name o nombre?
            })
        })
        .catch(function(error){
            console.log(error)
        })
    }
}
module.exports = controladorProducts