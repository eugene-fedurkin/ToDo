import { Credentials, User } from '../models/';

export abstract class IUserService {
  abstract register(credential: Credentials): Promise<User>;
  abstract getUser(): Promise<User>;
  abstract getUserVerbose(): Promise<User>;
  abstract updateUser(email: string): Promise<User>;
  abstract delete(): Promise<User>;
}