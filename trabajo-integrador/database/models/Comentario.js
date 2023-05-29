module.exports = function(sequelize,DataTypes){
    let alias= Comentario;
    let cols={
        id:{
            primaryKey: true,
            autoIncrement:true,
            allowNull:false,
            unsigned: true,
            type: DataTypes.INTEGER
        },
        id_post:{
           unsigned: true,
           type: DataTypes.INTEGER,
           allowNull:false

        },
        usuario_id:{
            unsigned: true,
            type: DataTypes.INTEGER,
            allowNull:false
        },
        comentario:{
            type:DataTypes.STRING,
            allowNull: False
        },
        created_at:{
            type: DataTypes.DATE
        },
        updated_at:{
            type: DataTypes.DATE
        },
        deleted_at:{
            type: DataTypes.DATE
        }

    };

    let config= {
        tableName: 'Comentario',
        timestamps: true,
        underscored: true
    };

    const Comentario = sequelize.define(alias,cols,config);
        
    Comentario.associate = function(models){
        Comentario.belongsto(models.User,{
            as:'user',
            foreignKey: 'fk_comentarios_usuarios'
            }
            ),
        Comentario.belongsto(models.Producto,{
            as:'producto',
            foreignKey: 'fk_comentarios_productos'

            }
            )
    }

        return Comentarios
}

