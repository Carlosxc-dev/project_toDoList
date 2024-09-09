const express = require("express");
//importa do controller e das validacoes
const middleware = require("./middlewares/middlewaresTask");

const router = express.Router();
const taskController = require("./controller/taskController");

// Rota para buscar todas as tarefas
router.get("/tasks", taskController.getAllTasks);

// Rota para criar uma nova tarefa
router.post("/tasks", taskController.createTask);

// Rota para deletar uma tarefa
router.delete("/tasks/:id", taskController.deleteTask);

// Rota para atualizar uma tarefa
router.put("/tasks/:id", taskController.updateTask);

// Rota para buscar o número total de tarefas
router.get("/tasks/number", taskController.getNumberOfTasks);

module.exports = router;
