import { PrismaClient } from "@prisma/client";
import { connectionPrisma } from "../config/conectionMongoDB";
import { TaskDTO } from "../domain/Task";
import { ObjectId } from "mongodb";

class RepositoryTask {
  private connection: PrismaClient;
  constructor() {
    this.connection = connectionPrisma;
  }

  async create(title: string): Promise<TaskDTO | null> {
    const validUserId = new ObjectId("6512bd43d9caa6e02c990b0a"); // Exemplo de um ObjectId válido

    const task = await this.connection.task.create({
      data: {
        userId: validUserId.toString(), // Garante que userId será um ObjectId válido
        title: title,
        status: "pendente",
        created_at: new Date(),
      },
    });

    return task;
  }

  async read() {
    const tasks = await this.connection.task.findMany();
    const count = await this.connection.task.count();
    return { tasks, count };
  }

  async update(id, task) {
    const { title, status } = task;

    const updatedTask = await this.connection.task.update({
      where: { id: id },
      data: { title, status },
    });

    return updatedTask;
  }

  async delete(id) {
    const removedTask = await this.connection.task.delete({
      where: {
        id: id,
      },
    });

    return removedTask;
  }
}

export { RepositoryTask };
