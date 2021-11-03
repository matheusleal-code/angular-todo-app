import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TodoService } from '../todo-list.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() id: number;
  @Input() description: string;
  @Input() status: boolean;

  isEditing: boolean = false

  constructor(
    private TodoService: TodoService,
    private FormBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

  }

  setIsEditing(){
    this.isEditing = !this.isEditing;
  }

  attTask(id: number, description:string, status: boolean){
    this.TodoService.attTask(id, description, status);
    this.isEditing = false;
  }

  deleteTask(id: number){
    this.TodoService.deleteTask(id);
  }

}
