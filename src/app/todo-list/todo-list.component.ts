import { Component } from '@angular/core';
import { todos } from '../todos';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  todos = todos;

  constructor() { }

  ngOnInit(): void {
  }

}
