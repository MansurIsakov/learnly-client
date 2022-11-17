import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { IExam } from 'src/app/common/types/interfaces';
import { ExamsService } from 'src/app/exams/exams.service';
import { TasksService } from 'src/app/tasks/tasks.service';
import { IUser } from 'src/app/models/user.model';

@Component({
  selector: 'app-goals-widget',
  templateUrl: './goals-widget.component.html',
  styleUrls: ['./goals-widget.component.scss'],
})
export class GoalsWidgetComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('animatedPoints') animatedPoints: ElementRef;
  @Input() user: IUser;

  exam$: Observable<IExam[]>;
  points: number = 540;
  duration: number = 1500;
  steps: number = 12;
  tasks: number;
  completedTasks: number;
  sub: Subscription;
  public time: Date = new Date();

  constructor(
    private examService: ExamsService,
    private tasksService: TasksService
  ) {
    setInterval(() => {
      this.time = new Date();
    }, 1);
  }

  counterFunc(endValue, durationMs, element) {
    const stepCount = Math.abs(durationMs / this.steps);
    const valueIncrement = (endValue - 0) / stepCount;
    const sinValueIncrement = Math.PI / stepCount;

    let currentValue = 0;
    let currentSinValue = 0;

    function step() {
      currentSinValue += sinValueIncrement;
      currentValue += valueIncrement * Math.sin(currentSinValue) ** 2 * 2;

      element.nativeElement.textContent = Math.abs(Math.floor(currentValue));

      if (currentSinValue < Math.PI) {
        window.requestAnimationFrame(step);
      }
    }

    step();
  }

  ngOnInit(): void {
    this.exam$ = this.examService.getExams();

    this.sub = this.tasksService.getTasks().subscribe((tasks) => {
      this.tasks = tasks.length;
      this.completedTasks = tasks.filter((task) => task.isCompleted).length;
    });
  }

  ngAfterViewInit(): void {
    this.counterFunc(this.points, this.duration, this.animatedPoints);
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
