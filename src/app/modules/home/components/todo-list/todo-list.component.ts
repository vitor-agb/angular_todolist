import { TaskList } from './../../model/task-list';
import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  public taskList: Array<TaskList> = [
    { task: 'Minha nova Task', checked: true },
    { task: 'Minha nova Task 2', checked: false },
  ];

  public deleteItemTaskList(event: number) {
    this.taskList.splice(event, 1);
  }

  public deleteAllTaskList() {
    const confirm = window.confirm(
      'Are you sure you want to delete everything?'
    );
    if (confirm) {
      this.taskList = [];
    }
  }
}
