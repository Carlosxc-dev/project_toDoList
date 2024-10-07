import { Router } from "express";
import { ControllerTask } from "../controllers/controllerTask";

const controllerTask = new ControllerTask();

const task = Router();

task.get("/", controllerTask.getAllTasks);
task.post("/", controllerTask.getAllTasks);
task.delete("/:id", controllerTask.getAllTasks);
task.put("/:id", controllerTask.getAllTasks);
task.get("/number", controllerTask.getAllTasks);

export { task };
