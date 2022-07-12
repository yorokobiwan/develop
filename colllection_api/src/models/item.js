const { DataTypes } = require('sequelize')
module.exports =(sequelize, DataTypes) => {
    return sequelize.define('Item', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }},
        {
            timestamps: true,
            createdAt: 'created',
            updatedAt: false    
        })
}