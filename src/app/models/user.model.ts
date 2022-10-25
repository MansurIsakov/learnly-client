export interface User {
  _id: string;
  _token: string;
  firstName: string;
  lastName: string;
  email: string;
  level: number;
  course: string;
  role: string;
  emoji?: string;
  dob?: string;
  _createdAt?: string;
  updatedAt?: string;
}

export class UserModel implements User {
  _id: string;
  _token: string;
  firstName: string;
  lastName: string;
  email: string;
  level: number;
  course: string;
  role: string;
  emoji?: string;
  dob?: string;
  _createdAt?: string;
  updatedAt?: string;

  constructor(source: User) {
    this._id = source._id;
    this._token = source._token;
    this.firstName = source.firstName;
    this.lastName = source.lastName;
    this.email = source.email;
    this.level = source.level;
    this.course = source.course;
    this.role = source.role;
    this.emoji = source.emoji;
    this.dob = source.dob;
    this._createdAt = source._createdAt;
    this.updatedAt = source.updatedAt;
  }
}
