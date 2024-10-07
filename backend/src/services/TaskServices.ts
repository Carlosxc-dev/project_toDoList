import { Task, TaskDTO } from "../domain/Task";
import { RepositoryTask } from "../repository/RepositoryTask";


class TaskServices implements Task{
    private taskRepository: RepositoryTask;
    constructor() {
        this.taskRepository = new RepositoryTask();
    }

    async readAll(): Promise<TaskDTO[]> {
        return [];
    }

    public async createTask(title: string) {

        if(title.length < 3){
            throw new Error("Title must have at least 3 characters");
        }
        
        return this.taskRepository.create(title);
    }
}

export { TaskServices };