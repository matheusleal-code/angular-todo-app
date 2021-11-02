import { Component, Input, OnInit } from '@angular/core';
import { TodoService } from '../todo-list.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() id: number;
  @Input() description: string;

  isEditing: boolean = false

  constructor(
    private TodoService: TodoService
  ) { }

  ngOnInit(): void {

  }

  setIsEditing(){
    this.isEditing = !this.isEditing;
  }

  attTask(id: number, description: string){
    console.log(id);
    console.log(description);
    this.TodoService.attTask(id, description);
    this.isEditing = false;
  }

  deleteTask(id: number){
    this.TodoService.deleteTask(id);
  }

}
