module.exports = function (sequelize, dataTypes) {
    let alias= "Producto";
    let cols = {
        id: {
            primaryKey: true,
            autoIncrement:true,
            type: dataTypes.INTEGER,
            unsigned: true,
            allowNull: false
        },
        usuarioId: {
            unsigned: true,
            type: dataTypes.INTEGER,
            allowNull: false
        },
        nombreProducto:{
            type: dataTypes.STRING,
            allowNull: false
        },
        descripcion: {
            type: dataTypes.STRING,
            null: false
        },
        createdAt: {
            type: dataTypes.DATE
        },
        updatedAt:{
            type: dataTypes.DATE
        },
        deletedAt: {
            type: dataTypes.DATE
        },
    };
    let config = {
        tableName: "productos",
        timestamps: true,
        underscored: true
    };
    
    const Productos = sequelize.define(alias,cols,config);
    
    Productos.associate = function(models){
        Productos.belongsTo(models.User, {
            as: "user",
            foreignKey: "fk_productos_usuarios"
        }),
        Productos.hasMany(models.Comentario,{
            as: "comentario",
            foreignKey: "fk_comentarios_productos"
        })
    }

    return Productos
}