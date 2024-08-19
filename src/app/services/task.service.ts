import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task[] = [];
  newId: number = 1;

  constructor() { }


  listTasks(): Task[] {
    return this.tasks;
  }

  addTask(task: Task) {
    task.id = this.newId++;
    this.tasks.push(task);
  }

  updateTask(updatedTask: Task) {
    let index = this.tasks.findIndex(task => task.id === updatedTask.id);
    if (index !== -1) {
      this.tasks[index] = updatedTask;
    }
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }


}
