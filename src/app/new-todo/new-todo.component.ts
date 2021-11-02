import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TodoService } from '../todo-list.service';
import { Todo } from '../todos';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css']
})
export class NewTodoComponent implements OnInit {

  checkoutForm = this.formBuilder.group({
    description: '',
  });

  constructor(
    private TodoService: TodoService,
    private formBuilder: FormBuilder
  ) { }


  onSubmit(): void {
    this.TodoService.addTask(this.checkoutForm.value);
    this.checkoutForm.reset();
    console.log(this.TodoService.getItems());
  }

  ngOnInit(): void {
  }

}
