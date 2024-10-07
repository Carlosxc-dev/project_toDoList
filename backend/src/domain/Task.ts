interface TaskDTO {
  id: string;
  title: string;
  status: string;
  created_at: Date;
}

interface Task {
  createTask(title: string): Promise<TaskDTO | null>
  readAll(): Promise<TaskDTO[]>;
}

export { Task, TaskDTO };
