const zapatos = require('../db/index')

const controlador = {
    index : function(req, res){
        res.send(zapatos)
    },
    details: function(req,res){
        let id = req.params.id;
        let idBuscado = [];
        for (let i=0; i<zapatos.length;i++){
            if(zapatos[i].id.toString() === id){
                idBuscado.push(id)
            }
        }
        if(idBuscado>0){
            res.send(zapatos[id])
        }else{
            res.send('No tenemos el zapato que buscas')
        }
    },
    porMarca: function(req,res){
        let marca = req.params.marca;
        let marcaBuscada = [];
        for (let i=0; i<zapatos.length;i++){
            if(zapatos[i].marca === marca){
                marcaBuscada.push(zapatos[i].nombre)
            }
        }
        if(marcaBuscada>0){
            res.send(marcaBuscada)
        }else{
            res.send('No tenemos la marca que buscas')
        }
    },
    // porColor: function(req,res){
    //     res.send()
    // },
    // porTalle: function(req,res){
    //     res.send()
    // },
    // porSexo: function(req,res){
    //     res.send()
    // }
}

module.exports = controlador


