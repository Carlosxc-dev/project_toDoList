import express from "express";
import cors from "cors";
import { router } from "./routes/index";
import bodyParser from "body-parser";
import { errorHandler } from "./middlewares/errorHandler";
import dotenv from "dotenv";
dotenv.config();

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

app.use(errorHandler);  // Error handler middleware should be the last middleware

export { app };
