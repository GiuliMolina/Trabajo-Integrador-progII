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

        let passEncriptada = bcrypt.hashSync(password, 8)
        db.User.create({
            name,
            email,
            password: passEncriptada
        })

        .then(function(resp){
            console.log(resp.id)
            res.redirect('/users/profile')
        })

        .catch(function(error){
            console.log(error)
        })
    }
}


    
module.exports = controladorUsers


  