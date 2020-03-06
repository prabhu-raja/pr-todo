import { Component, OnInit, Input } from '@angular/core';
import { ToDoList } from 'src/app/todo/model/todolist.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() taskItem: ToDoList;
  constructor() { }

  ngOnInit() {
  }

}
