const { success, getUniqueId } = require('./helper.js')
let items = require('./mock-list')
const ItemModel = require('./src/models/item')

const sequelize = new Sequelize('collection', 'root', 'password', {
        host: 'localhost',
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

const Item = ItemModel(sequelize, Datatypes)

const initDb = () => {
    sequelize.sync({force: true })
    .then(_ => {
        
        items.map(item => {
            Item.create({
               name:item.name,
                types:["Plante, Poison"].join()
              }).then(john =>  console.log(john.toJSON()))
         })
         console.log('La base de données "Item" a bien été synchronisée.')
    })
}

module.exports = {
    initDb, Item
}