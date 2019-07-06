const Sequelize = require('sequelize')

module.exports = (sequelize)=>{
    const users = sequelize.define('usuarios',{
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        titulo:{
            type: Sequelize.STRING,
            allowNull: false
        },
        estilo:{
            type: Sequelize.STRING,
            allowNull: false
        },
        urlVideo:{
            type: Sequelize.STRING,
            allowNull: false
        },
        comentarios:{
            type: Sequelize.text,
            allowNull: true
        }
    },{timestamps: false});
    return users;
}