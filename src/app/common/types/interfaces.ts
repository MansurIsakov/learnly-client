export interface IConst {
  target: string;
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
