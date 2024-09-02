import { Component } from '@angular/core';
import { TaskFormComponent } from './components/task-form/task-form.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    standalone: true,
    imports: [TaskFormComponent]
})
export class AppComponent {
  title = 'task-manager';
}
