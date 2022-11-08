import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { IModule } from '../models/module.model';
import { DataStorageService } from '../shared/data-storage.service';
import { ModulesService } from './modules.service';

@Injectable({ providedIn: 'root' })
export class ModulesResolverService implements Resolve<IModule[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private modulesService: ModulesService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const modules = this.modulesService.getModules();

    this.dataStorageService.fetchAllModules().subscribe((modules) => {
      this.modulesService.setAllModules(modules.results);
    });

    if (modules.length === 0) {
      return this.dataStorageService.fetchUserModules();
    } else {
      return modules;
    }
  }
}
