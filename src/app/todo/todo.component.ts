import { Component, OnInit } from '@angular/core';
import { ToDoList } from 'src/app/todo/model/todolist.model';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todoList$: Observable<ToDoList[]>;
  constructor() { }

  ngOnInit() {
    this.todoList$ = this.getToDoList();
  }

  private getToDoList(): Observable<ToDoList[]> {
    const allItems = [
      {
        id: 101,
        name: 'Groceries 🛒',
        isCompleted: false
      },
      {
        id: 102,
        name: 'Swimming Class Enquiry🏊‍♂️',
        isCompleted: false
      },
      {
        id: 103,
        name: 'Pay Credit Card bills 💳',
        isCompleted: false
      },
      {
        id: 104,
        name: 'Music class 🎸',
        isCompleted: false
      },
      {
        id: 105,
        name: 'Pay Mortgage 💵',
        isCompleted: false
      },
      {
        id: 106,
        name: 'Car Wash 🚗',
        isCompleted: false
      }
    ];
    return of(allItems);
  }
}
