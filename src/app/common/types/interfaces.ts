export interface IConst {
  target: string | number;
  name: string;
}

export interface ResponseData<T> {
  results: T;
  token?: string;
  count?: number;
  credits?: number;
}

export interface IClass {
  day: string;
  groups: string[];
  time: string;
  tutor: string;
  type: string;
  venue: string;
  moduleName: string;
}

export interface IExam {
  id: string;
  examDate: string;
  examType: string;
  examModule: string;
  isPassed: boolean;
}

export interface ITask {
  id: string;
  taskTitle: string;
  taskDescription: string;
  taskStatus: boolean;
}
