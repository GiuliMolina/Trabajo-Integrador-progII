const zapatos = require('../data/data')
const db = require('../database/models');
const op = db.Sequelize.Op;
let bcrypt = require('bcryptjs');

const controladorUsers = {
    profile: function(req, res){
        let id = req.session.user.id
        db.User.findAll({
            include:[
                {association: 'producto'},
                {association: 'comentario'}
            ]
        })
        .then(function(data){
            res.send(data)
            res.render('profile',{
                catalogoZapatos: data,
                id: id,
                userLogueado: true
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
               
                catalogoZapatos: data, 
                userLogueado: true,
                user: user
            })
        })
        .catch(function(error){
            console.log(error)
        })
    },

    register:function(req,res){
        res.render('register')
    },

    create: function(req, res){
        let name = req.body.user
        let email = req.body.email
        let fecha = req.body.fecha_de_nacimiento
        let dni = req.body.dni
        //let foto = req.body.foto_de_perfil
        let password = req.body.password
        

        db.User.findOne({
            where:{
                email: email
            }
        })

        if(email === ''){
            let errors = {}
            errors.message = 'El campo email es obligatorio'
            res.locals.error = errors
            res.render('register')
        }else if(password === '' || password.length < 3){
            let errors = {}
            errors.message = 'La contraseña debe tener al menos 3 caracteres'
            res.locals.error = errors
            res.render('register')
        }else {
            let passEncriptada = bcrypt.hashSync(password, 10)
            db.User.create({
                name: name,
                email: email,
                pass: passEncriptada,
                fecha: fecha,
                dni: dni,
                //foto: foto
            })
        
        .then(function(data){
            res.redirect('/users/login')
        })
        .catch(function(error){
            console.log(error)
            let errors = {}
            errors.message = 'Ya existe un usuario con este email'
            res.locals.error = errors
            res.render('register')
        })
    }},

    login: function(req,res){
        if (req.session.usuario == undefined){
            res.render('login')
        }else{
            res.redirect('/')
        }
        

    },
    
    checkUser: function(req,res){
        let {email, password, recordarme} = req.body
        db.User.findOne({
            where:{
                email: email
            },
            raw: true
        })
        if (email == ''){ //|| (email == undefined)// 
            let errors = {}
            errors.message = 'el email no es valido'
        }
        }

        .then(function(user){
            let compararPass = bcrypt.compareSync(password, user.password)
            if(compararPass){
                req.session.prueba= 'Lo asigno en login'
                req.session.usuarioLogueado = {
                    id : user.id,
                    name: user.name,
                    email: user.email,
                }

                res.redirect('/users/profile/' + user.id)
            
            } else {
                let errors = {}
                errors.message = 'La contraseña no es valida';
                res.locals.error = errors;
                return res.render('login')
            }
        
            // if(recordarme === 'on'){
            //     res.cookie(
            //         'recordarme', 
            //         {
            //             id: user.id,
            //             name: user.name,
            //             email:user.email
            //         },
            //         {
            //             maxAge: 1000 * 60 * 15
            //         }
            //     )
            //}

            // res.redirect('/users/profile/'+ user.id,{
            //     catalogoZapatos:user,
            //     userLogueado: true
            // })

    })        
        .catch(function(error){
            console.log(error)
        })
    }
    //,
    

    // update: function(req, res){
    //     let id = req.params.id
    //     let {name, emai} = req.body
    //     db.User.update({
    //         name: name,
    //         email: email,
    //     }, {
    //         where: {
    //             id: id
    //         }
    //     })

    //     .then(function(resp){
    //         res.redirect('/users/profile/')
    //     })

    //     .catch(function(error){
    //         console.log(error)
    //     })
    // },

    // delete: function(req, res){
    //     let id = req.params.id
    //     db.User.destroy({
    //         where: {
    //             id: id
    //         }
    //     })
    //     .then(function(resp){
    //         res.redirect('/')
    //     })
    //     .catch(function(error){
    //         console.log(error)
    //     })
    // }

//}


    
module.exports = controladorUsers

  