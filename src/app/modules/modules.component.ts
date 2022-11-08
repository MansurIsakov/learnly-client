import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ModulesSection } from '../common/constants/modules.enum';
import { IModule } from '../models/module.model';
import { IUser } from '../models/user.model';
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
  sub: Subscription;
  modules: IModule[];
  canBeChanged: boolean = false;
  modulesSection = ModulesSection.ALLCOURSE;
  userCredits: number;
  selectedModule: IModule;

  constructor(
    private activatedRoute: ActivatedRoute,
    private modulesService: ModulesService
  ) {}

  ngOnInit(): void {
    this.sub = this.activatedRoute.data.subscribe(({ modules }) => {
      this.isCoreModulesNeeded = modules.length === 0;

      if (this.isCoreModulesNeeded) {
        this.modulesService.setCoreModules().subscribe();
      }
    });

    this.userCredits = this.modulesService.credits;

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

        this.modules = this.modulesService.getCourseModules(
          this.user.level,
          this.user.course
        );

        break;
      case ModulesSection.ALLMODULES:
        this.canBeChanged = false;
        this.modules = this.modulesService.getAllModules();
        break;
      case ModulesSection.MYMODULES:
        this.canBeChanged = true;
        this.modules = this.modulesService.getModules();
        break;
      case ModulesSection.COREMODULES:
        this.canBeChanged = false;
        this.modules = this.modulesService.getCoreModules(
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

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
