const { Item } = require('./db/sequelize')

module.exports = (app) => {
    app.get('api/items', (req, res) => {
        Item.findAll()
            .then(items => {
                const message = 'La liste des items a bien été récupérée.'
                res.json({message, data: items})
            })
            .catch(error => {
                const message = `La liste des items n'a pas pu récupérée. Réessayez dans quelques instants.`
                res.status(500).json({ message, data: error })
            })
    })
}