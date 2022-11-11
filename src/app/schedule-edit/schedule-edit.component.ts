import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IModule } from 'src/app/models/module.model';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { ISchedule } from '../models/schedule.model';
import { ScheduleService } from '../schedule/schedule.service';

@Component({
  selector: 'app-schedule-edit',
  templateUrl: './schedule-edit.component.html',
  styleUrls: ['./schedule-edit.component.scss'],
})
export class ScheduleEditComponent implements OnInit {
  modules$: Observable<IModule[]>;
  schedule$: Observable<ISchedule>;
  currentModule: IModule;

  constructor(
    private dsService: DataStorageService,
    private scheduleService: ScheduleService
  ) {}

  ngOnInit(): void {
    this.modules$ = this.dsService.fetchUserModules();
    this.schedule$ = this.scheduleService.fetchSchedule();
  }

  findModule(event, modules: IModule[]) {
    const currentModuleId = event.target.value;

    const targetModule = modules.filter((module) => {
      return module.id === String(currentModuleId);
    });

    this.currentModule = targetModule[0];
  }
}
