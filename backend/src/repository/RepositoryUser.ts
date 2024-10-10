import { connectionPrisma } from "../config/conectionMongoDB";
import { z } from "zod";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { NotFoundError } from "../err/NotFoundError";
import { BadRequestError } from "../err/badRequestError";
import { IUserDTO } from "../domain/User";

class RepositoryUser {
  private static INSTANCE: RepositoryUser;

  private constructor() {}

  public static getInstance() {
    if (!RepositoryUser.INSTANCE) {
      RepositoryUser.INSTANCE = new RepositoryUser();
    }

    return RepositoryUser.INSTANCE;
  }

  async create(data: IUserDTO): Promise<any> {
    try {
      return await connectionPrisma.user.create({
        data: {
          name: data.name,
          email: data.email,
          password: data.password,
        },
      });
    } catch (err) {
      if (err instanceof PrismaClientKnownRequestError) {
        // Verificar o erro específico e lançar um erro customizado, se necessário
        throw new NotFoundError("Database query error");
      }
      throw new BadRequestError("Unknown database error");
    }
  }

  async read(emaill: string): Promise<any> {
    try {
      return await connectionPrisma.user.findUnique({
        where: { email: emaill },
      });
    } catch (err) {
      if (err instanceof PrismaClientKnownRequestError) {
        // Verificar o erro específico e lançar um erro customizado, se necessário
        throw new NotFoundError("Database query error");
      }
      throw new BadRequestError("Unknown database error");
    }
  }

  async update(data: IUserDTO): Promise<any> {
    try {
      const user = await connectionPrisma.user.update({
        where: {
          id: data.id,
        },
        data: {
          name: data.name,
          password: data.password,
        },
      });

      return user;
    } catch (err) {
      if (err instanceof PrismaClientKnownRequestError) {
        // Verificar o erro específico e lançar um erro customizado, se necessário
        throw new NotFoundError("Database query error / users not exist");
      }
      throw new BadRequestError("Unknown database error");
    }
  }

  async delete(userid: string): Promise<any> {
    try {
      await connectionPrisma.task.deleteMany({
        where: { id: userid },
      });

      await connectionPrisma.user.delete({
        where: {
          id: userid,
        },
      });

      return "User and your moneys deleted";
    } catch (err) {
      if (err instanceof PrismaClientKnownRequestError) {
        // Verificar o erro específico e lançar um erro customizado, se necessário
        console.log(err);

        throw new NotFoundError(
          "Database query error ou chave extrangeira em outra tabela"
        );
      }
      throw new BadRequestError("Unknown database error");
    }
  }

  async findbyusername(emaill: string): Promise<IUserDTO | null> {
    try {
      return await connectionPrisma.user.findUnique({
        where: { email: emaill },
      });
    } catch (err) {
      if (err instanceof PrismaClientKnownRequestError) {
        // Verificar o erro específico e lançar um erro customizado, se necessário
        throw new NotFoundError("Database query error");
      }
      throw new BadRequestError("Unknown database error");
    }
  }
}

export { RepositoryUser };
