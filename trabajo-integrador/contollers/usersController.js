const zapatos = require('../data/data')
const db = require('../database/models');
const op = db.Sequelize.Op;

const controladorUsers = {
    users: function(req, res){
        db.User.findAll({
            include:[
                {association: 'producto'},
                {association: 'comentario'}
            ]
            .then(function(data){
                res.render('profile',{
                    catalogoZapatos:zapatos,
                    userLogueado: false
                })
            })
            .catch(function(error){
                console.log(error)
            })
        })
    }, 

    profileEdit: function(req, res){
        let id = req.params.id

        db.User.findByPk(id)
        .then(function(user){
            res.render('profile-edit', {
                user: user
            })
        })
        .catch(function(error){
            console.log(error)
        })
    },

    login: function(req,res){
        res.render('login.ejs',{
            catalogoZapatos:zapatos,
            userLogueado: false
        })
    },

    register:function(req,res){
        let name = req.body.name
        let email = req.body.email
        let password = req.body.password
        let errors = {}

        let passEncriptada = bcrypt.hashSync(password, 10)
        if(passEncriptada.length > 3 && passEncriptada != null){
            db.User.create({
                name: name,
                email: email,
                password: passEncriptada
            })
            .then(function(resp){
                console.log(resp.id)
                res.redirect('/users/profile')
               
            
            })
            .catch(function(error){
                console.log(error)
            })
        }else{
            errors.message = 'La contraseña debe tener al menos tres caracteres';
            res.locals.errors = errors;
            return res.render('register')
        }
       

       
    },

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


  