import { EventEmitter, Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[] = []
  
  constructor() { }

  addToList(todo: Todo): void {
  
    this.todos.push(todo)
    console.log(this.todos)
  
  }

  updateList(todo: number): void {

    this.todos[todo].done = !this.todos[todo].done

  }

  getList(): Todo[]{

    return this.todos;

  }

  excluirTodo(todo: number){

    const i = this.todos.findIndex(t => t.id == todo)

    this.todos.splice(i, 1)

  }
  


}
