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
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
); //
app.use(router);

module.exports = app;
