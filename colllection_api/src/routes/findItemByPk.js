const { Item } = require('./db/sequelize')

module.exports = (app) => {
    app.get('api/items/:id', (req, res) => {
        Item.findByPk(req.params.id)
            .then(item => {
                const message = 'L\'item a bien été récupérée.'
                res.json({message, data: item})
            })
            .catch(error => {
                const message = `L'item n'a pas pu être récupéré. Réessayez dans quelques instants.`
                res.status(500).json({ message, data: error })
            })
    })
}