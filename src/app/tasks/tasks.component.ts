import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ITask } from '../common/types/interfaces';
import { TasksService } from './tasks.service';
import { isEmpty } from '../common/helpers/isEmpty';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  tasks$: Observable<ITask[]>;
  sub: Subscription;
  isModalActive: boolean = false;
  isEmpty = isEmpty;
  task: ITask;

  constructor(private tasksService: TasksService) {}

  ngOnInit(): void {
    this.sub = this.tasksService.getTasks().subscribe(() => {
      this.tasks$ = this.tasksService.tasks$;
    });
  }

  onOpenModal() {
    this.isModalActive = true;
  }

  onClose() {
    this.task = null;
    this.isModalActive = false;
  }

  onEditTask(task: ITask) {
    this.task = task;
    this.isModalActive = true;
  }
}
