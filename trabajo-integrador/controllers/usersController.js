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
                usuarioLogueado: true
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
        usuarioLogueado = false

    },

    create: function(req, res){
        let user = req.body.user
        let email = req.body.email
        let fecha = req.body.fecha_de_nacimiento
        let dni = req.body.dni
        //let foto = req.body.foto_de_perfil
        let password = req.body.password
        let emailRepetido = req.body.email
        let repetido = { where:[{email: emailRepetido}]}
        let errors = {}
        
        if(email === ''){
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
                       // foto: foto
                    })
                }
            })
            
            .then(function(data){
                res.redirect('/users/login')
            })
            .catch(function(error){
                console.log(error)
            })
        }
        
    },

    login: function(req,res){
       res.render('login')
       //usuarioLogueado = false
    },
    checkUser: function(req,res){
        let {email, password, recordarme} = req.body
        db.User.findOne({
            where:{
                email: email
            },
            raw: true
        })
        // if (email == ''){ //|| (email == undefined)// 
        //     let errors = {}
        //     errors.message = 'el email no es valido'
        // }
        .then(function(user){
            let compararPass = bcrypt.compareSync(password, user.password)
            console.log(compararPass)
            if(compararPass){
                console.log('Entra en la comparacion del pass')
                req.session.user = {
                    id : user.id,
                    nombre: user.nombre,
                    email: user.email,
                }
                console.log('Pasamos por la comparacion')
                console.log(req.body)
                // res.redirect('/users/profile')
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
               
            } else {
                let errors = {}
                errors.message = 'La contraseña no es valida';
                res.locals.error = errors;
                return res.render('login')
            }
        
           
        })        
        .catch(function(error){
            console.log(error)
        })
    },
    
    update: function(req, res){
        let id = req.params.id
        let {user, emai} = req.body
        db.User.update({
            nombre: user,
            email: email,
        }, {
            where: {
                id: id
            }
        })

        .then(function(resp){
            res.redirect('/users/profile/')
        })

        .catch(function(error){
            console.log(error)
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
    }

}


    
module.exports = controladorUsers

  