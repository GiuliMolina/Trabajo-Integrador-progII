module.exports = function (sequelize, dataTypes) {
    let alias = 'Comentario';
    let cols = {
        id:{
            primaryKey: true,
            autoIncrement:true,
            allowNull:false,
            unsigned: true,
            type: dataTypes.INTEGER
        },
        idPost:{
           unsigned: true,
           type: dataTypes.INTEGER,
           allowNull:false

        },
        usuarioId:{
            unsigned: true,
            type: dataTypes.INTEGER,
            allowNull:false
        },
        comentario:{
            type:dataTypes.STRING,
            allowNull: false
        },
        createdAt:{
            type: dataTypes.DATE
        },
        updatedAt:{
            type: dataTypes.DATE
        },
        deletedAt:{
            type: dataTypes.DATE
        }

    };

    let config= {
        tableName: 'comentarios',
        timestamps: true,
        underscored: false
    };

    const Comentarios = sequelize.define(alias,cols,config);
        
    Comentarios.associate = function(models){
        Comentarios.belongsTo(models.User,{
            as:'user',
            foreignKey: 'fk_comentarios_usuarios'
            })
        // Comentarios.belongsTo(models.Producto,{
        //     as:'producto',
        //     foreignKey: 'fk_comentarios_productos'
        //     })
    };
    return Comentarios
}