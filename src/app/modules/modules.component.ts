import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ModulesSection } from '../common/constants/modules.enum';
import { IModule } from '../models/module.model';
import { IUser } from '../models/user.model';
import { DataStorageService } from '../shared/data-storage.service';
import { ModulesService } from './modules.service';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.scss'],
})
export class ModulesComponent implements OnInit, OnDestroy {
  error: string = null;
  isCoreModulesNeeded: boolean = false;
  user: IUser = JSON.parse(localStorage.getItem('userData'));
  subs: Subscription[] = [];
  modules$: Observable<IModule[]>;
  canBeChanged: boolean = false;
  modulesSection = ModulesSection.ALLCOURSE;
  userCredits$: Observable<number>;
  selectedModule: IModule;
  sortValue: string | number = '';
  sortType: string = '';

  constructor(
    private modulesService: ModulesService,
    private dsService: DataStorageService
  ) {}

  ngOnInit(): void {
    this.subs.push(
      this.dsService.fetchUserModules().subscribe((resData) => {
        this.modulesService.userModules = resData;
        this.isCoreModulesNeeded = resData.length === 0;

        if (this.isCoreModulesNeeded) {
          this.subs.push(
            this.modulesService.setCoreModules().subscribe((resData) => {
              this.modulesService.userCredits = resData.results.credits;
            })
          );
        }
      })
    );

    this.subs.push(
      this.dsService.fetchAllModules().subscribe((resData) => {
        this.modulesService.modules = resData;
      })
    );

    this.userCredits$ = this.modulesService.credits$;

    this.onLoadModules(this.modulesSection);
  }

  onHandleError() {
    this.error = null;
  }

  onCloseModal() {
    this.isCoreModulesNeeded = false;
  }

  onChangeModules(val) {
    this.modulesSection = val;
    this.onLoadModules(val);
  }

  onLoadModules(section: ModulesSection) {
    switch (section) {
      case ModulesSection.ALLCOURSE:
        this.canBeChanged = true;

        this.modules$ = this.modulesService.filteredCourseModules(
          this.user.level,
          this.user.course
        );
        break;
      case ModulesSection.ALLMODULES:
        this.canBeChanged = false;
        this.modules$ = this.modulesService.modules$;
        break;
      case ModulesSection.MYMODULES:
        this.canBeChanged = true;
        this.modules$ = this.modulesService.userModules$;
        break;
      case ModulesSection.COREMODULES:
        this.canBeChanged = false;
        this.modules$ = this.modulesService.filteredCoreModules(
          this.user.level,
          this.user.course
        );

        break;
      default:
        break;
    }
  }

  onSelectModule(module: IModule) {
    this.selectedModule = module;
  }

  onSort(sortValue: string) {
    if (sortValue === 'coreType') {
      this.sortType = 'type';
      this.sortValue = 'core';
    } else if (sortValue === 'optionalType') {
      this.sortType = 'type';
      this.sortValue = 'optional';
    } else if (sortValue === 'level4') {
      this.sortType = 'moduleLevel';
      this.sortValue = 4;
    } else if (sortValue === 'level5') {
      this.sortType = 'moduleLevel';
      this.sortValue = 5;
    } else if (sortValue === 'level6') {
      this.sortType = 'moduleLevel';
      this.sortValue = 6;
    }
    return this.sortType, this.sortValue;
  }

  ngOnDestroy(): void {
    if (this.subs) {
      this.subs.forEach((sub) => sub.unsubscribe());
    }
  }
}
