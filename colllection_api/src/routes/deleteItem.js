const { Item } = require('../db/sequelize')

module.exports = (app) => {
    app.delete('/api/items/:id', (req, res) => {
        Item.findByPk(req.params.id).then(item => {
            if(item === null){
                const message = `L\'item n'a pas pu être modifié. Réessayez dans quelques instants.`
                return res.statut(404).json({message})    
            }
            const itemDeleted = item;
            return Item.destroy({
                where: { id: item.id }
            })
            .then(_ => {
                const message = `L\'item ${pokemonDeleted.id} a bien été supprimé.`
                res.json({message, data: item})
            })
        })
        .catch(error => {
            const message = `L'item n'a pas pu être modifié. Réessayez dans quelques instants.`
            res.status(500).json({ message, data: error })
        })
    })
}