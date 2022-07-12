const express = require('express')
const morgan = require('morgan')
const favicon = require('serve-favicon')
const bodyParser = require('body-parser')
const sequelize = require('./src/db/sequelize.js')

const app = express()
const port = 3000

app.use((req, res, next) => {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app
    .use(favicon(__dirname + '/favicon.ico'))
    .use(morgan('dev'))
    .use(bodyParser.json())

//sequelize.initDb()

// Endpoints
require('./src/routes/findAllItems')(app)
require('./src/routes/findItemByPk')(app)
require('./src/routes/createItem')(app)
require('./src/routes/updateItem')(app)
require('./src/routes/deleteItem')(app)

//erreur 404
/*
app.use(({res}) => {
    const message = 'Impossible de trouver la ressource demandée ! Vous pourvez essayer une autre URL.'
    res.status(404).json({message})
})
*/

app.listen(port, () => console.log(`Notre  appplication Node et démarée sur : http://localhost:${port}`))