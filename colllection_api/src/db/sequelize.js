const { success, getUniqueId } = require('../helper.js')
//let items = require('./mock-list')


/*
const sequelize = new Sequelize('collection', 'user', 'colector', {
        host: '192.168.1.50.3306',
        dialect: 'mariadb',
        dialectOptions: {
            timezone: 'Etc/GMT-2'
        },
        logging: false
    }
)
*/
const { Sequelize, DataTypes } = require('sequelize');
var ItemModel = require('../models/item')

let items = require('./mock-list')

const sequelize = new Sequelize('collection', 'root', 'root', {
    host: 'localhost',
    port: 3306,
    dialect: 'mariadb',
    dialectOptions: {
        timezone: 'Etc/GMT-2'
    },
    logging: false
}
)

sequelize.authenticate()
    .then(_ => console.log('La connexion à la base de données a bien été établie.'))
    .catch(error => console.log(`Impossible de se connecter à la base de données ${error}`))

const Item = ItemModel(sequelize, DataTypes)
/*
const initDb = () => {
    sequelize.sync({force: true })
    .then(_ => {
        
        Array.from(items).map(item => {
            Item.create({
                id:item.id,
                name:item.name
              }).then(item =>  console.log(item.toJSON()))
         })
         console.log('La base de données "Item" a bien été synchronisée.')
    })
}

module.exports = {
    initDb, Item
}
*/
module.exports = {
    Item
}