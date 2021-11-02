import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TodoService } from '../todo-list.service';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css']
})
export class NewTodoComponent implements OnInit {
  private id:number;

  checkoutForm = this.formBuilder.group({
    description: '',
  });

  constructor(
    private TodoService: TodoService,
    private formBuilder: FormBuilder,
  ) { }


  onSubmit(): void {
    this.id = this.TodoService.getTasks().length + 1;
    this.TodoService.addTask({...this.checkoutForm.value, id: this.id});
    this.checkoutForm.reset();
  }

  ngOnInit(): void {
  }

}
