const mongoose = require("mongoose");
const URI = "mongodb+srv://user4:1234@cluster0.nvyxm.mongodb.net/Shopping?retryWrites=true&w=majority"

mongoose.connect(URI, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true })
    .then(() => console.log(`You are connecting to your database`))
    .catch(e => console.log(`There is an error on some point read this message: ${e.message}`));


const shopSchema = new mongoose.Schema({
    item: {
        required: true,
        type: String
    },
    priority: {
        required: true,
        type: String
    },
    isDone: {
        type: Boolean
    }
})

const Shop = mongoose.connection.model("items", shopSchema)

module.exports = Shop