// import { Injectable } from '@angular/core';
// import {
//   ActivatedRouteSnapshot,
//   Resolve,
//   RouterStateSnapshot,
// } from '@angular/router';
// import { of, switchMap } from 'rxjs';
// import { IModule } from '../models/module.model';
// import { DataStorageService } from '../shared/data-storage.service';
// import { ModulesService } from './modules.service';

// @Injectable({ providedIn: 'root' })
// export class ModulesResolverService implements Resolve<IModule[]> {
//   constructor(
//     private dataStorageService: DataStorageService,
//     private modulesService: ModulesService
//   ) {}

//   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
//     return this.dataStorageService.fetchAllModules();
//   }
// }
