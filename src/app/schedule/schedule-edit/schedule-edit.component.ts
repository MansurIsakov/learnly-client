import { Component, OnChanges, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IModule } from 'src/app/models/module.model';
import { ModulesService } from 'src/app/modules/modules.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-schedule-edit',
  templateUrl: './schedule-edit.component.html',
  styleUrls: ['./schedule-edit.component.scss'],
})
export class ScheduleEditComponent implements OnInit {
  modules$: Observable<IModule[]>;
  currentModule: any;

  constructor(private dsService: DataStorageService) {}

  ngOnInit(): void {
    this.modules$ = this.dsService.fetchUserModules();
  }
}
