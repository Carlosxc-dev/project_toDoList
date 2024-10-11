import { useState, useEffect, FormEvent } from "react";
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
} from "./styled";

const API_URL = "http://localhost:3307/task"; // ou a URL da sua API

interface Task {
  id: string;
  title: string;
  created_at: string;
  status: string;
  userId: string;
}

const TodoList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>("");
  const [taskCount, setTaskCount] = useState<number>(0);

  // Função para buscar as tarefas do backend
  const fetchTasks = async () => {
    try {
      const url = import.meta.env.VITE_API_LIST;
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: "6707d8bec0368d92b58853c7", // O ID do usuário está sendo enviado corretamente
          title: "title",
        }),
      });

      if (!response.ok) {
        throw new Error("Erro ao buscar as tarefas");
      }

      const { data } = await response.json();

      // Verifique se 'data' é um array e se possui as tarefas esperadas
      if (Array.isArray(data)) {
        setTasks(data);
      } else {
        console.error("Dados retornados não são um array", data);
      }
    } catch (error) {
      console.error("Erro ao buscar as tarefas:", error);
    }
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
  const deleteTask = async (id: string) => {
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
            {tasks.map((task: any) => (
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
