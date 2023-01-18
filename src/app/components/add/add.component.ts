import { Component } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service'; 

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  
  constructor(private todoService: TodoService) {

  }

  addToList(value: string): void {

    this.todoService.addToList({id: this.todoService.getList().length, description: value, done: false});
  
  }


  
}
