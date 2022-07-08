const express = require('express')

/*
#middleware log
npm install morgan --save-dev
npm install serve-favicon --save.
#parser json
npm install body-parser --save

#orm
npm install sequelize --save
#driver mariadb
npm install maria-db --save


const morgan = require('morgan')
const favicon = require('serve-favicon')
const bodyParser = require('body-parser')
const { Sequelize, DataTypes } = require('sequelize')


*/

//let items = require('./mock-list')
const ItemModel = require('./src/models/item')


const items=[
    {
        id: 1,
        name : "bob" 
    },
    {
        id: 2,
        name : "ethan" 
    }
]

const app = express()
const port = 3000

/*
const sequelize = new Sequelize(
    'collection',
    'root',
    '',
    {
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
*/

const Item = ItemModel(sequelize, Datatypes)

sequelize.sync({force: true })
    .then(_ => {
        console.log('La base de données "Item" a bien été synchronisée.')
        items.map(item => {
            Item.create({
               name:item.name,
                types:["Plante, Poison"].join()
              }).then(john =>  console.log(john.toJSON()))
         })
    })

//middleware diy
app.use((req, res, next) => {
    console.log(`URL : ${req.url}`)
    next()
})

/* middleware
app
    .use(favicon(__dirname + '/favicon.ico'))
    .use(morgan('dev'))
    .use(bodyParser.json())
*/

app.get('/',(req,res) => res.send('Hello, Express 2!'))

app.get('/api/items/:id',(req,res) => {
    const id = parseInt(req.params.id)
    const item = items.find(i => i.id === id)
    const message = 'Un item a bien été trouvé'
    res.json(success(message, item))
})

app.get('/api/items/', (req,res) => {
    const message = 'La Liste a bien été récupérée'
    res.json(success(message, items))
})

app.post('/api/items/', (req,res) => {
    const id = getUniqueId(items)
    const itemCreated ={ ...req.body, ...{id: id, created: new Date()}}
    items.push(itemCreated)
    const message = 'L\'item a bien été créé'
    res.json(success(message, itemCreated))
})

app.put('/api/items/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const itemUpdated ={ ...req.body, id: id}
    items = items.map(item => {
        return item.id === id ? itemUpdated : item
    })
    const message = `L\'item ${item} a bien été modifié.`
    res.json(success(message, itemUpdated))
})

app.delete('/api/items/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const itemDeleted = items.find(i => i.id === id)
    items.filter(item => item.id === id)
    const message = `L\'item ${item.name} a bien été supprimé.`
    res.json(success(message, itemDeleted))
})


app.listen(port, () => console.log(`Notre  appplication Node et démarée sur : http://localhost:${port}`))