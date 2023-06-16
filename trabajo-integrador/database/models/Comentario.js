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
        id_post:{
           unsigned: true,
           type: dataTypes.INTEGER,
        //    allowNull:false

        },
        usuario_id:{
            unsigned: true,
            type: dataTypes.INTEGER,
            allowNull:false
        },
        comentario:{
            type:dataTypes.STRING,
            allowNull: false
        },
        created_at:{
            type: dataTypes.DATE
        },
        updated_at:{
            type: dataTypes.DATE
        },
        deleted_at:{
            type: dataTypes.DATE
        }

    };
    let config= {
        tableName: 'comentarios',
        timestamps: true,
        underscored: true
    };

    const Comentarios = sequelize.define(alias,cols,config);
        
    Comentarios.associate = function(models){
        Comentarios.belongsTo(models.User,{
            as:'user',
            foreignKey: 'usuario_id'
            })
        Comentarios.belongsTo(models.Producto,{
            as:'producto',
            foreignKey: 'id_post'
            })
    };
    return Comentarios
}