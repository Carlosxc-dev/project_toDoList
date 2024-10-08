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
    origin: "https://project-to-do-list-fawn.vercel.app",
    credentials: true,
  })
); // permitir que o frontend acesse o backend
app.use(router); // toda requisicao do navegador app usa o router para gerenciar

module.exports = app;
