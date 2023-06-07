const zapatos = require('../data/data')
const db = require('../database/models');
const bcrypt = require('bcryptjs')


const controladorIndex = {
    index : function(req, res){
        db.Producto.findAll({
            raw: true,
            nested:true,
            include:[
                {association: "user"},
                {association: "comentario"}
            ]
        })
        .then(function(data){
            res.render('index.ejs',{
                catalogoZapatos:data,
                userLogueado: false
            })
        })
        .catch(function(error){
            console.log(error)
        })
    }
}
    
module.exports = controladorIndex


  