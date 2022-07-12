const { Item } = require('../db/sequelize')

module.exports = (app) => {
    app.post('/api/items', (req, res) => {
        Item.create(req.body)
            .then(item => {
                const message = `L\'item ${req.body.name} a bien été récupérée.`
                res.json({message, data: item})
            })
            .catch(error => {
                const message = `L'item n'a pas pu être ajouté. Réessayez dans quelques instants.`
                res.status(500).json({ message, data: error })
            })
    })
}