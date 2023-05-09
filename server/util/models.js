const db = require('./database')
const {DataTypes} = require('sequelize')

module.exports = {
    User: db.define('user', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        Username: DataTypes.STRING({length:20}),
        password: DataTypes.STRING
    }),
    Hobby: db.define( 'hobby', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: DataTypes.STRING
    })
}