//imports dos frameworks para funcionamento da aplicacao
// usanod express para criar servidor
const express = require("express");
const cors = require("cors");
const router = require("./router");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(express.json()); // conseguir trabalhar req, res com json
app.use(
  cors({
    origin: "https://todolist-frontend-six.vercel.app/",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
); //
app.use(router); // toda requisicao do navegador app usa o router para gerenciar

module.exports = app;
