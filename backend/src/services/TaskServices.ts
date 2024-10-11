import { Task, TaskDTO } from "../domain/Task";
import { RepositoryTask } from "../repository/RepositoryTask";

class TaskServices {
  private taskRepository: RepositoryTask;
  constructor() {
    this.taskRepository = new RepositoryTask();
  }

  async getAllTask(userid: string): Promise<TaskDTO[]> {
    return await this.taskRepository.read(userid);
  }

  public async createTask(title: string, userId: string): Promise<any> {
    if (title.length < 3) {
      throw new Error("Title must have at least 3 characters");
    }

    return this.taskRepository.create(title, userId);
  }
}

export { TaskServices };
