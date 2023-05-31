module.exports = function(sequelize, dataTypes){
    let alias = "User"
    let cols = {
        id: {
            primaryKey : true,
            autoincrement: true,
            type:  dataTypes.INTEGER,
            unsigned: true,
            allowNull: false,
        },
        email: {
            type: dataTypes.STRING,
            unique: true,
            allowNull: false,
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
            unique: true,
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
        underscored: true
    }

    const Usuarios = sequelize.define(alias, cols, config);

    Usuarios.associate = function(models){
        Usuarios.hasMany(models.Producto, {
            as: 'producto',
            foreignKey: 'fk_productos_usuarios'
        })
        Usuarios.hasMany(models.Comentario, {
            as: 'comentario',
            foreignKey: 'fk_comentarios_usuarios'
        })
    }
    return Usuarios
}