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
        usuario_id: {
            unsigned: true,
            type: dataTypes.INTEGER,
            allowNull: false
        },
        nombre_producto:{
            type: dataTypes.STRING,
            allowNull: false
        },
        descripcion: {
            type: dataTypes.STRING,
            null: false
        },
        created_at: {
            type: dataTypes.DATE
        },
        updated_at:{
            type: dataTypes.DATE
        },
        deleted_at: {
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