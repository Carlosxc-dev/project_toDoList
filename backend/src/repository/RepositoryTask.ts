import { PrismaClient } from "@prisma/client";
import { connectionPrisma } from "../config/conectionMongoDB";
import { TaskDTO } from "../domain/Task";
import { ObjectId } from "mongodb";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { NotFoundError } from "../err/NotFoundError";
import { BadRequestError } from "../err/BadRequestError";

class RepositoryTask {
  private connection: PrismaClient;
  constructor() {
    this.connection = connectionPrisma;
  }

  async create(title: string, userId: string): Promise<TaskDTO | null> {
    const task = await this.connection.task.create({
      data: {
        userId: userId,
        title: title,
        status: "pendente",
        created_at: new Date(),
      },
    });

    return task;
  }

  async read(id: string): Promise<any> {
    try {
      return await connectionPrisma.task.findMany({
        where: {
          userId: id,
        },
      });
    } catch (err) {
      if (err instanceof PrismaClientKnownRequestError) {
        // Verificar o erro específico e lançar um erro customizado, se necessário
        throw new NotFoundError("Database query error / users not exist");
      }
      throw new BadRequestError("Unknown database error");
    }
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
