const express = require("express");

const UserController = require("./controllers/UserController");
const TopicsController = require("./controllers/TopicsController");

const routes = express.Router();
//listagem e cadastro de usuários
routes.get("/users", UserController.index);
routes.post("/users", UserController.create);

//listagem, cadastro e deletes de tópicos
routes.get("/topics", TopicsController.index);
routes.post("/topics", TopicsController.create);
routes.delete("/topics/:id", TopicsController.delete);
module.exports = routes;
