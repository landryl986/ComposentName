import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskServiceService } from '../services/task-service.service';
import { Task } from '../task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor(private _taskService: TaskServiceService) { }

  @Input() task: Task;
  @Output() taskSelected = new EventEmitter<Task>();

  ngOnInit(): void {

  }

  selectTask():void {
    this.taskSelected.emit(this.task);
  }
}
