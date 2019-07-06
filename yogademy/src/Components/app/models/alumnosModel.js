const Sequelize = require('sequelize')

module.exports = (sequelize)=>{
    const users = sequelize.define('usuarios',{
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        nombre:{
            type: Sequelize.STRING,
            allowNull: false
        },
        correo:{
            type: Sequelize.STRING,
            allowNull: false
        },
        aNacimiento:{
            type: Sequelize.STRING,
            allowNull: false
        },
        lesiones:{
            type: Sequelize.STRING,
            allowNull: false
        },
        estilo:{
            type: Sequelize.STRING,
            allowNull: false
        },
        pago:{
            type: Sequelize.STRING,
            allowNull: false
        },
        leccionesURL:{
            type: Sequelize.STRING,
            allowNull: false
        },
        comentarios:{
            type: Sequelize.TEXT,
            allowNull: TRUE
        },
        nivel:{
            type: Sequelize.STRING,
            allowNull: false
        },
        usuario:{
            type: Sequelize.STRING,
            allowNull: false
        },
        contraseña:{
            type: Sequelize.STRING,
            allowNull: false
        }
    },{timestamps: false});
    return users;
}