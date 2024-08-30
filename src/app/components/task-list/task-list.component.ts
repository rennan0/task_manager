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

  constructor(public taskService: TaskService) { }

  ngOnInit(): void { 

    
  }

  onUpdateTask(task: Task) {
    this.updateTask.emit(task);
  }

  onDeleteTask(task: Task) {
    this.deleteTask.emit(task);
  }

  onFinishTask(task: Task) {
    this.finishTask.emit(task);
  }

  listTasks() {
    this.tasks = this.taskService.listTasks();
  }

}
