import { Component } from '@angular/core';
import { TodoService } from '../todo/services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'oblako-angular';
  constructor() {
  }
}
