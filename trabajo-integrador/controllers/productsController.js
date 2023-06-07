const zapatos = require('../data/data')
const db = require('../database/models');
const bcrypt = require('bcryptjs')

const controladorProducts = {
    products: function(req, res){
        let idProducto = req.params.id;
        db.Producto.findByPk(idProducto,{
            raw: true,
            nest:true,
            include:[
            {association: "user"},
            {association: "comentario"}
        ]
        })
            .then(function(data){
                res.send(data)
                // res.render('products.ejs',{
                //     idProducto:req.params.id,
                //     catalogoZapatos:data,
                //     userLogueado: true
                // })
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
   create: function(req,res){
        // if(req.session.user.name == undefined){ 
        // if(userLogueado==false){ 
        //     res.redirect('/')
        //     // res.render('product-add.ejs',{
        //     //     catalogoZapatos:zapatos,
        //     //     userLogueado: true
        //     // })
        // }else{
            let {imagen,nombre,text,date} = req.body

            db.Producto.create({
                imagen: imagen,
                nombre: nombre,
                descripcion:text,
                fechaDeCarga: date,
            })
            .then(function(data){
                console.log(data.id)
                res.redirect('/')
            //     let puedeAgregarProducto 
            //     if (req.session.user === user){
            //         puedeAgregarProducto = true
            //     } else{
            //         puedeAgregarProducto = false
            //     } //validar si el usuario que quiere agregar producto s el mismo que esta logueado
            })
            .catch(function(error){
                console.log(error)
            })
    },
    edit: function(req,res){
        let id = req.params.id

        db.Producto.findByPk(id,{
            raw: true,
            nested:true,
            include:[
            {association: "user"},
            {association: "comentario"}
        ]
        })
        .then(function(data){
            res.render('product-edit.ejs',{
                catalogoZapatos: data,
                userLogueado: true
            })
        })
        .catch(function(error){
            console.log(error)
        })
        // let idProducto = req.params.id
        // let errors = {}

        // if(userLogueado == user){
        // }else{
        //     errors.message = "No puedes editar este producto";
        //     res.locals.errors = errors;
        //     return res.render('products')
        // }
        
    },
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
    delete: function(req,res){
        let id = req.params.id

        db.Producto.destroy({
            where: {id:id}
        })
        .then(function(data){
            res.redirect('/')
        })
        .catch(function(error){
            console.log(error)
        })
    }
}    

module.exports = controladorProducts