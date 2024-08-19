import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Task } from '../../models/task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],

  encapsulation: ViewEncapsulation.None
})
export class TaskItemComponent implements OnInit {

  newTitle: string = '';
  newDescription: string = '';

  @Input() task!: Task;
  @Output() updateTask = new EventEmitter<Task>();
  @Output() deleteTask = new EventEmitter<Task>();
  @Output() finishTask = new EventEmitter<Task>();


  disableInput: boolean = true;

  constructor(public taskService: TaskService,) { }

  ngOnInit(): void {

  }

  startEditTask(task: Task) {
    this.newTitle = task.title;
    this.newDescription = task.description;
  }

  onUpdateTask(task: Task) {
    this.updateTask.emit(task);
    this.changeEditionStatus();
  }

  changeEditionStatus() {
    this.disableInput = !this.disableInput;
  }

  resetTask(task: Task) {
    task.title = this.newTitle;
    task.description = this.newDescription;
  }

  onDeleteTask(task: Task) {
    this.deleteTask.emit(task);
  }

  onFinishTask(task: Task) {
    this.finishTask.emit(task);
  }


}
