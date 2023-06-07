module.exports = function(sequelize, dataTypes){
    let alias = 'User';
    let cols = {
        id: {
            primaryKey : true,
            autoincrement: true,
            type:  dataTypes.INTEGER,
            unsigned: true,
            // allowNull: false,
        },
        nombre: {
            type: dataTypes.STRING,
            allowNull: false
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
        foto_de_perfil: {
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
        created_at:{
            type: dataTypes.DATE,
        },
        updated_at: {
            type: dataTypes.DATE,
        },
        deleted_at: {
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
            foreignKey: 'usuario_id'
        })
        Usuarios.hasMany(models.Comentario, {
            as: 'comentario',
            foreignKey: 'usuario_id'
        })
    }
    return Usuarios
}

