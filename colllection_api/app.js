const express = require('express')
const morgan = require('morgan')
const favicon = require('serve-favicon')
const bodyParser = require('body-parser')
const sequelize = require('./src/db/sequelize')

const app = express()
const port = 3000

app
    .use(favicon(__dirname + '/favicon.ico'))
    .use(morgan('dev'))
    .use(bodyParser.json())

sequelize.initDb()

//endpoint
require('./src/routes/findAllItems')(app)
require('./src/routes/findItemByPk')(app)
require('./src/routes/createItem')(app)
require('./src/routes/updateItem')(app)
require('./src/routes/deleteItem')(app)

//erreur 404
app.use(({res}) => {
    const message = 'Impossible de trouver la ressource demandée ! Vous pourvez essayer une autre URL.'
    res.status(404).json({message})
})

app.listen(port, () => console.log(`Notre  appplication Node et démarée sur : http://localhost:${port}`))