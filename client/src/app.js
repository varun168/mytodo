import 'bootstrap';
import { inject } from 'aurelia-framework';
import AuthService from 'AuthService';
import {Todo} from './todo';

@inject(AuthService)
export class App {

  constructor(AuthService) {
  	this.auth = AuthService;
    this.heading = "Varun's To Do List";
    this.todos = [];
    this.todoDescription = '';  
    this.currentDate = new Date();
  }
    
    addTodo() {
    if (this.todoDescription) {
      this.todos.push(new Todo(this.todoDescription));
      this.todoDescription = '';
    }
      
      if (this.todoPriority) {
      this.todos.push(new Todo(this.todoPriority));
      this.todoPriority = '';
    }
  }
    
  
    removeTodo(todo) {
    let index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }
    
}

export class ToJSONValueConverter {
  toView(obj) {
    if (obj) {
      return JSON.stringify(obj, null, 2)
    }
  }
}