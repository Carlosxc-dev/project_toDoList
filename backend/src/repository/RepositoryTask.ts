class RepositoryTask {
  constructor(prisma) {
    this.prisma = prisma;
  }

  async create(task) {
    const { title } = task;

    const createdtask = await prisma.task.create({
      data: {
        title: title,
        status: "pendente",
        created_at: new Date(),
      },
    });

    return createdtask;
  }

  async read() {
    const tasks = await prisma.task.findMany();
    const count = await prisma.task.count();
    return tasks, count;
  }

  async update(id, task) {
    const { title, status } = task;

    const updatedTask = await prisma.task.update({
      where: { id: id },
      data: { title, status },
    });

    return updatedTask;
  }

  async delete(id) {
    const removedTask = await prisma.task.delete({
      where: {
        id: id,
      },
    });

    return removedTask;
  }
}

export { RepositoryTask };
