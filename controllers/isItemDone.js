const Shop = require("../models/connection")
const isItemDone = (req, res) => {
    const id = req.params.id
    Shop.findOneAndUpdate({ _id: id }, { isDone: true })
        .then(() => console.log("done!"))
        .catch(e => console.log(e.message))
}

module.exports = isItemDone;