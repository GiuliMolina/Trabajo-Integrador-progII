const zapatos = require('../db/index')

const contolador = {
    index : function(req, res){
        res.send(zapatos)
    },
    details: function(req,res){
        res.send()
    },
    porMarca: function(req,res){
        res.send()
    },
    porColor: function(req,res){
        res.send()
    },
    porTalle: function(req,res){
        res.send()
    },
    porSexo: function(req,res){
        res.send()
    }
}

module.exports = controlador


