const Shop = require("../models/connection")
const deleteItem = (req, res) => {
    const id = req.params.id
    Shop.findOneAndRemove({ _id: id })
        .then(() => res.status(200).send(""))
        .catch(e => res.status(500).json({ message: e.message }))
}

module.exports = deleteItem;