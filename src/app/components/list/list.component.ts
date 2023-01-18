import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  todos: Todo[] = [];

  constructor(private todoService: TodoService){}

  ngOnInit(){

    this.todos = this.todoService.getList();
    
  }

  finishTodo(id: number){

    this.todoService.updateList(id);

  }

  excluirTodo(value: number){
    this.todoService.excluirTodo(value);
  }

  

}
