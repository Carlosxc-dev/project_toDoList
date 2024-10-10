import { NextFunction, Request, Response, Router } from "express";
import { ControllerTask } from "../controllers/controllerTask";

const controllerTask = new ControllerTask();

const task = Router();

task.get("/", (req, res, next) => {
  controllerTask.createTask(req, res, next);
});
task.post("/", (req, res, next) => {
  controllerTask.createTask(req, res, next);
});
// task.delete("/:id", (req, res, next) => controllerTask.getAllTasks(req, res, next));
// task.put("/:id", (req, res, next) => controllerTask.getAllTasks(req, res, next));
// task.get("/number", (req, res, next) => controllerTask.getAllTasks(req, res, next));

export { task };
