export interface IConst {
  target: string;
  name: string;
}

export interface ResponseData<T> {
  message: string;
  error: boolean;
  code: number;
  results: T;
}
