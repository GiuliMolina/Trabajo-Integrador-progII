const zapatos = require('../data/data')


// const controladorUsers = {
//     profile: function(req,res){
//         res.render('profile.ejs',{
//             catalogoZapatos:zapatos,
//             userLogueado: true
//         })
//     },
//     profileEdit:function(req,res){
//         res.render('profile-edit.ejs',{
//             catalogoZapatos:zapatos,
//             userLogueado: true
//         })
//     },
//     login: function(req,res){
//         res.render('login.ejs',{
//             catalogoZapatos:zapatos,
//             userLogueado: false
//         })
//     },
//     register:function(req,res){
//         res.render('register.ejs',{
//             catalogoZapatos:zapatos,
//             userLogueado: false
//         })
//     }
// }

const db = require('../database/models');

db.User.findAll({
    include:[
        {association: 'producto'},
        {association: 'comentario'}
   ]
   .then(function(data){
    console.log(data)

  })
     .catch(function(error){
        console.log(error)
   })
}) 

const controladorUsers = {
    users: function(req, res){
        db.User.findAll({
            include:[
                {association: 'producto'},
                {association: 'comentario'}
            ]
            .then(function(data){
                res.render('profile.ejs',{
                    idProducto:req.params.id,
                    catalogoZapatos:zapatos,
                    userLogueado: false
                })
            })
            .catch(function(error){
                console.log(error)
            })
        })
    },   
}


    
module.exports = controladorUsers


  