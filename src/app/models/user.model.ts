export class User {
  constructor(
    public user: {
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
  ) {}

  get token() {
    if (!this.user._token) {
      return null;
    }
    return this.user._token;
  }
}
