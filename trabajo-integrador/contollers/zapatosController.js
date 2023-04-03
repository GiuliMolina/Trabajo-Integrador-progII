const zapatos = require('../data/index')

const controladorIndex = {
    index : function(req, res){
        res.render('index.ejs',{catalogoZapatos:zapatos})
    },
}

//const controladorUsers = {
// login y registrer y profile
// }

const controladorProducts ={
    product : function(req, res){
        res.render('product.ejs',{catalogoZapatos:zapatos})
    },
    //Details y product add
}
// details: function(req,res){
//         let id = req.params.id;
//         let idBuscado = [];
//         for (let i=0; i<zapatos.productos.length;i++){
//             if(zapatos.productos[i].id.toString() === id){
//                 idBuscado.push(id)
//             }
//         }
//         if(idBuscado.length>0){
//             // res.send(zapatos[id-1])
//             res.render('product.ejs',{catalogoZapatos:zapatos})
//         // }else{
//         //     res.send('No tenemos el zapato que buscas')
//         // }
//     }},
    
   
    
    
    
module.exports = controladorIndex


