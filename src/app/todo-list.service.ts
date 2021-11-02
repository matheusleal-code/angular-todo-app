import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './todos';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  items: Todo[] = [];

  constructor(
    //private http: HttpClient
  ) {}

  addTask(Todo: Todo) {
    this.items.push(Todo);
  }

  getItems() {
    return this.items;
  }

  // clearCart() {
  //   this.items = [];
  //   return this.items;
  // }

  // getShippingPrices() {
  //   return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  // }

}
