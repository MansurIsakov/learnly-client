import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ITask } from 'src/app/common/types/interfaces';
import { TasksService } from 'src/app/tasks/tasks.service';

@Component({
  selector: 'app-tasks-modal',
  templateUrl: './tasks-modal.component.html',
  styleUrls: ['./tasks-modal.component.scss'],
})
export class TasksModalComponent implements OnInit {
  @Input() task: ITask;
  @Output() closeModal = new EventEmitter();

  sub: Subscription;

  formMode: string = 'new';

  constructor(private tasksService: TasksService) {}

  ngOnInit(): void {
    if (this.task) {
      this.formMode = 'edit';
    }
  }

  isNew(): boolean {
    return !this.task;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    if (this.isNew()) {
      this.sub = this.tasksService.addTask(form.value).subscribe(() => {
        this.closeModal.emit();
      });
    } else {
      this.sub = this.tasksService
        .updateTask(this.task.id, form.value)
        .subscribe(() => {
          this.closeModal.emit();
        });
    }
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
