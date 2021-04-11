const Shop = require("../models/connection")
const findOnItemById = (req, res) => {
    const id = req.params.id
    Shop.findOne({ _id: id })
        .then((data) => res.status(200).json(data))
        .catch(e => res.status(500).json({ message: e.message }))
}

module.exports = findOnItemById;