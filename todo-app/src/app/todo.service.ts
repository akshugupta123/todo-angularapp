// todo.service.ts
import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = [];
  private nextId = 1;

  addTodo(title: string): void {
    this.todos.push({ id: this.nextId++, title, completed: false });
  }

  getTodos(): Todo[] {
    return this.todos;
  }

  markAsCompleted(id: number): void {
    const todo = this.todos.find(todo => todo.id === id);
    if (todo) {
      todo.completed = true;
    }
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  clearCompleted(): void {
    this.todos = this.todos.filter(todo => !todo.completed);
  }

  // Add more methods as needed
}
