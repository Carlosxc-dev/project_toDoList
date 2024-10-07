class RepositoryUser {
  constructor(prisma) {
    this.prisma = prisma;
  }

  async create(user) {
    const { name, email, password } = user;

    const createdUser = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: password,
      },
    });

    return createdUser;
  }

  async read() {
    const users = await prisma.user.findMany();
    return users;
  }

  async update(id, user) {
    const { name, email, password } = user;

    const updatedUser = await prisma.user.update({
      where: { id: id },
      data: { name, email, password },
    });

    return updatedUser;
  }

  async delete(id) {
    const removedUser = await prisma.user.delete({
      where: {
        id: id,
      },
    });

    return removedUser;
  }
}

export { RepositoryUser };
