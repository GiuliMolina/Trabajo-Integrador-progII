const db = require('../database/models');
const bcrypt = require('bcryptjs')


const controladorIndex = {
    index : function(req, res){
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
            res.render('index',{
                catalogoZapatos: data,
            })
        })
        .catch(function(error){
            console.log(error)
        })
    },
    logout: function(req, res){
        req.session.user = undefined
        res.redirect('/')
    },
   
}
    
module.exports = controladorIndex;


  