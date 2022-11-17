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
  page: number = 1;
  searchValue: string;

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

  startIndex(): number {
    return (this.page - 1) * 5;
  }

  endIndex(): number {
    return this.page * 5;
  }

  hasNextPage(tasks: ITask[]): boolean {
    return this.endIndex() < tasks.length;
  }

  paginatedTasksList(tasks: ITask[]): ITask[] {
    return tasks.slice(this.startIndex(), this.endIndex());
  }

  completedTasks(tasks: ITask[]): number {
    let completedTaskCounte = tasks.reduce((acc: number, task) => {
      if (task.isCompleted) {
        acc++;
      }
      return acc;
    }, 0);

    return completedTaskCounte;
  }

  searchEventHandler(searchValue: string) {
    this.searchValue = searchValue;
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
