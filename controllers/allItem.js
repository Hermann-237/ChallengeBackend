const Shop = require("../models/connection");
const allItem = (req, res) => {
    Shop.find({})
        .then(data => res.status(200).json(data))
        .catch(e => console.log(e.message))
}

module.exports = allItem;