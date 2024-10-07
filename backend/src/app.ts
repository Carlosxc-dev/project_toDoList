import express from "express";
import cors from "cors";
import { router } from "./routes/router";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(
  cors({
    origin: "*",
    credentials: false,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(router);

export { app };
