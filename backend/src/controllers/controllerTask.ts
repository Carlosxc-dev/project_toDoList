import { NextFunction, Request, Response } from "express";
import { TaskServices } from "../services/TaskServices";
import { ResponseSuccess } from "../config/ResponseSuccess";


class ControllerTask {
  private taskService: TaskServices;

  constructor() {
    this.taskService = new TaskServices();
  }

  // public async getAllTasks(req: Request, res: Response, next: NextFunction) {
  //   try {
  //     const tasks = await this.taskService.readAll();
  //     res.status(200).json(tasks);
  //   } catch (error) {
  //     console.error("Erro ao buscar tarefas:", error);
  //     res.status(500).json({ error: "Erro ao buscar tarefas" });
  //   }
  // }

  async createTask(req: Request, res: Response, next: NextFunction) {
    try {
      const { title } = req.body;
      console.log(title);

      const createdTask = await this.taskService.createTask(title);
      
      return res.status(ResponseSuccess.userCreated.statusCode).json({message: ResponseSuccess.userCreated.message, data: createdTask});

    } catch (error) {
      next(error);
    }
  }

  // async deleteTask = async (req: Request, res: Response, next: NextFunction) {
  //   try {
  //     const { id } = req.params;
  //      const removedTask = await this.taskService.deleteTask(id);
  //     res.status(200).json(removedTask);
  //   } catch (error) {
  //     console.error("Erro ao deletar tarefa:", error);
  //     res.status(500).json({ error: "Erro ao deletar tarefa" });
  //   }
  // };

  // async updateTask(req: Request, res: Response, next: NextFunction){
  //   try {
  //     const { id } = req.params;
  //     const task = req.body;
  //     const updatedTask = await this.taskService.updateTask(id, task);
  //     res.status(200).json(updatedTask);
  //   } catch (error) {
  //     console.error("Erro ao atualizar tarefa:", error);
  //     res.status(500).json({ error: "Erro ao atualizar tarefa" });
  //   }
  // };

  // // Função para buscar o número total de tarefas
  // async getNumberOfTasks(req: Request, res: Response, next: NextFunction){
  //   try {
  //     const number = await this.taskService.number_task();
  //     res.status(200).json({ number });
  //   } catch (error) {
  //     console.error("Erro ao contar tarefas:", error);
  //     res.status(500).json({ error: "Erro ao contar tarefas" });
  //   }
  // };
}

export { ControllerTask };
