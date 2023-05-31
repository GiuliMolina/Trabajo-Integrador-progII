const zapatos = require('../data/data')
const db = require('../database/models/Producto');

// const controladorIndex = {
//     index : function(req, res){
//         res.render('index.ejs',{
//             catalogoZapatos:zapatos,
//             userLogueado: false
//         })
//     },
// }

const controladorIndex = {
    index : function(req, res){
        db.Producto.findAll({
            raw: true,
            nested:true,
            include:[
                {association: "user"},
                {association: "comentario"}
            ]
            .then(function(data){
                res.render('index.ejs',{
                    catalogoZapatos:zapatos,
                    userLogueado: false
                })
            })
            .catch(function(error){
                console.log(error)
            })
        })
    }
}
    
module.exports = controladorIndex


  