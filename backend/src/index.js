const express = require("express");

const routes = require("./routes"); //Rotas

const app = express();

app.use(express.json()); //Deixa o JSON ser capaz de ser lido pela aplicação
app.use(routes); //Define o arquivo routes para execução, sempre deixa abaixo do "use(express.json())"

app.listen(3333);
