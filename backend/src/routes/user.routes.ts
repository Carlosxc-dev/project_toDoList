import e, { Router } from "express";
import { ControllerUser } from "../controllers/controllerUser";

const controllerUser = new ControllerUser();

const user = Router();

user.get("/", (req, res, next) => controllerUser.login(req, res, next));
user.post("/", (req, res, next) => controllerUser.register(req, res, next));
user.put("/", (req, res, next) => controllerUser.update(req, res, next));
user.delete("/", (req, res, next) => controllerUser.delete(req, res, next));

export { user };
