const Shop = require("../models/connection")
const createItem = (req, res) => {
    const newItem = new Shop({
        item: req.body.item.trim(),
        priority: req.body.priority,
        isDone: false
    })
    newItem.save()
        .then(() => res.status(200).send({ message: `The item ${newItem} has been saved` }))
        .catch(e => console.log(`there was an error saving the item: ${e.message}`))
}

module.exports = createItem;