import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITask } from 'src/app/common/types/interfaces';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.scss'],
})
export class TasksItemComponent implements OnInit {
  @Input() task: ITask;
  @Output() editTask = new EventEmitter();
  subs: Subscription[] = [];

  constructor(private tasksService: TasksService) {}

  ngOnInit(): void {}

  isCompleted(): boolean {
    return this.task.taskStatus;
  }

  updateTask() {
    this.editTask.emit(this.task);
  }

  toggleTask(taskId: string, task: ITask) {
    const toggledTask = { ...task, taskStatus: !task.taskStatus };

    this.subs.push(
      this.tasksService.updateTask(taskId, toggledTask).subscribe()
    );
  }

  deleteTask(taskId: string) {
    this.subs.push(this.tasksService.deleteTask(taskId).subscribe());
  }
}
