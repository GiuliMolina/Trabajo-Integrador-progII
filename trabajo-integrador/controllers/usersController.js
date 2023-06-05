const zapatos = require('../data/data')
const db = require('../database/models');
const op = db.Sequelize.Op;
let bcrypt = require('bcryptjs');

const controladorUsers = {
    profile: function(req, res){
        db.User.findAll({
            include:[
                {association: 'producto'},
                {association: 'comentario'}
            ]
        })
        .then(function(data){
            console.log(data)
            res.render('profile',{
                catalogoZapatos: db ,
                userLogueado: true
            }) 
        })
        .catch(function(error){
            console.log(error)
        })
    }, 

    profileEdit: function(req, res){
        let id = req.params.id

        db.User.findByPk(id)
        .then(function(user){
            res.render('profile-edit.ejs', {
                catalogoZapatos: db, 
                userLogueado: true,
                user: user
            })
        })
        .catch(function(error){
            console.log(error)
        })
    },

    // register:function(req,res){
        
    //     let name = req.body.name
    //     let email = req.body.email
    //     let password = req.body.password
    //     let errors = {}
    //     let passEncriptada = bcrypt.hashSync(password, 10)

    //     if( user === false){
    //         if(passEncriptada.length > 3 && passEncriptada != null){
    //             db.User.create({
    //                 name: name,
    //                 email: email,
    //                 password: passEncriptada
    //             })
    //             .then(function(resp){
    //                 console.log(resp.id)
    //                 res.redirect('/users/profile')
                   
                
    //             })
    //             .catch(function(error){
    //                 console.log(error)
    //             })
    //         }else{
    //             errors.message = 'La contraseña debe tener al menos tres caracteres';
    //             res.locals.errors = errors;
    //             return res.render('register')
    //         }
    
    //         if(email = undefined){//falta la condición de que no se repita
    //            errors.message = 'Su mail es inválido'
    //         } 
    //     }
        
    // },

    // login: function(req,res){
    //     let {email, password, recordarme} = req.body
    //     db.User.findOne({
    //         where:{
    //             email: email
    //         },
    //         raw: true
    //     })
    //     .then(function(user){
    //         let compararPass = bcrypt.compareSync(password, user.password)
    //         if(compararPass){
    //             req.session.user = {
    //                 id : user.id,
    //                 name: user.name,
    //                 email: user.email,
    //             }
    //         }
    //         res.redirect('/profile/'+ user.id,{
    //             catalogoZapatos:zapatos,
    //             userLogueado: true)
    //         })
    //     })
    
    // },

    update: function(req, res){
        let id = req.params.id
        let {name, emai} = req.body
        db.User.update({
            name: name,
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

  