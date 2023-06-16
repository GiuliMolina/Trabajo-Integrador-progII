const zapatos = require('../data/data')
const db = require('../database/models');
const bcrypt = require('bcryptjs');
const op = db.Sequelize.Op;

const controladorProducts = {
    products: function(req, res){
 
        let idProducto = req.params.id;
        db.Producto.findByPk(idProducto,{
            include:[
                {association:'comentario', 
                    include:{association:'user'}
                },{association:'user'}
            ],
            order:[
                        ['comentario','created_at','DESC']
                    ]
            })
            .then(function(data){
                res.render('products',{
                    producto:data,
                })
            })
            .catch(function(error){
                console.log(error)
            })
    },
    productAdd: function(req,res){
        res.render('product-add.ejs',{
            catalogoZapatos:zapatos,
        })
    },
    create: function(req,res){
        let idUsuario = req.session.user.id
        let {imagen,nombre,text} = req.body

        db.Producto.create({
            imagen: `./images/${imagen}`,
            nombre_producto: nombre,
            descripcion: text,
            // created_at: date,
            usuario_id: idUsuario
        })
        .then(function(data){
            res.redirect('/')
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
                producto: data,
            })
        })
        .catch(function(error){
            console.log(error)
        })
    },
    createComment: function (req,res){
        let comentario = req.body.comentario
        let idUsuario = req.session.user.id

        db.Comentario.create({
            comentario: comentario,
            usuario_id: idUsuario,
            id_post: req.body.id_post
        })
        .then(function(data){
            res.redirect('/')
        })
        .catch(function(error){
            console.log(error)
        })
    },
    update: function(req,res){
        let id = req.params.id
        let {imagen,nombre,descripcion} = req.body

        db.Producto.update({
            imagen: `./images/${imagen}`,
            nombre:nombre,
            descripcion:descripcion,
        },{
            where:{id:id}
        })
        .then(function(data){
            console.log('llego')
            res.redirect('/')
        })
        .catch(function(error){
            console.log(error)
        })
    },
    delete: function(req,res){
        let id = req.params.id
        db.Producto.findByPk(id,{
            include:[
                {association:'comentario', 
                    include:{association:'user'}
                },{association:'user'}
            ]
        })
        .then(function(data){
            db.Producto.destroy({
                where: [{id:id}]
            })
            .then(function(data){
                res.redirect('/')
            })
            .catch(function(error){
                console.log(error)
            })
        })
        .catch(function(error){
            console.log(error)
        })   
    },
    searchResults:function(req,res){
        let productoBuscado = req.query.search
        let errors = {}
        if(productoBuscado !== ''){
            db.Producto.findAll({
                include:[
                    {association:'comentario', 
                        include:{association:'user'}
                    },{association:'user'}
                ],
                where:{
                    [op.or]: [{nombre_producto:{[op.like]: `%${productoBuscado}%`}},{descripcion:{[op.like]: `%${productoBuscado}%`}}]
                },
                order: [
                    ['nombre_producto','DESC']
                ]
            })
            .then(function(data){
                //res.send(data)
                let resultadosBusquedaEncontrados
    
                    if(data.length>0){
                        resultadosBusquedaEncontrados = true
                    }else{
                        resultadosBusquedaEncontrados = false
                    }
                    
                    res.render('search-results',{
                        
                        resultados:data,
                        busquedaDelUsuario:productoBuscado,
                        resultadosDeBusqueda: resultadosBusquedaEncontrados,
                    })
            })
            .catch(function(error){
                console.log(error)
            })
        }else{

                db.Producto.findAll({
                    order:[
                        ['created_at','DESC']
                    ],
                    include:[
                        {association: "user"},
                        {association: "comentario"}
                    ],
                })
                .then(function(data){
                    errors.message = 'Su busqueda no puede ser vacia',
                    res.locals.errors = errors
                    res.render('index',{
                        catalogoZapatos: data,
                    })
                })
                .catch(function(error){
                    console.log(error)
                })
           }
       }
    }

module.exports = controladorProducts