import { Router } from "express";
import { user } from "./user.routes";
import { task } from "./task.routes";

const router = Router();

router.use("/user", user);
router.use("/task", task);

export { router };
