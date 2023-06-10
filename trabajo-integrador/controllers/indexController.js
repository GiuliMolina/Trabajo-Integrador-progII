const db = require('../database/models');
const bcrypt = require('bcryptjs')


const controladorIndex = {
    index : function(req, res){
        db.Producto.findAll({
            raw: true,
            nest:true,
            order:[
                ['created_at','DESC']
            ],
            include:[
                {association: "user"},
                {association: "comentario"}
            ],
        })
        .then(function(data){
            //res.send(data)
            res.render('index.ejs',{
                catalogoZapatos: data,
                userLogueado: false
            })
        })
        .catch(function(error){
            console.log(error)
        })
    }
}
    
module.exports = controladorIndex


  