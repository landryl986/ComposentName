import { renderFlagCheckIfStmt } from '@angular/compiler/src/render3/view/template';
import { Injectable } from '@angular/core';
import { Task } from '../task';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor() { }
  tasks: Array<Task> = [];
  task: Task;

  addNewTask(newTask : Task): void {
    this.task = newTask;
    this.tasks.push(this.task);
  }

  delTask(Task): void {
    if (confirm("Are you sure to delete Task number : " + Task.id)) {
      this.tasks.forEach(element => {
        if (element.id == Task.id) {
          this.tasks.splice(this.tasks.indexOf(Task), 1);
        }
      });
    }
  }

  returnTasks(): Array<Task> {
    return this.tasks;
  }
}
