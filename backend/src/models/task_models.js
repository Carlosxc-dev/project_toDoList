const prisma = require("./conection");

// Busca no banco de dados todas as tarefas
const getAll = async () => {
  const tasks = await prisma.Task.findMany();
  return tasks;
};

// Criar uma tarefa no banco de dados
const createTask = async (task) => {
  const { title } = task;

  const createdtask = await prisma.Task.create({
    data: {
      title,
      status: "pendente",
    },
  });

  return createdtask;
};

// Deletar uma task do banco de dados
const deleteTask = async (id) => {
  const removedTask = await prisma.Task.delete({
    where: {
      id: id, // ID como String
    },
  });

  return removedTask;
};

// Atualizar uma task já existente no banco de dados
const updateTask = async (id, task) => {
  const { title, status } = task;

  const updatedTask = await prisma.Task.update({
    where: { id: id }, // ID como String
    data: { title, status },
  });

  return updatedTask;
};

// Busca quantas tasks existem no banco de dados
const number_task = async () => {
  const count = await prisma.Task.count();
  return count;
};

module.exports = {
  getAll,
  createTask,
  deleteTask,
  updateTask,
  number_task,
};
