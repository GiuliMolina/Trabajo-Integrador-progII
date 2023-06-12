const zapatos = require('../data/data')
const db = require('../database/models');
const bcrypt = require('bcryptjs');
const op = db.Sequelize.Op;

const controladorProducts = {
    products: function(req, res){
        let idProducto = req.params.id;
        let userLogueado
        // if(usuarioLogueado === true){
        //     userLogueado = true
        // }else{
        //     userLogueado = false
        // }
        db.Producto.findByPk(idProducto,{
            raw: true,
            nest:true,
            include:[
            {association: "user"},
            {association: "comentario"}
        ]
        })
            .then(function(data){
                // res.send(data)
                res.render('products.ejs',{
                    id: idProducto,
                    catalogoZapatos:data,
                    // userLogueado : userLogueado
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
                nombre_producto: nombre,
                descripcion: text,
                // created_at: date,
                // usuario_id:10
            })
            .then(function(data){
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
            nest:true,
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
    update: function(req,res){
        let id = req.params.id
        let {imagen,nombre,descripcion} = req.body

        db.Producto.update({
            imagen:imagen,
            nombre:nombre,
            descripcion:descripcion,
        },{
            where:{id:id}
        })
        .then(function(data){
            res.redirect('zapatos/product/' + id)
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
    },
    searchResults:function(req,res){
        let productoBuscado = req.query.search 
        db.Producto.findAll({
            where:{
                [op.or]: [{nombre_producto:{[op.like]: `%${productoBuscado}%`}},{descripcion:{[op.like]: `%${productoBuscado}%`}}]
            },
            order: [
                ['nombre_producto','DESC']
            ],
            raw:true
        })
        .then(function(data){
            // if (req.query.search === 0 || req.query.search === undefined ){
            //     alert("Tu campo de busqueda no puede estar vacio")
            // }else{
                let resultadosBusquedaEncontrados

                if(data.length>0){
                    resultadosBusquedaEncontrados = true
                }else{
                    resultadosBusquedaEncontrados = false
                }
                
                res.render('search-results',{
                    resultados:data,
                    busquedaDelUsuario:productoBuscado,
                    userLogueado: false,
                    resultadosDeBusqueda: resultadosBusquedaEncontrados,
                    // nombre: req.params.nombre, //name o nombre?
                    // nombreUsuario: req.body.user // no estoy segura
                })
            // }
        })
        .catch(function(error){
            console.log(error)
        })
    }
}    

module.exports = controladorProducts