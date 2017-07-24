import { User } from '../models/user';
import { Credentials } from '../models/credentials';


export interface IUserService {
  register(credential: Credentials): User;
  getUser(): User;
  getUserVerbouse(): User;
  updateUser(email: string): User;
  delete(): User;
}