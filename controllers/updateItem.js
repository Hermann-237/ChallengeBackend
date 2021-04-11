const Shop = require("../models/connection")
const updateItem = (req, res) => {
    const id = req.params.id
    Shop.findOneAndUpdate({ _id: id }, { item: req.body.item, priority: req.body.priority }, { new: true })
        .then((data) => {
            res.status(200).json(data)
            console.log("the update was sucessfull" + data)
        })
        .catch(e => console.log(e.message))
}

module.exports = updateItem;