const { Item } = require('./db/sequelize')

module.exports = (app) => {
    app.put('api/items/:id', (req, res) => {
        const id = req.params.id
        Item.update(req.body, {
            where: { id: id }
        })
        .then(_ => {
            return Item.findByPk(id).then(item => {
                if(item === null){
                    const message = `L\'item n'a pas pu être modifié. Réessayez dans quelques instants.`
                    return res.statut(404).json({message})    
                }
                const message = `L\'item ${req.body.name} a bien été modifé.`
                res.json({message, data: item})
            })
        })
        .catch(error => {
            const message = `L'item n'a pas pu être modifié. Réessayez dans quelques instants.`
            res.status(500).json({ message, data: error })
        })
    })
}