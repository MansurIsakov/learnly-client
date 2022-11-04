export interface IUser {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  level: string;
  course: string;
  role?: string;
  emoji?: string;
  status?: string[];
  modules?: string[];
  credits: number;
  dob?: string;
  _createdAt?: string;
  updatedAt?: string;
}

export class UserModel implements IUser {
  _id: string;
  _token: string;
  firstName: string;
  lastName: string;
  email: string;
  level: string;
  course: string;
  role: string;
  emoji?: string;
  dob?: string;
  status?: string[];
  modules?: string[];
  credits: number;
  _createdAt?: string;
  updatedAt?: string;

  constructor(source: IUser) {
    this._id = source._id;
    this.firstName = source.firstName;
    this.lastName = source.lastName;
    this.email = source.email;
    this.level = source.level;
    this.course = source.course;
    this.role = source.role;
    this.emoji = source.emoji;
    this.dob = source.dob;
    this.status = source.status;
    this.modules = source.modules;
    this.credits = source.credits;
    this._createdAt = source._createdAt;
    this.updatedAt = source.updatedAt;
  }
}
