const express = require("express");

const UserController = require("./controllers/UserController");
const TopicsController = require("./controllers/TopicsController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();
//login
routes.post("/sessions", SessionController.create);

//listagem e cadastro de usuários
routes.get("/users", UserController.index);
routes.post("/users", UserController.create);

//listagem de todos os tópicos criados pelo usuário
routes.get("/profile", ProfileController.index);

//listagem, cadastro e deletes de tópicos
routes.get("/topics", TopicsController.index);
routes.post("/topics", TopicsController.create);
routes.delete("/topics/:id", TopicsController.delete);
module.exports = routes;
