const zapatos = require('../data/data')

const controladorIndex = {
    index : function(req, res){
        res.render('index.ejs',{
            catalogoZapatos:zapatos,
            userLogueado: false
        })
    },
}

    
module.exports = {controladorIndex}


  