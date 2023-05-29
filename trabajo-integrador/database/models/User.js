module.exports = function(sequelize, dataTypes){
    let alias = "User"
    let cols = {
        id: {
            primaryKey : true,
            autoincrement: true,
            type:  dataTypes.INTEGER
        },
        email: {
            type: dataTypes.STRING,
            unique: true,
        },
        password: {
            type: dataTypes.STRING,
            allownull: false,
        },
        fotoDePerfil: {
            type: dataTypes.STRING,
        },
        fecha: {
            type: dataTypes.DATE,
            allownull: false,
        },
        dni: {
            type: dataTypes.INTEGER,
            allownull: false,
        },
        createdAd:{
            type: dataTypes.DATE,
        },
        updatedAd: {
            type: dataTypes.DATE,
        },
        deletedAd: {
            type: dataTypes.DATE,
        }
    }

    let config = {
        tableName: 'usuarios',
        timestamps: false,
        underscore: true
    }
}