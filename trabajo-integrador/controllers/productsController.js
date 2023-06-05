const zapatos = require('../data/data')
const db = require('../database/models');
const bcrypt = require('bcryptjs')

const controladorProducts = {
    // products: function(req, res){
    //     res.render('products.ejs',{
    //         idProducto:req.params.id,
    //         catalogoZapatos:zapatos,
    //         userLogueado: false
    //     })
    // },
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
        res.render('product-add.ejs',{
            catalogoZapatos:zapatos,
            userLogueado: true
        })
    },
    // productAdd: function(req,res){
    //     // if(req.session.user.name == undefined){ 
    //     if(userLogueado==false){ 
    //         res.redirect('/')
    //         // res.render('product-add.ejs',{
    //         //     catalogoZapatos:zapatos,
    //         //     userLogueado: true
    //         // })
    //     }else{
    //         let {imagen,nombre,text,date} = req.body

    //         db.Producto.create({
    //             imagen: imagen,
    //             nombre: nombre,
    //             descripcion:text,
    //             fechaDeCarga: date,
    //         })
    //         .then(function(data){
    //             console.log(data.id)
    //             res.redirect('/')
    //         })
    //         .catch(function(error){
    //             console.log(error)
    //         })
    //     }
    // },
    searchResults:function(req,res){
        let productoBuscado = req.query.search //falta hacer validacion de si es algo del nombre o de la descripcion
        db.Producto.findAll({
            where:[
                { name:{[op.like]: `%${productoBuscado}%` }} 
            ],
            order: [
                {'name':'DESC'} //va entre comillas?
            ],
            raw:true
        })
        .then(function(data){
            let resultadosBusquedaEncontrados

            if(data.length>0){
                resultadosBusquedaEncontrados = true
            }else{
                resultadosBusquedaEncontrados = false
            }
            
            res.render('search-results',{
                catalogoZapatos:data,
                busquedaDelUsuario:productoBuscado,
                userLogueado: false,
                resultadosDeBusqueda: resultadosBusquedaEncontrados,
                nombre: req.params.nombre, //name o nombre?
                nombreUsuario: req.body.user // no estoy segura
            })
        })
        .catch(function(error){
            console.log(error)
        })
    },
    // delete: function(req,res){
    //     let id = req.params.id

    //     db.Producto.destroy({
    //         where: {id:id}
    //     })
    //     .then(function(data){
    //         res.redirect('/')
    //     })
    //     .catch(function(error){
    //         console.log(error)
    //     })
    // }
}    
    
// const controladorProducts = {
//     products: function(req, res){
//         let idProducto = req.params.id;
//         // res.render('products',{
//         //     catalogoZapatos:zapatos,
//         //     idProducto,
//         //     userLogueado: true
//         // })
//         db.Producto.findByPk(idProducto,{
//             raw: true,
//             nested:true,
//             include:[
//             {association: "user"},
//             {association: "comentario"}
//         ]
//         })
//             .then(function(data){
//                 res.render('products.ejs',{
//                     idProducto:req.params.id,
//                     catalogoZapatos:zapatos,
//                     // userLogueado: [false,true]
//                 })
//             })
//             .catch(function(error){
//                 console.log(error)
//             })
//     },
    // productAdd: function(req,res){
    //     // if(req.session.user.name == undefined){ 
    //     if(userLogueado==true){ 
    //         res.redirect('/')
    //         // res.render('product-add.ejs',{
    //         //     catalogoZapatos:zapatos,
    //         //     userLogueado: true
    //         // })
    //     }else{
    //         let {imagen,nombre,text,date} = req.body

    //         db.Producto.create({
    //             imagen: imagen,
    //             nombre: nombre,
    //             descripcion:text,
    //             fechaDeCarga: date,
    //         })
    //         .then(function(data){
    //             console.log(data.id)
    //             res.redirect('/zapatos/productAdd')
    //         })
    //         .catch(function(error){
    //             console.log(error)
    //         })
    //     }
    // },
//     // edit: function(req,res){
//     //     let idProducto = req.params.id
//     //     let errors = {}

//     //     if(userLogueado == user){
//     //         db.Producto.findByPk(id)
//     //             .then(function(data){
//     //                 res.redirect('product-add.ejs',{
//     //                     userLogueado:true,
//     //                     user:user,
//     //                 })
//     //             })
//     //             .catch(function(error){
//     //                 console.log(error)
//     //             })
//     //     }else{
//     //         errors.message = "No puedes editar este producto";
//     //         res.locals.errors = errors;
//     //         return res.render('products')
//     //     }
        
//     // },
//     searchResults:function(req,res){
//         let palabraBuscada = req.query.search //falta hacer validacion de si es algo del nombre o de la descripcion
//         // res.render('search-results.ejs',{
//         //     catalogoZapatos:zapatos,
//         //     userLogueado: false,
//         //     nombre: req.params.nombre,
//         // })
//         db.Producto.findAll({
//             where:[
//                 { name:{[op.like]: palabraBuscada }} //faltan los % %, y que sea un string?
//             ],
//             order: [
//                 {name:DESC} //va entre comillas?
//             ]
//         })
//         .then(function(resultado){
//             if(resultado == undefined || resultado == null){
//                 console.log('No hay resultados para su criterio de búsqueda')
//             }else{
//                 res.render('search-results',{
//                     catalogoZapatos:zapatos,
//                     userLogueado: false,
//                     nombre: req.params.nombre,
//                 })
//             }
//         })
//         .catch(function(error){
//             console.log(error)
//         })
//     }
// }
module.exports = controladorProducts