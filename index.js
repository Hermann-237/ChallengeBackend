require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express();
require("./models/connection")
const port = 80;
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(express.json())
const ShopRouter = require("./routers/router")

app.listen(port, () => console.log(`The server is running on the port ${port}`))
app.use("/", ShopRouter())
