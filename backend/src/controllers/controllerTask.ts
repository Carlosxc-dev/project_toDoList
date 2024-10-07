import { RepositoryTask } from "../repository/RepositoryTask";
import { Task } from "../domain/Task";
import { Request, Response } from "express";


class ControllerTask {
  constructor() {}

  async getAllTasks(req: Request, res: Response) {
    try {
      const { task } = req.body;
      const tasks = await task.login();
      res.status(200).json(tasks);
    } catch (error) {
      console.error("Erro ao buscar tarefas:", error);
      res.status(500).json({ error: "Erro ao buscar tarefas" });
    }
  }

  async createTask(req: Request, res: Response) {
    try {
      const task = req.body;
      const createdTask = await task.createTask(task);
      res.status(201).json(createdTask);
    } catch (error) {
      console.error("Erro ao criar tarefa:", error);
      res.status(500).json({ error: "Erro ao criar tarefa" });
    }
  }

  async deleteTask = async (req: Request, res: Response) {
    try {
      const { id } = req.params;
      const removedTask = await task.deleteTask(id);
      res.status(200).json(removedTask);
    } catch (error) {
      console.error("Erro ao deletar tarefa:", error);
      res.status(500).json({ error: "Erro ao deletar tarefa" });
    }
  };

  async updateTask(req: Request, res: Response){
    try {
      const { id } = req.params;
      const task = req.body;
      const updatedTask = await task.updateTask(id, task);
      res.status(200).json(updatedTask);
    } catch (error) {
      console.error("Erro ao atualizar tarefa:", error);
      res.status(500).json({ error: "Erro ao atualizar tarefa" });
    }
  };

  // Função para buscar o número total de tarefas
  async getNumberOfTasks(req: Request, res: Response){
    try {
      const number = await task.number_task();
      res.status(200).json({ number });
    } catch (error) {
      console.error("Erro ao contar tarefas:", error);
      res.status(500).json({ error: "Erro ao contar tarefas" });
    }
  };
}

export { ControllerTask };
