import { Credentials, User } from '../models/';

export interface IUserService {
  register(credential: Credentials): Promise<User>;
  getUser(): Promise<User>;
  getUserVerbose(): Promise<User>;
  updateUser(email: string): Promise<User>;
  delete(): Promise<User>;
}