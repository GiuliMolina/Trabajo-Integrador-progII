const zapatos = require('../data/index')

const controlador = {
    index : function(req, res){
        res.render('index.ejs',{catalogoZapatos:zapatos})
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
            res.send(zapatos[id-1])
        }else{
            res.send('No tenemos el zapato que buscas')
        }
    },
    porMarca: function(req,res){
        let marca = req.params.marca;
        let marcaBuscada = [];
        for (let i=0; i<zapatos.length;i++){
            if(zapatos[i].marca === marca){
                marcaBuscada.push(zapatos[i].modelo)
            }
        }
        if(marcaBuscada.length>0){
            res.send(marcaBuscada)
        }else{
            res.send('No tenemos la marca que buscas')
        }
    },
    porColor: function(req,res){
        let color = req.params.color;
        let colorBuscado = [];
        for(let i = 0; i<zapatos.length; i++){
            if(zapatos[i].color.toString() === color){
                colorBuscado.push(zapatos[i].modelo)
            }
        }
        if(colorBuscado.length>0){
            res.send(colorBuscado)
        }else{
            res.send('No tenemos el zapato del color que buscas')
        }
    },
    porTalle: function(req,res){
        let talle =  req.params.talle;
        let talleBuscado = [];
        for(let i = 0; i<zapatos.length; i++){
            if(zapatos[i].talle.toString() === talle){
                talleBuscado.push(zapatos[i].modelo)
            }
        }
        if(talleBuscado.length>0){
            res.send(talleBuscado)
        }else{
            res.send('No tenemos el talle del zapato que buscas')
        }
     },
    porSexo: function(req,res){
        let sexo =  req.params.sexo;
        let sexoBuscado = [];
        for(let i = 0; i<zapatos.length; i++){
            if(zapatos[i].sexo === sexo){
                sexoBuscado.push(zapatos[i].modelo)
            }
        }
        if(sexoBuscado.length>0){
           res.send(sexoBuscado)
        }       
}
}

module.exports = controlador


