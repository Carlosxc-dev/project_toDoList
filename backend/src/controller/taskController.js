const taskmodel = require("../models/task_models");

// Função para buscar todas as tarefas
const getAllTasks = async (req, res) => {
  try {
    const tasks = await taskmodel.getAll();
    console.log("models === ", tasks);
    res.status(200).json(tasks);
  } catch (error) {
    console.error("Erro ao buscar tarefas:", error);
    res.status(500).json({ error: "Erro ao buscar tarefas" });
  }
};

// Função para criar uma nova tarefa
const createTask = async (req, res) => {
  try {
    const { title } = req.body;
    console.log("tasks === ", title);

    if (!title) {
      return res.status(400).json({ error: "Título é obrigatório" });
    }

    const createdTask = await taskmodel.createTask(title);
    res.status(201).json(createdTask);
  } catch (error) {
    console.error("Erro ao criar tarefa:", error);
    res.status(500).json({ error: "Erro ao criar tarefa" });
  }
};

// Função para deletar uma tarefa
const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const removedTask = await taskmodel.deleteTask(id);
    res.status(200).json(removedTask);
  } catch (error) {
    console.error("Erro ao deletar tarefa:", error);
    res.status(500).json({ error: "Erro ao deletar tarefa" });
  }
};

// Função para atualizar uma tarefa
const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = req.body;
    const updatedTask = await taskmodel.updateTask(id, task);
    res.status(200).json(updatedTask);
  } catch (error) {
    console.error("Erro ao atualizar tarefa:", error);
    res.status(500).json({ error: "Erro ao atualizar tarefa" });
  }
};

// Função para buscar o número total de tarefas
const getNumberOfTasks = async (req, res) => {
  try {
    const number = await taskmodel.number_task();
    res.status(200).json({ number });
  } catch (error) {
    console.error("Erro ao contar tarefas:", error);
    res.status(500).json({ error: "Erro ao contar tarefas" });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  deleteTask,
  updateTask,
  getNumberOfTasks,
};
