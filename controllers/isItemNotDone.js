const Shop = require("../models/connection")
const isItemNotDone = (req, res) => {
    const id = req.params.id
    Shop.findOneAndUpdate({ _id: id }, { isDone: false })
        .then(() => res.send(""))
        .catch(e => console.log(e.message))
}

module.exports = isItemNotDone;