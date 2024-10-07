interface ITask {
  id: number;
  title: string;
  status: string;
  created_at: Date;
}

class Task {
  private id: number;
  private title: string;
  private status: string;
  private created_at: Date;

  constructor({ id, title, status, created_at }: ITask) {
    this.id = id;
    this.title = title;
    this.status = status;
    this.created_at = created_at;
  }
}

export { Task };
