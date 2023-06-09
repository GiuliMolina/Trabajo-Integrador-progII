const zapatos = require('../data/data')
const db = require('../database/models');
const op = db.Sequelize.Op;
let bcrypt = require('bcryptjs');

const controladorUsers = {
    profile: function(req, res){
        let id = req.params.id
        console.log(id)

        db.User.findByPk(id, {
            include:[
                {association:'comentario', 
                    include:{association:'user'}
                },{association:'producto'}
            ]
        })
        .then(function(data){
            // res.send(data)
            res.render('profile',{
                usuario: data,
                producto: data.producto,
                comentario: data.comentario,
                usuarioId: id,
            }) 
        })
        .catch(function(error){
            console.log(error)
        })
    }, 

    profileEdit: function(req, res){
        let id = req.params.id

        db.User.findByPk(id, {
            include:[
                {association: 'producto'},
                {association: 'comentario'}
            ]
        })
        .then(function(data){
            console.log(data),
            res.render('profile-edit', {
                usuario: data, 
                usuarioId: id,

            })
        })
        .catch(function(error){
            console.log(error)
        })
    },

    update: function(req, res){
        let id = req.params.id
        db.User.findByPk(id, {
            include:[
                {association:'comentario', 
                    include:{association:'user'}
                },{association:'producto'}
            ]
        })
        .then(function(data){
            // res.send(data)
            let contraseña = data.password
            let name = data.nombre
            let DNI = data.dni
            let mail = data.email
            let cumpleaños = data.fecha
            let foto = data.foto_de_perfil

            let {user, email,dateOfBirth,password,dni,foto_de_perfil} = req.body
            console.log('Aca estan las contraseñas')
            console.log(contraseña)
            console.log(password)
            let passEncriptada 
            if(password !== ""){
                passEncriptada = bcrypt.hashSync(password, 10)
            }else{
                passEncriptada = contraseña
            }

            if (user !== ""){
                nombre = user
            }else{
                nombre = name
            }

            if(dni!== ""){
                dni = dni
            }else{
                dni = DNI 
            }

            if (email !== ""){
                email = email
            }else{
                email = mail
            }

            if(dateOfBirth !== ""){
                fecha = dateOfBirth
            }else{
                fecha = cumpleaños
            }

            if(foto_de_perfil !==""){
                foto_de_perfil = foto_de_perfil
            }else{
                foto_de_perfil = foto
            }
            db.User.update({
                nombre: nombre,
                email: email,
                fecha: dateOfBirth,
                password: passEncriptada,
                dni: dni,
                foto_de_perfil: foto_de_perfil,
            }, {
                where: {
                    id: id
                }
            })

            .then(function(resp){
                res.redirect(`/users/profile/${id}`)
            })

            .catch(function(error){
                console.log(error)
            })
                
            })
        .catch(function(error){
            console.log(error)
        })
    },

    register:function(req,res){
        res.render('register')
        usuarioLogueado = false

    },

    create: function(req, res){
        let user = req.body.user
        let email = req.body.email
        let fecha = req.body.fecha_de_nacimiento
        let dni = req.body.dni
        let foto_de_perfil = req.body.foto_de_perfil
        let password = req.body.password
        let repetido = { where:[{email: email}]}
        let errors = {}
        
        if(email == ''){
            errors.message = 'El campo email es obligatorio'
            res.locals.errors = errors
            res.render('register')
        }else if(password === '' || password.length < 3){
            errors.message = 'La contraseña debe tener al menos 3 caracteres'
            res.locals.errors = errors
            res.render('register')
        }else {
            db.User.findOne(repetido)
            .then(function(rep){
                if(rep != null){
                    errors.message = 'Ya existe un usuario con este email, por favor intente de nuevo'
                    res.locals.errors = errors
                    res.render('register') 
                }else{
                    let passEncriptada = bcrypt.hashSync(password, 10)
                    db.User.create({
                       nombre: user,
                       email: email,
                       password: passEncriptada,
                       fecha: fecha,
                       dni: dni,
                       foto_de_perfil: foto_de_perfil
                    })
                }
                res.redirect('/users/login')
            })
            
            .catch(function(error){
                console.log(error)
            })
        }
        
    },

    login: function(req,res){
       res.render('login')
    },

    checkUser: function(req,res){
        let {email, password, recordarme} = req.body
        db.User.findOne({
            where:{
                email: email
            },
        })
        .then(function(user){
            console.log(user)
            let compararPass = bcrypt.compareSync(password, user.password)
            let falso = false
            let errors = {}
    
            if(compararPass === falso){
                errors.message = 'La contraseña no es válida';
                res.locals.errors = errors;
                return res.render('login')
            }else {
                req.session.user = {
                    id: user.id,
                    nombre: user.nombre,
                    email: user.email,
                }
                if(recordarme === 'on'){
                    console.log('llega a la cookie')
                        res.cookie(
                            'recordarme', 
                            {
                                id: user.id,
                                nombre: user.nombre,
                                email:user.email
                            },
                            {
                                maxAge: 1000 * 60 * 15
                            }
                        
                        )
                    }
            
                    res.redirect('/')
                
            } 
            
        
        })  
       
        .catch(function(error){
            console.log(error)
            let errors = {}
            errors.message = 'El email ingresado no es válido'
            res.locals.errors = errors
            res.render('login')
        })
    
    
    },
    delete: function(req, res){
        let id = req.params.id
        db.User.destroy({
            where: {
                id: id
            }
        })
        .then(function(resp){
            res.redirect('/')
        })
        .catch(function(error){
            console.log(error)
        })
    },
    searchUsuarios:function(req,res){
        let usuarioBuscado = req.query.searchUsuario
        db.User.findAll({
                where:{
                    [op.or]: [{nombre:{[op.like]: `%${usuarioBuscado}%`}},{email:{[op.like]: `%${usuarioBuscado}%`}}]
                },
                order: [
                    ['nombre','DESC']
                ]
            })
            .then(function(data){
                    let resultadosBusquedaEncontrados
    
                    if(data.length>0){
                        resultadosBusquedaEncontrados = true
                    }else{
                        resultadosBusquedaEncontrados = false
                    }
                    
                    res.render('search-usuarios',{
                        resultados:data,
                        busquedaDelUsuario:usuarioBuscado,
                        resultadosDeBusqueda: resultadosBusquedaEncontrados,
                    })
            })
            .catch(function(error){
                console.log(error)
            })
        }
}

module.exports = controladorUsers

  