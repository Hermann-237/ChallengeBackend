const Shop = require("../models/connection")
const isItemDone = (req, res) => {
    const id = req.params.id
    Shop.findOneAndUpdate({ _id: id }, { isDone: true })
        .then(() => res.send(""))
        .catch(e => console.log(e.message))
}

module.exports = isItemDone;