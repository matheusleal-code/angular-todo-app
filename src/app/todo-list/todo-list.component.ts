import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos = this.TodoService.getItems();
  constructor(
    private TodoService: TodoService,
  ) { }

  ngOnInit(): void {
  }

}
