import { PrismaClient } from "@prisma/client";
import { connectionPrisma } from "../config/conectionMongoDB";

class RepositoryUser {
  private connection: PrismaClient
  constructor() {
    this.connection = connectionPrisma;
  }

  async create(user) {
    const { name, email, password } = user;

    const createdUser = await this.connection.user.create({
      data: {
        name: name,
        email: email,
        password: password,
      },
    });

    return createdUser;
  }

  async read() {
    const users = await this.connection.user.findMany();
    return users;
  }

  async update(id, user) {
    const { name, email, password } = user;

    const updatedUser = await this.connection.user.update({
      where: { id: id },
      data: { name, email, password },
    });

    return updatedUser;
  }

  async delete(id) {
    const removedUser = await this.connection.user.delete({
      where: {
        id: id,
      },
    });

    return removedUser;
  }
}

export { RepositoryUser };
