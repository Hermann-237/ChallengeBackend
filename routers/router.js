
const router = require("express").Router();
const allItem = require("../controllers/allItem");
const createItem = require("../controllers/createItem");
const deleteItem = require("../controllers/deleteItem");
const findOnItemById = require("../controllers/findOnItemById");
const home = require("../controllers/home");
const isItemDone = require("../controllers/isItemDone");
const isItemNotDone = require("../controllers/isItemNotDone");
const updateItem = require("../controllers/updateItem");

module.exports = () => {
    router.get("/", home);

    router.post("/new-item", createItem);
    router.get("/all-item", allItem);

    router.delete("/:id", deleteItem);

    router.post("/:id", isItemDone);
    router.post("/not-done/:id", isItemNotDone);

    router.put("/update/:id", updateItem);


    router.get("/find/:id", findOnItemById)

    return router;
}