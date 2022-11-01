export interface ITeacher {
  _id?: string;
  name: string;
  department: string;
  email: string;
  position: string;
  modules: string[];
  reviews: string[];
  imageNum: number;
  createdAt?: string;
  updatedAt?: string;
}

export class TeacherModel implements ITeacher {
  _id?: string;
  name: string;
  department: string;
  email: string;
  position: string;
  modules: string[];
  reviews: string[];
  imageNum: number;
  createdAt?: string;
  updatedAt?: string;

  constructor(source: ITeacher) {
    this._id = source._id;
    this.name = source.name;
    this.department = source.department;
    this.email = source.email;
    this.position = source.position;
    this.modules = source.modules;
    this.reviews = source.reviews;
    this.imageNum = source.imageNum;
    this.createdAt = source.createdAt;
    this.updatedAt = source.updatedAt;
  }
}
