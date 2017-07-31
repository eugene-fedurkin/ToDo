import { Credentials, User } from '../models/';

export abstract class IUserService {
  abstract register(credential: Credentials): User;
  abstract getUser(): User;
  abstract getUserVerbose(): User;
  abstract updateUser(email: string): User;
  abstract delete(): User;
}