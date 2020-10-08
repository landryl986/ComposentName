import { Component, Inject, OnInit } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import {Task} from '../task';
import {TaskServiceService} from '../services/task-service.service';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-red',
  templateUrl: './red.component.html',
  styleUrls: ['./red.component.css'],
})
export class RedComponent implements OnInit {
  task: Task;
  titre: string;
  descripiton: string;
  idIncrement: number = 1;

  constructor(private _taskService: TaskServiceService) {
    this.task = {} as Task;
  }

  ngOnInit(): void {}

  delTask(task: Task): void {
    this._taskService.delTask(task);
  }

  getTasks(): Array<Task> {
    return this._taskService.returnTasks();
  }

  createNewTask() {
    this.task.id = this.idIncrement++;
    this._taskService.addNewTask(this.task);
    this.task = {} as Task;
  }
}

