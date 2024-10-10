import React, { useState, useEffect, FormEvent } from "react";
import {
  Header,
  Main,
  Count,
  TaskCount,
  TaskNumber,
  AddForm,
  Input,
  SubmitButton,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableCell,
  Select,
  ButtonAction,
} from "./styled"; // Importe os componentes estilizados

const API_URL = "http://localhost:3307/task"; // ou a URL da sua API

interface Task {
  id: number;
  title: string;
  created_at: string;
  status: string;
}

const TodoList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>("");
  const [taskCount, setTaskCount] = useState<number>(0);

  // Função para buscar as tarefas do backend
  const fetchTasks = async () => {
    const response = await fetch(`${API_URL}/tasks`);
    const tasksData: Task[] = await response.json();
    setTasks(tasksData);
  };

  // Função para adicionar nova tarefa
  const addTask = async (event: FormEvent) => {
    event.preventDefault();
    if (newTask.trim()) {
      const task = { title: newTask };
      await fetch(`${API_URL}/tasks`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(task),
      });
      setNewTask("");
      loadTasks();
    }
  };

  // Função para deletar tarefa
  const deleteTask = async (id: number) => {
    await fetch(`${API_URL}/tasks/${id}`, {
      method: "DELETE",
    });
    loadTasks();
  };

  // Função para atualizar tarefa
  const updateTask = async (updatedTask: Task) => {
    await fetch(`${API_URL}/tasks/${updatedTask.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedTask),
    });
    loadTasks();
  };

  // Função para formatar data
  const formatDate = (dateUTC: string) => {
    const date = new Date(dateUTC);
    if (isNaN(date.getTime())) {
      return "Data inválida";
    }
    return date.toLocaleString("pt-BR", {
      dateStyle: "short",
      timeStyle: "short",
    });
  };

  // Função para carregar a quantidade de tarefas
  const loadTaskCount = async () => {
    const res = await fetch(`${API_URL}/tasks/number`);
    const countData = await res.json();
    setTaskCount(countData.number);
  };

  // Função para carregar as tarefas e a quantidade de tarefas
  const loadTasks = async () => {
    await fetchTasks();
    await loadTaskCount();
  };

  // Carregar as tarefas quando o componente for montado
  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div>
      <Header>TODO LIST</Header>

      <Main>
        <AddForm onSubmit={addTask}>
          <Input
            type="text"
            placeholder="Adicionar tarefa"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="input-task"
          />
          <SubmitButton type="submit">+</SubmitButton>
        </AddForm>

        <Count>
          <TaskCount>
            Quantidade de tarefas: <TaskNumber>{taskCount}</TaskNumber>
          </TaskCount>
        </Count>

        <Table>
          <TableHead>
            <TableRow className="theader">
              <TableHeaderCell>Tarefa</TableHeaderCell>
              <TableHeaderCell>Criada em</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
              <TableHeaderCell>Ações</TableHeaderCell>
            </TableRow>
          </TableHead>

          <tbody>
            {tasks.map((task) => (
              <TableRow key={task.id}>
                <TableCell>{task.title}</TableCell>
                <TableCell>{formatDate(task.created_at)}</TableCell>
                <TableCell>
                  <Select
                    value={task.status}
                    onChange={(e) =>
                      updateTask({ ...task, status: e.target.value })
                    }
                  >
                    <option value="pendente">pendente</option>
                    <option value="em andamento">em andamento</option>
                    <option value="concluída">concluída</option>
                  </Select>
                </TableCell>
                <TableCell>
                  <ButtonAction
                    variant="edit"
                    onClick={() => {
                      const updatedTitle = prompt("Editar tarefa", task.title);
                      if (updatedTitle) {
                        updateTask({ ...task, title: updatedTitle });
                      }
                    }}
                  >
                    <span className="material-symbols-outlined">edit</span>
                  </ButtonAction>

                  <ButtonAction
                    variant="delete"
                    onClick={() => deleteTask(task.id)}
                  >
                    <span className="material-symbols-outlined">delete</span>
                  </ButtonAction>
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </Main>
    </div>
  );
};

export default TodoList;
