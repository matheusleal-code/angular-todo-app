import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './todos';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[] = [];

  constructor(
    //private http: HttpClient
  ) {}

  addTask(Todo: Todo) {
    this.todos.push(Todo);
  }

  getTasks() {
    return this.todos;
  }

  deleteTask(id: number) {
    const todoId = this.getItemByID(id);

    for(var todo of todoId){
      var index = this.todos.indexOf(todo);
      this.todos.splice(index, 1);
    }
  }

  attTask(id: number, description: string, status: boolean){
    const todoId = this.getItemByID(id);

    for(var todo of todoId){
      var index = this.todos.indexOf(todo);
      this.todos[index].description = description;
      this.todos[index].status = status;
    }
  }

  private getItemByID(id: number){
    var todoId = this.todos.filter(function(todo) {
      return todo.id == id;
    });
    return todoId;
  }

  // clearCart() {
  //   this.items = [];
  //   return this.items;
  // }

  // getShippingPrices() {
  //   return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  // }

}
