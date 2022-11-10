import { IClass } from '../common/types/interfaces';

export interface IModule {
  moduleLevel: number;
  moduleCode: string;
  moduleName: string;
  credits: number;
  type: string;
  teachers: [];
  classes: IClass[];
  courses: string[];
  id: string;
}

export class ModuleModel implements IModule {
  moduleLevel: number;
  moduleCode: string;
  moduleName: string;
  credits: number;
  type: string;
  teachers: [];
  classes: IClass[];
  courses: string[];
  id: string;

  constructor(source: IModule) {
    this.moduleLevel = source.moduleLevel;
    this.moduleCode = source.moduleCode;
    this.moduleName = source.moduleName;
    this.credits = source.credits;
    this.type = source.type;
    this.teachers = source.teachers;
    this.classes = source.classes;
    this.courses = source.courses;
    this.id = source.id;
  }
}
