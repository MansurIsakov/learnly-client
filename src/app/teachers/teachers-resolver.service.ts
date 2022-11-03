import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { ITeacher } from '../models/teacher.model';
import { DataStorageService } from '../shared/data-storage.service';
import { TeachersService } from './teachers.service';

@Injectable({ providedIn: 'root' })
export class TeachersResolverService implements Resolve<ITeacher[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private tService: TeachersService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const teachers = this.tService.getTeachers();

    if (teachers.length === 0) {
      return this.dataStorageService.fetchTeachers();
    } else {
      return teachers;
    }
  }
}
