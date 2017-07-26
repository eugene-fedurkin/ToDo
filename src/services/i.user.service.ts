import { User } from '../models/user';
import { Credentials } from '../models/credentials';


export interface IUserService {
  register(credential: Credentials): Promise<User>;
  getUser(): Promise<User>;
  getUserVerbouse(): Promise<User>;
  updateUser(email: string): Promise<User>;
  delete(): Promise<User>;
}