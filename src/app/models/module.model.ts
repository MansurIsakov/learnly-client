export interface IModule {
  moduleLevel: number;
  module: string[];
  moduleCode: string;
  moduleName: string;
  credits: number;
  type: string;
  teachers: [];
  classes: object[];
  courses: string[];
}

export class ModuleModel implements IModule {
  moduleLevel: number;
  module: string[];
  moduleCode: string;
  moduleName: string;
  credits: number;
  type: string;
  teachers: [];
  classes: object[];
  courses: string[];

  constructor(source: IModule) {
    this.moduleLevel = source.moduleLevel;
    this.module = source.module;
    this.moduleCode = source.moduleCode;
    this.moduleName = source.moduleName;
    this.credits = source.credits;
    this.type = source.type;
    this.teachers = source.teachers;
    this.classes = source.classes;
    this.courses = source.courses;
  }
}
