const Router = require("express").Router();
const bookController = require("../../controllers/books");

Router.route("/")
.get(bookController.findAll)
.post(bookController.create);

Router.route("/:id")
.get(bookController.findById)
.put(bookController.update)
.delete(bookController.remove);

module.exports = Router;