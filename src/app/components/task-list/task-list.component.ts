import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../../models/task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  @Input() tasks!: Task[];
  @Output() updateTask = new EventEmitter<Task>();
  @Output() deleteTask = new EventEmitter<Task>();
  @Output() finishTask = new EventEmitter<Task>();


  // title: string = '';
  // description: string = '';
  //tasks: Task[] = [];

  constructor(public taskService: TaskService) { }

  ngOnInit(): void {
    // this.listTasks();
  }


  onUpdateTask(task: Task) {
    this.updateTask.emit(task);
    console.log(task)
  }

  onDeleteTask(task: Task) {
    this.deleteTask.emit(task);
    console.log(task)
  }

  onFinishTask(task: Task) {
    this.finishTask.emit(task);
    console.log(task)
  }
  // onEdit(task: Task): void {
  //   this.editTask.emit(task);
  // }

  // onDelete(task: Task): void {
  //   this.deleteTask.emit(task);
  // }

  listTasks() {
    this.tasks = this.taskService.listTasks();
    console.log("werfwefewqfwe")

  }

  // deleteTask(task: Task) {
  //   this.taskService.deleteTask(task.id);
  //   this.listTasks();
  // }

  // finishTask(task: Task) {
  //   task.completed = !task.completed;
  //   this.taskService.updateTask(task);
  //   this.listTasks();
  // }

  // updateTask(task: Task) {

  // }

  // teste() {
  //   console.log(this.title);
  //   console.log(this.description);
  //   let newTask = new Task(0, this.title, this.description);
  //   this.taskService.addTask(newTask);

  //   console.log(this.taskService.listTasks())
  //   // this.taskService.listTasks();
  // }
}
