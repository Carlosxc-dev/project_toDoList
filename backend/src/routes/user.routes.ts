import e, { Router } from "express";
import { ControllerUser } from "../controllers/controllerUser";

const controllerUser = new ControllerUser();

const user = Router();

user.get("/", controllerUser.login);
user.post("/", controllerUser.register);
user.put("/", controllerUser.update);
user.delete("/", controllerUser.delete);

export { user };
