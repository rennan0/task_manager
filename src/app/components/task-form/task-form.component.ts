import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MessageService } from 'primeng/api';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { Button } from 'primeng/button';
import { TaskListComponent } from '../task-list/task-list.component';


@Component({
    selector: 'app-task-form',
    templateUrl: './task-form.component.html',
    styleUrls: ['./task-form.component.scss'],
    providers: [MessageService],
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [ToastModule, CardModule, FormsModule, InputTextModule, Button, TaskListComponent]
})
export class TaskFormComponent implements OnInit {

  title: string = '';
  description: string = '';
  tasks: Task[] = [];

  editMode: boolean = false;
  taskIdToEdit: number | null = null;

  constructor(public taskService: TaskService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.listTasks();
  }

  listTasks() {
    this.tasks = this.taskService.listTasks();
  }

  addTask() {
    if (this.title && this.description) {
      let newTask = new Task(0, this.title, this.description);
      this.taskService.addTask(newTask);
      this.clearForm();
    } else {
      this.showWarn("Atenção", "Tarefa está incompleta.");
    }
  }

  onDeleteTask(task: Task) {
    this.taskService.deleteTask(task.id);
    this.listTasks();
    this.showError("Atenção", "Tarefa excluida.");
  }

  onFinishTask(task: Task) {
    task.completed = !task.completed;
    this.taskService.updateTask(task);
    this.listTasks();
    if (task.completed) {
      this.showSuccess("Atenção", "Tarefa finalizada.");
    }
  }

  onUpdateTask(task: Task) {
    this.taskService.updateTask(task);
    this.listTasks();
    this.showSuccess("Atenção", "Tarefa atualizada.");
  }

  clearForm() {
    this.title = '';
    this.description = '';
  }


  /**METODO DE TOAST */
  showError(titulo: string, mensagem: string) {
    if (screen.width < 640 || screen.height < 480) {
      this.messageService.add({
        key: 'bc',
        severity: 'error',
        summary: titulo,
        detail: mensagem
      });
    } else if (screen.width < 1024 || screen.height < 768) {
      this.messageService.add({
        key: 'bc',
        severity: 'error',
        summary: titulo,
        detail: mensagem
      });
    } else {
      this.messageService.add({
        key: 'tr',
        severity: 'error',
        summary: titulo,
        detail: mensagem
      });
    }
  }

  showSuccess(titulo: string, mensagem: string) {
    if (screen.width < 640 || screen.height < 480) {
      this.messageService.add({
        key: 'bc',
        severity: 'success',
        summary: titulo,
        detail: mensagem
      });
    } else if (screen.width < 1024 || screen.height < 768) {
      this.messageService.add({
        key: 'bc',
        severity: 'success',
        summary: titulo,
        detail: mensagem
      });
    } else {
      this.messageService.add({
        key: 'tr',
        severity: 'success',
        summary: titulo,
        detail: mensagem
      });
    }
  }

  showWarn(titulo: string, mensagem: string) {
    if (screen.width < 640 || screen.height < 480) {
      this.messageService.add({
        key: 'bc',
        severity: 'warn',
        summary: titulo,
        detail: mensagem
      });
    } else if (screen.width < 1024 || screen.height < 768) {
      this.messageService.add({
        key: 'bc',
        severity: 'warn',
        summary: titulo,
        detail: mensagem
      });
    } else {
      this.messageService.add({
        key: 'tr',
        severity: 'warn',
        summary: titulo,
        detail: mensagem
      });
    }
  }
}


