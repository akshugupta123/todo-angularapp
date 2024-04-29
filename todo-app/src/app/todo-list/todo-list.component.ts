// todo-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  newTodo = '';

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
  }

  addTodo(): void {
    if (this.newTodo.trim()) {
      this.todoService.addTodo(this.newTodo);
      this.newTodo = '';
      this.todos = this.todoService.getTodos();
    }
  }

  markAsCompleted(id: number): void {
    this.todoService.markAsCompleted(id);
    this.todos = this.todoService.getTodos();
  }

  deleteTodo(id: number): void {
    this.todoService.deleteTodo(id);
    this.todos = this.todoService.getTodos();
  }

  clearCompleted(): void {
    this.todoService.clearCompleted();
    this.todos = this.todoService.getTodos();
  }
}
