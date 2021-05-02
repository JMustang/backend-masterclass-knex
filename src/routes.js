const express = require("express");
const routes = express.Router();

const UserController = require("./controllers/UserController");

routes
  .get("/users", UserController.index)
  .post("/users", UserController.create)
  .put("/users/:id", UserController.update)
  .delete("/users/:id", UserController.delete);

module.exports = routes;
